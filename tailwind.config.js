/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
       
      },
      backgroundImage: {
        'contactHeaderImage': "url('/assets/images/hero1.jpg')",
        'hs_marine': "url('/assets/images/marine.jpg')",
        'hs_equipment': "url('/assets/images/equipment.jpg')",
        'hs_consultancy': "url('/assets/images/consultancy.jpg')",
        'hs_onboarding': "url('/assets/images/onboarding.jpg')",
        'hs_protocol': "url('/assets/images/protocol.jpg')",
        'pg_marine': "url('/assets/images/pg_marine.jpg')",
        'pg_equipment': "url('/assets/images/pg_equipment.jpg')",
        'pg_consultancy': "url('/assets/images/pg_consultancy.jpg')",
        'pg_onboarding': "url('/assets/images/pg_onboarding.jpg')",
        'pg_protocol': "url('/assets/images/pg_protocol.jpg')",
        'pg_corevalues': "url('/assets/images/pg_corevalues.jpg')",
        'pg_contactus': "url('/assets/images/pg_contactus.jpg')",
        'pg_structure': "url('/assets/images/pg_structure.jpg')",
        'hs_corevalues': "url('/assets/images/hs_corevalues.jpg')",
        'hero': "url('/assets/images/hero.jpg')",
        'hero1': "url('/assets/images/hero1.jpg')",
        'hero2': "url('/assets/images/hero2.jpg')",
        'hero3': "url('/assets/images/her.jpg')",
        'aboutUs': "url('/assets/images/aboutUs.jpg')",
        'coreValues': "url('/assets/images/jeva_1.jpg')",
      },
      colors: {
        'primary': "#373D20",
        "secondary": "#F8BD7F",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}