export const featureReduce = (data: any) => {
  return data.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.code]: item }),
    {},
  );
};
