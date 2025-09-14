import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Settings, 
  Eye, 
  Download,
  CheckCircle,
  AlertTriangle,
  Play,
  ArrowRight
} from "lucide-react";
import obsSetupImage from "@/assets/obs-setup.jpg";

const OBSGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Download & Install OBS",
      description: "Get the latest version of OBS Studio for free",
      details: [
        "Visit obsproject.com",
        "Download for your OS",
        "Run installer as admin",
        "Complete setup wizard"
      ],
      time: "5 min"
    },
    {
      step: 2,
      title: "Basic Scene Setup",
      description: "Create your streaming layout",
      details: [
        "Add Display Capture source",
        "Add Webcam source",
        "Add Audio Input Capture",
        "Position and resize elements"
      ],
      time: "10 min"
    },
    {
      step: 3,
      title: "Privacy Filters",
      description: "Protect sensitive information",
      details: [
        "Add Color Correction filter",
        "Create wallet address masks",
        "Set up private key blockers",
        "Test all privacy settings"
      ],
      time: "15 min"
    },
    {
      step: 4,
      title: "Streaming Setup",
      description: "Configure for pump.fun streaming",
      details: [
        "Set output resolution to 1080p",
        "Configure bitrate (3000-6000)",
        "Enable hardware encoding",
        "Test stream to platform"
      ],
      time: "10 min"
    }
  ];

  const tips = [
    {
      icon: Eye,
      title: "Privacy First",
      description: "Never show private keys, seed phrases, or wallet details on stream",
      type: "warning"
    },
    {
      icon: Monitor,
      title: "Dual Monitor Setup",
      description: "Use one monitor for streaming, another for private trading activities",
      type: "info"
    },
    {
      icon: Settings,
      title: "Stream Optimization",
      description: "Test your setup thoroughly before going live with real money",
      type: "success"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stream-card/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Technical Setup
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-text">OBS Streaming</span> Setup Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional streaming setup for pump.fun. Learn to stream safely while protecting your private information.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <img 
            src={obsSetupImage} 
            alt="OBS Studio interface with pump.fun streaming setup"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stream-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Badge className="mb-2">Professional Setup</Badge>
            <h3 className="text-2xl font-bold text-white">Ready-to-Use OBS Configuration</h3>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <Card key={step.step} className="group hover:glow-border transition-all duration-300 bg-stream-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {step.time}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{step.description}</p>

                <div className="space-y-2">
                  {step.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tips.map((tip, index) => (
            <Card key={index} className={`border-l-4 ${
              tip.type === 'warning' ? 'border-l-yellow-400' :
              tip.type === 'success' ? 'border-l-green-400' : 'border-l-blue-400'
            } bg-stream-card/30`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <tip.icon className={`w-6 h-6 ${
                    tip.type === 'warning' ? 'text-yellow-400' :
                    tip.type === 'success' ? 'text-green-400' : 'text-blue-400'
                  }`} />
                  <h3 className="font-bold">{tip.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="stream" size="xl" className="animate-pulse-glow">
            <Play className="mr-2 h-5 w-5" />
            Watch Setup Tutorial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            15-minute video walkthrough of the complete setup process
          </p>
        </div>
      </div>
    </section>
  );
};

export default OBSGuide;