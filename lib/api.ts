'use server'
import { Country } from "@/types/types";
import localData from "@/data.json";

export async function getCountries(): Promise<Country[]> {
    const data = localData as unknown as Country[]
    return data
}

export async function getCountryByCode(code: string): Promise<Country | undefined> {
    const countries = await getCountries();
    return countries.find((c) => c.alpha3Code.toLowerCase() === code.toLowerCase());
}