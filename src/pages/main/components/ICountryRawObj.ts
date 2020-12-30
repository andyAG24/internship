export interface ICountryRawObj {
  alpha2Code: string,
  alpha3Code: string,
  altSpellings: Array<string>,
  area: number,
  borders: Array<string>,
  callingCodes: Array<string>,
  capital: string,
  cioc: string,
  currencies: Array<CurrencyObj>,
  demonym: string,
  flag: string,
  gini: number,
  languages: Array<LanguageObj>,
  latlng: Array<number>,
  name: string,
  nativeName: string,
  numericCode: string,
  population: number,
  region: string,
  regionalBlocs: Array<RegionalBlocObj>,
  subregion: string,
  timezones: Array<number>,
  topLevelDomain: Array<number>,
}

export interface CurrencyObj {
  code: string,
  name: string,
  symbol: string,
}

export interface LanguageObj {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string,
}

export interface RegionalBlocObj {
  acronym: string,
  name: string,
  otherAcronyms: Array<string>,
  otherNames: Array<string>,
}