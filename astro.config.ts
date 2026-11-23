import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://wibblio64.github.io",
    vite: {
        plugins: [tailwindcss()]
    }
});