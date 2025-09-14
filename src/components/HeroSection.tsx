import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import heroStreamingImage from "@/assets/hero-streaming.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroStreamingImage} 
          alt="Futuristic streaming setup with cryptocurrency displays"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stream-dark/90 via-stream-dark/80 to-stream-card/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <div className="inline-flex items-center gap-2 bg-stream-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Live Onboarding Sessions</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="glow-text">StreamLaunch</span>
          <br />
          <span className="text-muted-foreground">Your Pump.fun</span>
          <br />
          <span className="text-foreground">Launchpad</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          From <strong className="text-primary">Twitch to Riches</strong>. Get live onboarding, wallet funding, and expert guidance to launch your first pump.fun stream successfully.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="xl" className="w-full sm:w-auto">
            <Play className="mr-2 h-5 w-5" />
            Start Live Onboarding
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline-glow" size="xl" className="w-full sm:w-auto">
            <TrendingUp className="mr-2 h-5 w-5" />
            View Success Stories
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold glow-text mb-2">500+</div>
            <div className="text-muted-foreground">Streamers Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold glow-text mb-2">$2.5M+</div>
            <div className="text-muted-foreground">Total Volume Pumped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold glow-text mb-2">24/7</div>
            <div className="text-muted-foreground">Live Support</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-stream-green-glow/20 rounded-full blur-xl animate-pulse delay-700" />
    </section>
  );
};

export default HeroSection;