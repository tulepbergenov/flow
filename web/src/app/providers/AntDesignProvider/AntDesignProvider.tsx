import { LayoutType } from "@/shared/types";
import { App, ConfigProvider } from "antd";
import en_US from "antd/locale/en_US";
import { theme } from "./AntDesignProvider.theme";

export const AntDesignProvider = ({ children }: LayoutType) => {
  return (
    <ConfigProvider locale={en_US} theme={theme}>
      <App className="flex h-full flex-col overflow-x-hidden">{children}</App>
    </ConfigProvider>
  );
};
