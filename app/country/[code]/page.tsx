import { Button } from "@/components/ui/button";
import { getCountryByCode } from "@/lib/api";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CountryPageProps {
  params: Promise<{
    code: string;
  }>;
}

async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;
  const country = await getCountryByCode(code);

  if (!country) {
    return notFound();
  }

  return (
    <section>
      <Link href={"/"}>
        <Button variant={"outline"} className="cursor-pointer">
          <ArrowLeft />
          <span>Back</span>
        </Button>
      </Link>
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div className="relative aspect-5/3 w-full shadow-lg rounded-lg overflow-hidden">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
            fill
            className="object-cover"
            priority // Prioridad alta porque es la imagen principal
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-8 px-12">
          <h1 className="text-center text-3xl font-extrabold">
            {country.name}
          </h1>

          {/* Sub-grid para las dos columnas de detalles */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-center md:text-start">
            {/* Lista Izquierda */}
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">Native Name:</span>{" "}
                {country.nativeName}
              </li>
              <li>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
              </li>
              <li>
                <span className="font-semibold">Region:</span> {country.region}
              </li>
              <li>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </li>
              <li>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital || "N/A"}
              </li>
            </ul>

            {/* Lista Derecha */}
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.topLevelDomain?.join(", ")}
              </li>
              <li>
                <span className="font-semibold">Currencies:</span>{" "}
                {/* Mapeamos el array de monedas */}
                {country.currencies?.map((c) => c.name).join(", ")}
              </li>
              <li>
                <span className="font-semibold">Languages:</span>{" "}
                {/* Mapeamos el array de lenguajes */}
                {country.languages?.map((l) => l.name).join(", ")}
              </li>
            </ul>
          </div>

          {country.borders && (
            <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
              <span>Border Countries:</span>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {country.borders?.map((border, index) => (
                  <div key={border} className="bg-card px-5">
                    <p>{border}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CountryPage;
