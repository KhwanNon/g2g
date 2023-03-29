import {colorTextTitle} from '../../base/color';

export function header(name: string, color: any): any {
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
}

export const noHeader = {headerShown: false};
