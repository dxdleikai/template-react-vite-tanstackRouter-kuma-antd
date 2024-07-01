// import { getKumaConfig } from '@jd/react-custom-theme/dist/es/defaultToken.js';
import { createTheme } from '@kuma-ui/core';
import themeToken from './src/theme';

const theme = createTheme({
  // @ts-ignore
  // colors: {
  //   ...getKumaConfig({ token: themeToken }),
  // },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
