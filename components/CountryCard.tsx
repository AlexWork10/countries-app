import { Country } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  country: Country;
};

function CountryCard({ country }: Props) {
  return (
    <Link href={`/country/${country.alpha3Code}`}>
      <article className="h-full overflow-hidden rounded-md bg-card shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="relative aspect-5/3 w-full">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="space-y-1 p-5">
          <p>{country.name}</p>
          <p>
            Population: <span>{country.population}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
