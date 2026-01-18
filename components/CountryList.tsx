"use client";
import CountryCard from "@/components/CountryCard";
import { CountrySelect } from "@/components/CountrySelect";
import { Input } from "@/components/ui/input";
import { Country } from "@/types/types";
import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  initialCountries: Country[];
};

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function CountryList({ initialCountries }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = initialCountries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      regionFilter && regionFilter !== "all"
        ? country.region === regionFilter
        : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="relative w-full md:w-80">
          <Search
            size={15}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
          <Input
            value={searchTerm}
            className="bg-card! shadow-sm border-none pl-8"
            type="text"
            placeholder="Search for a country"
            onChange={handleSearch}
          />
        </div>
        <CountrySelect
          regions={regions}
          selectedRegion={regionFilter}
          onRegionChange={setRegionFilter}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {filteredCountries.map((country, index) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </section>
  );
}
