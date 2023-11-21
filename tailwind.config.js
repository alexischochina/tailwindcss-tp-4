/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            borderRadius: {
                "ico-btn": "50%",
                "btn": "99999px",
                "container": "10px",
            },
            colors: {
                "beige": "#F7F7F7",
                "blue": "#E9F1FA",
                "yellow": "#FFF089",
                "grey": "#E7E7E7",
                "white": "#FFFFFF",
                "black": "#000000",
                "beige-dark": "#1E293B",
            },
            fontSize: {
                "xs": "0.4rem",
                "md": ".9rem",
                "lg": "1.5rem",
                "5xl": "5.2rem",
            },
        },
    },
    plugins: [],
    darkMode: "class",
}