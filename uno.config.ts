import { defineConfig } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        "./**/*.{ts,tsx,vue}",
      ]
    }
  }
});
