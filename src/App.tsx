import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import RegisterOrganization from "./pages/RegisterOrganization";
import RegistrationSuccess from "./pages/RegistrationSuccess";


import NonProfit from "./pages/NonProfit";
import HowItWorksPage from "./pages/HowItWorks";
import About from "./pages/About";
import ImpactStories from "./pages/ImpactStories";
import ShareStory from "./pages/ShareStory";
import StorySubmissionSuccess from "./pages/StorySubmissionSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nonprofits" element={<NonProfit />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/register-organization" element={<RegisterOrganization />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<ImpactStories />} />
          <Route path="/share-story" element={<ShareStory />} />
          <Route path="/story-submission-success" element={<StorySubmissionSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

