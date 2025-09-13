import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { name } = require("./package.json");
const file = (type) => `dist/${name}.${type}.js`;
const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ["node_modules"],
};

export { name, file };
export default {
  input: "src/index.ts",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    nodeResolve(),
    vue(),
    css({ output: "bundle.css" }),
    typescript({
      tsconfigOverride: overrides,
    }),
  ],
  external: ["vue", "lodash-es"],
};
