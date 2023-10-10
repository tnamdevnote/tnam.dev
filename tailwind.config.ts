import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        success: "#0070f3",
        error: "#ee0000",
        warning: "#f5a623",
        light: "#fafcfe",
        background: "#ffffff",
        "accent-1": "#fafafa",
        "accent-2": "#eaeaea",
        "accent-3": "#999999",
        "accent-4": "#888888",
        "accent-5": "#666666",
        "accent-6": "#444444",
        "accent-7": "#333333",
        "accent-8": "#111111",
        foreground: "#000000",
        body: "#4a4a68",
        "text/subtle": "#8c8ca1",
        primary: {
          "cyan-100": "#07b6d5",
          "cyan-75": "#07b6d575",
          "cyan-50": "#07b6d550",
          "cyan-25": "#07b6d525",
          "cyan-15": "#07b6d515",
        },
      },
      fontSize: {
        pretitle: ["0.75rem", { fontWeight: "bold" }],
        small: ["0.875rem", { fontWeight: "medium" }],
        body: ["1rem", { fontWeight: "medium" }],
        "body-bold": ["1rem", { fontWeight: "bold" }],
        subtitle: ["1.5rem", { fontWeight: "bold" }],
        h3: ["1.5rem", { fontWeight: "bold" }],
        h2: ["2.5rem", { lineHeight: "1", fontWeight: "bold" }],
        h1: ["3.5rem", { fontWeight: "bold" }],
      },
    },
  },
  plugins: [],
};

export default config;
