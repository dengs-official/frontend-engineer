import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import reslove from "@rollup/plugin-node-resolve";
import replace from "rollup-plugin-replace";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    vue({
      target: "browser",
      css: false,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.VUE_ENV": JSON.stringify("browser"),
    }),
    css({ output: "bundle.css" }),
    reslove({
      browser: true,
      dedupe: ["vue"],
    }),
    commonjs(),
    !production && serve(),

    !production && livereload("public"),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
