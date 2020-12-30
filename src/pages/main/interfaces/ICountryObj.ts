export interface ICountryObj {
  alpha3Code: string,
  altSpellings: Array<string>,
  area: number,
  borders: Array<string>,
  callingCodes: Array<string>,
  capital: string,
  demonym: string,
  flag: string,
  name: string,
  nativeName: string,
  numericCode: string,
  population: number,
  region: string,
  subregion: string,
  timezones: Array<number>,
  topLevelDomain: Array<number>,
  [key: string]: any
}