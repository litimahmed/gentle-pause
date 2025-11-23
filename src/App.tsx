/**
 * Main Application Component
 * 
 * This component serves as the root routing configuration and global providers setup.
 * It defines all application routes and provides global UI utilities.
 * 
 * Routes:
 * - / - Home page with hero, features, partnerships, etc.
 * - /privacy-policy - Privacy policy and data protection information
 * - /about-us - Company information and mission
 * - /contact - Contact form and information
 * - * - 404 Not Found page (catch-all)
 * 
 * Global Providers:
 * - QueryClientProvider - React Query for data fetching and caching
 * - TooltipProvider - Enables tooltips throughout the application
 * - Toaster/Sonner - Toast notifications for user feedback
 * 
 * @component
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";

// React Query client instance for server state management
const queryClient = new QueryClient();

/**
 * App Component
 * 
 * Sets up global providers and defines application routing structure.
 * All new routes should be added above the catch-all "*" route.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global toast notification systems */}
      <Toaster />
      <Sonner />
      
      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUsPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
