import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: ['./**/*.{ts,tsx,vue}'],
    },
  },
  shortcuts: {
    'content-w': 'w-[800px]',
  },
  theme: {
    containers: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      '2xl': '(min-width: 1536px)',
      // lt - less than values
      'lt-sm': '(max-width: 640px)',
      'lt-md': '(max-width: 768px)',
      'lt-lg': '(max-width: 992px)',
      'lt-xl': '(max-width: 1200px)',
      'lt-2xl': '(max-width: 1536px)',
    },
  },
})
