import { extendTheme } from 'native-base';

export const COLORS = {
  orange: '#F98125',
  lightOrange: '#FB9B50',
  lightBlue: '#5b84c4',
  blue: '#2c599d',
  darkerBlue: '#193a6f',
  darkBlue: '#11224d',
  white: 'white',
  black: 'black',
  red: '#db1818',
  green: '#0ec527',
};

// export const GLOBAL_STYLES = {
//   $textBlack: COLORS.black,
//   $textwWhite: COLORS.white,
//   $orang
// };

export const NB_THEME = extendTheme({
  components: {
    Text: {
      defaultProps: {
        size: 'md',
      },
      sizes: {
        xl: {
          fontSize: '64px',
        },
        lg: {
          fontSize: '32px',
        },
        md: {
          fontSize: '20px',
        },
        sm: {
          fontSize: '16px',
        },
      },
    },
  },
});
