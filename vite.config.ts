import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
  ],
  server: {
    // host: true, // runs on localhost and network IP
    host: "127.0.0.1", // runs on localhost and network IP
    port: 2024, // custom port
    open: true, // opens browser window automatically
    strictPort: true, // fail if port is taken
    hmr: {
      overlay: true, // shows errors in browser overlay
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // safer than string path
      "@icons": path.resolve(__dirname, "src/Components/Icons"), // ✅ new alias
      // "@": "/src",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // include TS extensions
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "EVAL") return;
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // Core React
          if (id.includes("react")) return "react-vendor";

          // Ant Design
          if (id.includes("antd") || id.includes("@ant-design")) return "antd";

          // Charts
          if (id.includes("apexcharts")) return "charts";

          // Calendar
          if (id.includes("@fullcalendar")) return "calendar";

          // Maps
          if (id.includes("jvectormap")) return "maps";

          // Animations & sliders
          if (id.includes("gsap") || id.includes("swiper")) return "animations";

          // Drag & drop
          if (id.includes("react-dnd")) return "dnd";

          return "vendor";
        },
      },
    },
  },
});
