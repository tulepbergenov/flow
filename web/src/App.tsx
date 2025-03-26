import { Typography } from "antd";
import { Providers } from "./app/providers";

export const App = () => {
  return (
    <Providers>
      <main className="flex-auto">
        <section>
          <header>
            <Typography.Title level={1}>Hello World</Typography.Title>
          </header>
        </section>
      </main>
    </Providers>
  );
};
