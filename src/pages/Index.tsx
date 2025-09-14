// src/pages/Index.tsx (Updated with Navbar and section IDs)
import ComingSoonSection from "@/components/ComingSoonSection";
import CreatorFeesSection from "@/components/CreatorFeesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OBSGuide from "@/components/OBSGuide";
import OnboardingGuide from "@/components/OnboardingGuide";
import ServicesSection from "@/components/ServicesSection";
import SignUpForm from "@/components/SignUpForm";
import SuccessStories from "@/components/SuccessStories";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="success-stories">
          <SuccessStories />
        </section>

        <section id="creator-fees">
          <CreatorFeesSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="onboarding-guide">
          <OnboardingGuide />
        </section>

        <section id="signup">
          <SignUpForm />
        </section>

        <section id="obs-guide">
          <OBSGuide />
        </section>

        <section id="coming-soon">
          <ComingSoonSection />
        </section>

        {/* Footer */}
        <footer className="bg-stream-card/50 border-t border-border/20 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold glow-text mb-4">
                StreamLaunch
              </h3>
              <p className="text-muted-foreground mb-6">
                Your gateway from traditional streaming to pump.fun success
              </p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Support
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
