import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/cv-sida-react",
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(dirname, "index.html"),
  //       404: resolve(dirname, "public/404.html"),
  //     },
  //   },
  // },
});
