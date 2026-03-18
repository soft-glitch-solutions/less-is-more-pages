
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ConstructionPage from "./pages/ConstructionPage";
import PlumbingPage from "./pages/PlumbingPage";
import ElectricalPage from "./pages/ElectricalPage";
import SecurityPage from "./pages/SecurityPage";
import CleaningPage from "./pages/CleaningPage";
import PropertiesPage from "./pages/PropertiesPage";
import BudgetBuilderPage from "./pages/BudgetBuilderPage";
import EmergencyServicesPage from "./pages/EmergencyServicesPage";
import BrandingPage from "./pages/BrandingPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/plumbing" element={<PlumbingPage />} />
          <Route path="/electrical" element={<ElectricalPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/cleaning" element={<CleaningPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/budget-builder" element={<BudgetBuilderPage />} />
          <Route path="/emergency-services" element={<EmergencyServicesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
