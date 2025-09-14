// src/components/OnboardingGuide.tsx (Updated)
import OnboardingModal from "@/components/OnboardingModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Coins,
  Shield,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const OnboardingGuide = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      icon: Wallet,
      title: "Wallet Setup",
      description: "Create your Solana wallet and secure your private keys",
      details: [
        "Download Phantom or Solflare wallet",
        "Backup your seed phrase securely",
        "Connect to Solana mainnet",
        "Verify wallet connection",
      ],
      difficulty: "Easy",
      time: "5 minutes",
    },
    {
      icon: Coins,
      title: "Initial Funding",
      description: "Get SOL tokens to start your pump.fun journey",
      details: [
        "Receive 0.1 SOL from StreamLaunch",
        "Learn about transaction fees",
        "Understand gas optimization",
        "Set up auto-reload features",
      ],
      difficulty: "Easy",
      time: "3 minutes",
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "Essential security practices for crypto streaming",
      details: [
        "Never share private keys on stream",
        "Use test transactions first",
        "Set up stream-safe wallet view",
        "Configure OBS privacy filters",
      ],
      difficulty: "Medium",
      time: "10 minutes",
    },
    {
      icon: TrendingUp,
      title: "Your First Pump",
      description: "Launch your first token with confidence",
      details: [
        "Choose your token concept",
        "Set up liquidity parameters",
        "Create engaging content",
        "Build community hype",
      ],
      difficulty: "Medium",
      time: "20 minutes",
    },
  ];

  const tips = [
    {
      icon: CheckCircle,
      text: "Start with small amounts to learn the ropes",
      type: "success",
    },
    {
      icon: AlertTriangle,
      text: "Never invest more than you can afford to lose",
      type: "warning",
    },
    {
      icon: Users,
      text: "Engage with your community throughout the process",
      type: "info",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stream-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 text-primary"
          >
            Pump.fun Mastery
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-text">Complete Onboarding</span> Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know to start pumping tokens safely and
            successfully. We'll guide you through every step live on stream.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group hover:glow-border transition-all duration-300 bg-stream-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>

                <div className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-xs">
                    {step.difficulty}
                  </Badge>
                  <span>{step.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-stream-card/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Essential Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-stream-card/50 rounded-lg"
              >
                <tip.icon
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    tip.type === "success"
                      ? "text-green-400"
                      : tip.type === "warning"
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }`}
                />
                <span className="text-sm">{tip.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="stream"
            size="xl"
            className="animate-pulse-glow"
            onClick={() => setModalOpen(true)}
          >
            Book Live Onboarding Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Get personalized guidance and 0.1 SOL starter funding
          </p>
        </div>
      </div>

      <OnboardingModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default OnboardingGuide;
