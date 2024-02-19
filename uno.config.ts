import { defineConfig } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        "./**/*.{ts,tsx,vue}",
      ]
    }
  },
  shortcuts: {
    'content-w': 'w-[700px]'
  }
});
