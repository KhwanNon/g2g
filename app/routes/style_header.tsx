import {colorTextTitle} from '../../base/color';

export const header: any = (name: string, color: any) => {
  return {
    title: `${name}`,
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colorTextTitle,
    },
    headerStyle: {
      backgroundColor: color ?? 'white',
    },
  };
};

export const noHeader = {headerShown: false};
