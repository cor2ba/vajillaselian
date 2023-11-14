import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "xxs": {"max": "320px"},
        "xs": {"max": "350px"},
        "s": {"max": "400px"},
        "l": {"max": "450px"},
        "m": {"max": "560px"},
        "xl": {"max": "900px"},
        "xxl": {"max": "1200px"},
        "xxxl": {"max": "1400px"}
      },
    },
  },
  plugins: [],
}
export default config
