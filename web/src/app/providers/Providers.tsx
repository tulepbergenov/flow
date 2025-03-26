import { LayoutType } from "@/shared/types";
import { AntDesignProvider } from "./AntDesignProvider";

export const Providers = ({ children }: LayoutType) => {
  return <AntDesignProvider>{children}</AntDesignProvider>;
};
