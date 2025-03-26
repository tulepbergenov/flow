import { theme as antdTheme, ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "system-ui",
  },
  components: {
    Button: {
      primaryShadow: "none",
    },
  },
  algorithm: antdTheme.defaultAlgorithm,
};
