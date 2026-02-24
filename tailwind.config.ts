import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        stevenson: {
          green: '#275D38',
          gold: '#C99700',
          metallicGold: '#AE9142',
          red: '#BA0C2F',
          orange: '#FE5000',
          midGreen: '#48A23F',
          highlightGreen: '#D0DF00',
          darkBlue: '#002F6C',
          blue: '#005587',
          teal: '#006F62',
          brightBlue: '#00A3E0',
          coolGray2: '#D0D0CE',
          coolGray7: '#97999B',
          coolGray10: '#63666A',
          lightWarmGray: '#B7A99A',
          warmGray: '#7A6855'
        }
      },
      boxShadow: {
        card: '0 10px 25px rgba(39,93,56,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
