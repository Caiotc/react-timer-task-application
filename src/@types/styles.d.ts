import 'styled-components'
import { defaultTheme } from '../styles/themes/deafult'

type ThemeType = typeof defaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}

// once styled components are imported it doesnt subscribe th entire types