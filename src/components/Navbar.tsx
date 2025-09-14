// src/components/Navbar.tsx
import OnboardingModal from "@/components/OnboardingModal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Menu,
  Rocket,
  Settings,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Rocket },
    { id: "success-stories", label: "Success Stories", icon: TrendingUp },
    { id: "services", label: "Services", icon: Users },
    { id: "onboarding-guide", label: "Onboarding", icon: BookOpen },
    { id: "obs-guide", label: "OBS Setup", icon: Settings },
    { id: "coming-soon", label: "Roadmap", icon: Calendar },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stream-dark/95 backdrop-blur-md border-b border-border/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold glow-text md: hidden">
                StreamLaunch
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-1">
              <Button
                variant="stream"
                size="sm"
                onClick={() => setModalOpen(true)}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-stream-card/50 transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-stream-dark z-40 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-4 h-full overflow-y-auto">
          {/* Navigation Items */}
          <div className="space-y-2 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-4 w-full p-4 rounded-lg text-left hover:bg-stream-card/50 transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="space-y-4 mb-8">
            <Button
              variant="stream"
              size="lg"
              className="w-full text-lg py-4"
              onClick={() => {
                setModalOpen(true);
                setIsOpen(false);
              }}
            >
              Start Live Onboarding
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="bg-stream-card/30 rounded-lg p-6">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-4">
                Active Community
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Streamers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$2.5M+</div>
                  <div className="text-xs text-muted-foreground">Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />

      <OnboardingModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Navbar;
