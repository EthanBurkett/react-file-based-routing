import { defineConfig, HmrContext, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import * as routes from "./startup/routes";

type ServicesType = Record<
  string,
  {
    start: () => void;
    update?: (server: ViteDevServer) => void;
  }
>;

const ServiceStartup = (services: ServicesType) => {
  return {
    name: "service-startup",
    configureServer: function () {
      Object.entries(services).forEach(([_, service]) => {
        service.start();
      });
    },
    handleHotUpdate: function ({ server }: HmrContext) {
      Object.entries(services).forEach(([_, service]) => {
        if (service.update) service.update(server);
      });
    },
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ServiceStartup({
      routes,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
