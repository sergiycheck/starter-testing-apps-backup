let a = {};

function createNestedObjectPropertiesInObject(
  obj: any,
  path: string,
  value: any
) {
  const properties = path.split('.');
  let current = obj;
  let lastProperty = properties.pop();
  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    if (current[property] === undefined) {
      current[property] = {};
    }
    current = current[property];
  }
  current[lastProperty] = decodeURIComponent(value);
}

const query =
  'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';

const propertiesWithValueStrArr = query.split('&');

const propertiesPathAndValueArr = propertiesWithValueStrArr.map((item) =>
  item.split('=')
);

propertiesPathAndValueArr.forEach(([path, value]) => {
  createNestedObjectPropertiesInObject(a, path, value);
});
