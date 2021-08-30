module.exports = {
    purge: [],
    jit: true,
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    base: "#FFAEC9",
                    shadow: "#FFC6D9",
                    highlight: "#FFE6EE",
                    accent: "#ff3d00",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};