/**
 * Vite Configuration
 * 
 * This file configures the Vite build tool for the Toorrii application.
 * Vite provides fast development server and optimized production builds.
 * 
 * Configuration:
 * - React with SWC for fast refresh and compilation
 * - Path aliases for cleaner imports (@/ = ./src/)
 * - Development server on port 8080
 * 
 * @see https://vitejs.dev/config/
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Export Vite configuration
export default defineConfig(({ mode }) => ({
  // Development server configuration
  server: {
    host: "::", // Listen on all network interfaces
    port: 8080, // Development server port
  },
  // Vite plugins
  plugins: [
    react() // React plugin with SWC compiler for fast refresh
  ],
  // Module resolution configuration
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Enable @/ import paths
    },
  },
}));
