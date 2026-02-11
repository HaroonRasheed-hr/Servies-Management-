import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCategoryGrid from "@/components/ServiceCategoryGrid";
import HowItWorks from "@/components/HowItWorks";
import ReviewsSection from "@/components/ReviewsSection";
import MobileAppSection from "@/components/MobileAppSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingChatBubble from "@/components/FloatingChatBubble";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen">
      <Header user={user} onLogout={logout} />
      <HeroSection />
      <ServiceCategoryGrid />
      <HowItWorks />
      <ReviewsSection />
      <MobileAppSection />
      <CTASection />
      <Footer />
      <FloatingChatBubble />
    </div>
  );
};

export default Index;
