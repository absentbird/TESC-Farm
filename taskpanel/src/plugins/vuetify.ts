/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#f5ddc3",
          "on-background": "#2a1a08",
          primary: "#285f8f",
          secondary: "#466860",
          accent: "#c45172",
          error: "#c45172",
          warning: "#673ab7",
          info: "#285f8f",
          success: "#466860",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#000000",
          "on-background": "#ffffff",
          primary: "#285f8f",
          secondary: "#466860",
          accent: "#c45172",
          error: "#c45172",
          warning: "#673ab7",
          info: "#285f8f",
          success: "#466860",
        },
      },
    powderpuff: {
        colors: {
          background: "#f5c3ee",
          "on-background": "#2a0824",
          primary: "#8f288f",
          secondary: "#684666",
          accent: "#517dc4",
          error: "#c051c4",
          warning: "#493ab7",
          info: "#8f284f",
          success: "#466468",
        }
      }
    }
  },
});
