// src/components/HeroSection.tsx (Updated with integrated livestream)
import heroStreamingImage from "@/assets/hero-streaming.jpg";
import OnboardingModal from "@/components/OnboardingModal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  Play,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStreamingImage}
          alt="Futuristic streaming setup with cryptocurrency displays"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stream-dark/95 via-stream-dark/90 to-stream-card/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div>
            <div className="animate-float mb-8">
              <div className="inline-flex items-center gap-2 bg-stream-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  Live Onboarding Sessions
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="glow-text">StreamLaunch</span>
              <br />
              <span className="text-muted-foreground">Your Pump.fun</span>
              <br />
              <span className="text-foreground">Launchpad</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              From <strong className="text-primary">Twitch to Riches</strong>.
              Get live onboarding, wallet funding, gear packages, launch events,
              and our Strong Holding Vault system to maximize your pump.fun
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
                onClick={() => setModalOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Start Live Onboarding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline-glow"
                size="xl"
                className="w-full sm:w-auto"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                View Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold glow-text mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Streamers Launched
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold glow-text mb-2">
                  $2.5M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Volume Pumped
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold glow-text mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Live Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Livestream */}
          <div className="space-y-6">
            {/* Stream Container */}
            <div className="relative aspect-video bg-stream-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              {/* Replace YOUR_STREAM_IFRAME_URL with your actual stream URL */}
              <iframe
                src="YOUR_STREAM_IFRAME_URL"
                className="w-full h-full"
                allowFullScreen
                title="StreamLaunch Live Onboarding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />

              {/* Demo Overlay - Remove when you have real stream */}
              <div className="absolute inset-0 flex items-center justify-center bg-stream-dark/90 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">🔴 LIVE NOW</h3>
                  <p className="text-muted-foreground mb-4">
                    Live pump.fun onboarding session
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span>247 watching</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Live chat</span>
                    </div>
                  </div>
                  <Button
                    variant="stream"
                    size="sm"
                    onClick={() => setModalOpen(true)}
                  >
                    Join Session
                  </Button>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="bg-stream-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Live Onboarding Session</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-red-500">LIVE</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                Watch live as we guide new streamers through pump.fun setup,
                wallet creation, and their first token launch.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>247 viewers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>$850K pumped today</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setModalOpen(true)}
                  className="border-primary/20 hover:bg-primary/10"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-stream-green-glow/20 rounded-full blur-xl animate-pulse delay-700" />

      <OnboardingModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
