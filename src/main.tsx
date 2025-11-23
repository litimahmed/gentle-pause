/**
 * Main Application Entry Point
 * 
 * This file serves as the root of the React application.
 * It sets up all necessary providers and renders the main App component.
 * 
 * Key Features:
 * - React StrictMode for development warnings and best practices
 * - Client-side routing with React Router
 * - React Query for server state management and caching
 * - Multi-language support through TranslationContext
 * 
 * @author Toorrii Development Team
 * @version 1.0.0
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationProvider } from "@/contexts/TranslationContext";
import App from "./App.tsx";
import "./index.css";

// Initialize React Query client for server state management
const queryClient = new QueryClient();

/**
 * Root Application Render
 * 
 * Provider hierarchy (outer to inner):
 * 1. StrictMode - Development mode checks and warnings
 * 2. BrowserRouter - Client-side routing
 * 3. QueryClientProvider - React Query state management
 * 4. TranslationProvider - Multi-language support (FR, AR, EN)
 * 5. App - Main application component
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TranslationProvider>
          <App />
        </TranslationProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
