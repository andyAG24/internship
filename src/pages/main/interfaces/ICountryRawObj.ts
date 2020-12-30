export interface ICountryRawObj {
  alpha2Code: string,
  alpha3Code: string,
  altSpellings: Array<string>,
  area: number,
  borders: Array<string>,
  callingCodes: Array<string>,
  capital: string,
  cioc: string,
  currencies: Array<ICurrencyObj>,
  demonym: string,
  flag: string,
  gini: number,
  languages: Array<ILanguageObj>,
  latlng: Array<number>,
  name: string,
  nativeName: string,
  numericCode: string,
  population: number,
  region: string,
  regionalBlocs: Array<IRegionalBlocObj>,
  subregion: string,
  timezones: Array<number>,
  topLevelDomain: Array<number>,
}

export interface ICurrencyObj {
  code: string,
  name: string,
  symbol: string,
}

export interface ILanguageObj {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string,
}

export interface IRegionalBlocObj {
  acronym: string,
  name: string,
  otherAcronyms: Array<string>,
  otherNames: Array<string>,
}