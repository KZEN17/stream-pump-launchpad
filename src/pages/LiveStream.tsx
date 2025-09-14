import OnboardingModal from "@/components/OnboardingModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LiveStream = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stream-dark">
      {/* Header */}
      <header className="bg-stream-card/50 border-b border-border/20 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">LIVE</span>
          </div>

          <Button variant="stream" onClick={() => setModalOpen(true)}>
            Join Live Onboarding
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-4 gap-6">
        {/* Stream Container */}
        <div className="lg:col-span-3 space-y-4">
          {/* Video Player */}
          <div className="relative aspect-video bg-stream-card rounded-lg overflow-hidden">
            {/* Replace with your actual stream iframe */}
            <iframe
              src="YOUR_STREAM_IFRAME_URL" // Replace with actual stream URL
              className="w-full h-full"
              allowFullScreen
              title="Live Stream"
            />

            {/* Overlay for demo purposes - remove when you have real stream */}
            <div className="absolute inset-0 flex items-center justify-center bg-stream-dark/80">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Stream Starting Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Our next live onboarding session begins at 2:00 PM EST
                </p>
                <Button variant="stream" onClick={() => setModalOpen(true)}>
                  Reserve Your Spot
                </Button>
              </div>
            </div>
          </div>

          {/* Stream Info */}
          <div className="bg-stream-card/50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              Live Pump.Fun Onboarding Session
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn how to set up your wallet, create tokens, and start
              streaming pump.fun launches. Get personalized guidance and 0.1 SOL
              starter funding!
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>247 watching</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Live chat active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Apply */}
          <div className="bg-stream-card/50 p-6 rounded-lg">
            <h3 className="font-bold mb-4">Apply for Personal Onboarding</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get 1-on-1 guidance, wallet funding, and launch support
            </p>
            <Button
              variant="stream"
              className="w-full"
              onClick={() => setModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>

          {/* Benefits */}
          <div className="bg-stream-card/50 p-6 rounded-lg">
            <h3 className="font-bold mb-4">What You'll Get</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>0.1 SOL starter funding</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Complete wallet setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>OBS streaming guide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Launch calendar feature</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>24/7 support access</span>
              </div>
            </div>
          </div>

          {/* Success Stats */}
          <div className="bg-stream-card/50 p-6 rounded-lg">
            <h3 className="font-bold mb-4">Success Stats</h3>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">
                  Streamers Launched
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$2.5M+</div>
                <div className="text-xs text-muted-foreground">
                  Volume Generated
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-xs text-muted-foreground">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OnboardingModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default LiveStream;
