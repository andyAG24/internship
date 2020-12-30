import { ICountryObj } from 'pages/main/interfaces/ICountryObj';
import { ICountryRawObj } from 'pages/main/interfaces/ICountryRawObj';

export const getListString = (obj: ICountryObj[]): string => {
  let output = '';
  obj.forEach((item: any) => {
    output += item;
    if (obj.indexOf(item) !== obj.length - 1) output += ', ';
  });
  return (output);
};

export const assignBy = (key: any) => (data: any, item: any) => {
  const result = { ...data };
  result[item[key]] = item;
  return result;
};

export const removeUnnecessaryFields = (data: any, unnecessaryFields: Array<string>) => {
  const filtered: Array<any> = [];
  data.forEach((item: any) => {
    const result = { ...item };
    unnecessaryFields.forEach((field: string) => {
      delete result[field];
    });
    filtered.push(result);
  });
  return filtered;
};

export const normalizeDataByField = (data: any, field: string) => data.reduce(assignBy(field), {});

export const normalizeCountriesByField = (data: ICountryRawObj, field: string) => {
  const unnecessaryFields = [
    'alpha2Code',
    'latlng',
    'gini',
    'translations',
    'regionalBlocs',
    'cioc',
    'currencies',
    'languages',
  ];
  const newData = removeUnnecessaryFields(data, unnecessaryFields);
  return normalizeDataByField(newData, field);
};
