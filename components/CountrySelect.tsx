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

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export function CountrySelect() {
  return (
    <Select>
      <SelectTrigger className="w-full bg-card! shadow-sm border-none md:w-80">
        <SelectValue placeholder="Select by Region..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="default">Select by Region...</SelectItem>
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
