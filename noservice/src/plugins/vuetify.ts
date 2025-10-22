/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#dfecd0"
        },
      },
      dark: {
        colors: {
          primary: '#bcc99c',
          surface: '#121212',
          background: '#00341e',
        },
      },
    },
    defaultTheme: 'system',
  },
})
