import HeroSection from "@/components/HeroSection";
import SuccessStories from "@/components/SuccessStories";
import CreatorFeesSection from "@/components/CreatorFeesSection";
import ServicesSection from "@/components/ServicesSection";
import OnboardingGuide from "@/components/OnboardingGuide";
import SignUpForm from "@/components/SignUpForm";
import OBSGuide from "@/components/OBSGuide";
import ComingSoonSection from "@/components/ComingSoonSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SuccessStories />
      <CreatorFeesSection />
      <ServicesSection />
      <OnboardingGuide />
      <SignUpForm />
      <OBSGuide />
      <ComingSoonSection />
      
      {/* Footer */}
      <footer className="bg-stream-card/50 border-t border-border/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold glow-text mb-4">StreamLaunch</h3>
            <p className="text-muted-foreground mb-6">
              Your gateway from traditional streaming to pump.fun success
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;