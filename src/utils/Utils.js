exports.getListString = (obj) => {
  let output = '';
  obj.forEach((item) => {
    output += item;
    if (obj.indexOf(item) !== obj.length - 1) output += ', ';
  });
  return (output);
};

exports.assignBy = (key) => (data, item) => {
  const result = { ...data };
  result[item[key]] = item;
  return result;
};

function removeUnnecessaryFields(data, unnecessaryFields) {
  const filtered = [];
  data.forEach((item) => {
    const result = { ...item };
    unnecessaryFields.forEach((field) => {
      delete result[field];
    });
    filtered.push(result);
  });
  return filtered;
}

exports.normalizeDataByField = (data, field) => data.reduce(this.assignBy(field), {});

exports.normalizeCountriesByField = (data, field) => {
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
  return this.normalizeDataByField(newData, field);
};
