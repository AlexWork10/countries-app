export interface Currency {
    code: string;
    name: string;
    symbol?: string;
}

export interface Language {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName?: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms?: string[];
    otherNames?: string[];
}

export interface Country {
    name: string; // Ya no es un objeto, es un string directo
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string; // Importante para los enlaces (CCA3)
    callingCodes: string[];
    capital?: string; // Es un string único (puede no existir)
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng?: number[];
    demonym: string;
    area?: number;
    timezones: string[];
    borders?: string[]; // Array de códigos de países vecinos
    nativeName: string;
    numericCode: string;

    flags: {
        svg: string;
        png: string;
    };

    currencies?: Currency[];
    languages: Language[];

    translations: {
        [key: string]: string; // Diccionario flexible (br, pt, nl, etc.)
    };

    flag: string; // URL antigua de la bandera
    regionalBlocs?: RegionalBloc[];
    cioc?: string;
    independent?: boolean;
}