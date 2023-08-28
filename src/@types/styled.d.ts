import Theme from '@/theme/index';
import 'styled-components/native'

export type ThemeType = typeof Theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {};
}