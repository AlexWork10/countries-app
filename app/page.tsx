import CountryList from "@/components/CountryList";
import { getCountries } from "@/lib/api";

export default async function Home() {
  const countries = await getCountries();

  return <CountryList initialCountries={countries} />;
}
