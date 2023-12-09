/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,png}"],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bold': ['neueBold', 'sans-serif'],
        'exbold': ['neueExtraBold', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('assets/UI/bg_member.png')",
        'partner': "url('assets/UI/partner_bg.png')",
        'join-us': "url('assets/UI/bg_joinus.png')",
        'media': "url('assets/UI/bgMedia.png')",
        'video': "url('assets/UI/bg_video.png')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'my-animate': 'my-animate 50s linear infinite',
      },
      keyframes: {
        'spin-slow': { 
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'my-animate': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

