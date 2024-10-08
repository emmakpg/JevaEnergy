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
      lg: ['20px', '26.94px'],
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
        'marine': "url('/assets/images/marine1.webp')",
        'pg_equipment': "url('/assets/images/pg_equipment.webp')",
        'pg_consultancy': "url('/assets/images/pg_consultancy.webp')",
        'pg_onboarding': "url('/assets/images/pg_onboarding.webp')",
        'pg_protocol': "url('/assets/images/pg_protocol.webp')",
        'pg_corevalues': "url('/assets/images/pg_corevalues.webp')",
        'pg_contactus': "url('/assets/images/pg_contactus.webp')",
        'pg_structure': "url('/assets/images/pg_structure.webp')",
        'hs_corevalues': "url('/assets/images/hs_corevalues.webp')",
        'hero_core': "url('/assets/images/hero_core.webp')",
        'petroltruck': "url('/assets/images/petroltruck.webp')",
        'petrolhead': "url('/assets/images/petrolhead.webp')",
        'manpower': "url('/assets/images/manpower.webp')",
        'consultancy_hero': "url('/assets/images/consultancy_hero.webp')",
        'office_hero': "url('/assets/images/officehero.webp')",
        'office': "url('/assets/images/office.webp')",
        'workshop': "url('/assets/images/workshop.webp')",
        'csr': "url('/assets/images/csr.webp')",
        'hose': "url('/assets/images/hoses.webp')",
        'bolt': "url('/assets/images/bolt.webp')",
        'logistics': "url('/assets/images/logistics.webp')",
        'logistics-hero': "url('/assets/images/logistics1.webp')",
        'transport': "url('/assets/images/transportation.webp')",
        'hero1': "url('/assets/images/hero1.jpg')",
        'hero2': "url('/assets/images/hero2.jpg')",
        'hero3': "url('/assets/images/hero.webp')",
        'industry_hero': "url('/assets/images/industry_hero.webp')",
        'vision': "url('/assets/images/vision.webp')",
        'structure': "url('/assets/images/structure.webp')",
        'about_us': "url('/assets/images/about_us.webp')",
        'map': "url('/assets/images/map.png')",
        'excited': "url('/assets/images/excited.webp')",
        'equipment-hero': "url('/assets/images/equipment-hero.webp')",
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
       'xs': '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}