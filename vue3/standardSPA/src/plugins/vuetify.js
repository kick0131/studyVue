// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors';

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      // themesで定義された中から選ぶ
      //defaultTheme: 'myCustomTheme',
      defaultTheme: 'mylight',
      themes: {
        // キー名はVuetify固有
        myCustomTheme: {
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#E91E63',
            'primary-darken-1': '#D81B60',
            secondary: '#FFC107',
            'secondary-darken-1': '#FFB300',
            accent: '#FF8A80',
            error: '#F44336',
            info: '#4CAF50',
            success: '#2196F3',
            warning: '#FF5722',
          }
        },
        mylight: {
          colors: {
            background: colors.grey.lighten3,
            surface: colors.grey.lighten3,
            primary: colors.lightBlue.lighten4,
            secondary: colors.lightBlue.darken1,
            accent: colors.lightBlue.accent2,
            error: colors.pink.lighten2,
            warning: colors.amber.lighten2,
            info: colors.cyan.lighten2,
            success: colors.blue.lighten2,
            mycolor: "#e0e0e0",
          }
        }
      },
    },
  }
)

