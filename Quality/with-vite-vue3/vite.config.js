import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { merge } from "./src/utils/data";
const path = require("path");

const r = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const dynamicConfigs =
    mode === "legacy"
      ? {
          plugins: [
            legacy({
              targets: ["defaults", "not IE 11"],
            }),
          ],
          build: {
            outDir: "dist_legacy",
          },
        }
      : {};
  const staticConfigs = {
    /* common */
    base: "/",
    resolve: {
      alias: {
        "@": r("src"),
      },
    },
    plugins: [vue()],
    /* server */
    server: {},
    /* build */
    build: {},
  };
  return merge(staticConfigs, dynamicConfigs);
});
