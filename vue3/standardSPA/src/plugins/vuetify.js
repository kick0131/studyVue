// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        // キー名はVuetify固有、色は16進数指定
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
        }
      },
    },
  }
)

