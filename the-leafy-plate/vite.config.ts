import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxInject: 'import React from "react"',
  },
  plugins: [
    {
      name: 'swc-config',
      transform(src, id) {
        if (id.endsWith('.tsx') || id.endsWith('.ts')) {
          // Apply this transformation to .tsx/.ts files
          return {
            code: src,
            map: null,
            // Specify the setting that disables the namespace error
            config: {
              jsc: {
                transform: {
                  react: {
                    throwIfNamespace: false,
                  },
                },
              },
            },
          };
        }
        return { code: src };
      },
    },
  ],
});
