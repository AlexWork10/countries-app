import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountrySelectProps {
  regions: string[];
  selectedRegion: string;
  onRegionChange: (value: string) => void; // Función para avisar al padre
}

export function CountrySelect({
  regions,
  selectedRegion,
  onRegionChange,
}: CountrySelectProps) {
  return (
    <Select value={selectedRegion} onValueChange={onRegionChange}>
      <SelectTrigger className="w-full bg-card! shadow-sm border-none md:w-80">
        <SelectValue placeholder="Select by Region..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">Select by Region...</SelectItem>
          {regions.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
