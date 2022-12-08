/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'text-gradient': '#F1A10A',
                'text-color': '#2D2D2D',
                'primary-brand-color': '#032937',
            },
        },
    },
    plugins: [],
}
