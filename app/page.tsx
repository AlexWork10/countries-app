import { CountrySelect } from "@/components/CountrySelect";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <section className="space-y-12">
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
    </section>
  );
}
