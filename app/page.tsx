import CountryCard from "@/components/CountryCard";
import { CountrySelect } from "@/components/CountrySelect";
import { Input } from "@/components/ui/input";
import { getCountries } from "@/lib/api";
import { Search } from "lucide-react";

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="relative w-full md:w-80">
          <Search
            size={15}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
          <Input
            className="bg-card! shadow-sm border-none pl-8"
            type="text"
            placeholder="Search for a country"
          />
        </div>
        <CountrySelect />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {countries.map((country, index) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </section>
  );
}
