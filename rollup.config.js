import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      dir: pkg.main,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    babel({
      presets: [
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-env",
      ],
    }),
    commonjs({ sourceMap: false }),
    css(),
  ],
  external: ["react", "react-dom"],
};
