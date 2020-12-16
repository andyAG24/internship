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
  result[item[key]].isFavorite = false;
  return result;
};

exports.normalizeDataByField = (data, field) => data.reduce(this.assignBy(field), {});
