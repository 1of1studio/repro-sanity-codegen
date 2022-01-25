import { SanityCodegenConfig } from "sanity-codegen";
import { defaultBabelOptions } from "sanity-codegen/cli";

const babelOptions = {
  ...defaultBabelOptions,
  plugins: [
    ...defaultBabelOptions.plugins.filter(([key]) => key !== "module-resolver"),
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "part:@sanity/base/schema-creator":
            "sanity-codegen/schema-creator-shim",
          "all:part:@sanity/base/schema-type":
            "sanity-codegen/schema-type-shim",
          "^part:.*": "sanity-codegen/no-op",
          "part:@sanity/base/schema-type": "sanity-codegen/schema-type-shim",
          "^config:.*": "sanity-codegen/no-op",
          "^all:part:.*": "sanity-codegen/no-op",
          "^part:@sanity/base/*": "sanity-codegen/no-op",
          "@sanity/base/components": "sanity-codegen/no-op",
          // '<forked-package-name>': 'sanity-codegen/no-op',
        },
      },
    ],
  ],
};

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema.js",
  outputPath: "./schema.ts",
  babelOptions,
};

export default config;
