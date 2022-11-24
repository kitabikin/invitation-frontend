export const modifyData = (from: string, item: any) => {
  let modify = item;

  if (from !== 'theme') {
    const feature = modify.feature.map(
      ({ is_active, theme_feature, column }: any) => {
        delete theme_feature.is_active;
        column = column.map(
          ({ is_active, theme_feature_column, value }: any) => {
            return { is_active, ...theme_feature_column, value };
          },
        );
        return { is_active, ...theme_feature, column };
      },
    );

    modify = { ...modify, feature };
  } else {
    modify.feature.map((feature: any) => {
      return feature.column.map((column: any) => {
        column.is_active = true;
        return column;
      });
    });
  }

  return modify;
};
