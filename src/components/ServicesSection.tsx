import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Vault, 
  Gift, 
  Calendar,
  Package,
  Plane,
  Shield,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Vault,
      title: "Strong Holding Vault",
      description: "We take creator fees and do your initial funding & buying on launch, adding tokens to our secure holding vault for maximum pump potential.",
      features: ["Initial funding on launch", "Strategic buying pressure", "Secure token holding", "Creator fee management"],
      highlight: "Launch Support"
    },
    {
      icon: Package,
      title: "Streamer Allrounder Packs",
      description: "Complete packages to get you streaming-ready with professional equipment, software, and setup assistance.",
      features: ["Professional streaming gear", "OBS configuration", "Overlay designs", "Audio optimization"],
      highlight: "Equipment"
    },
    {
      icon: Plane,
      title: "Growth Funding Program",
      description: "We fund events, trips, gear upgrades, and everything you need to grow your streaming presence and audience.",
      features: ["Event sponsorship", "Travel funding", "Equipment upgrades", "Marketing support"],
      highlight: "Expansion"
    },
    {
      icon: Calendar,
      title: "Live Launch Calendar",
      description: "Your launch gets featured on our live pump streams calendar, shared with thousands of active viewers for maximum exposure.",
      features: ["Featured launch slots", "Live audience exposure", "Cross-promotion", "Community building"],
      highlight: "Promotion"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stream-dark via-stream-card/10 to-stream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Complete Creator Support
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-text">Everything You Need</span> to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just teach you how to pump - we invest in your success with comprehensive support, funding, and our proven launch system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:glow-border transition-all duration-300 bg-stream-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {service.highlight}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">The StreamLaunch Advantage</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Unlike other platforms, we're invested in your success. When you win, we win. 
              Our creator fees fund your initial launch, and our holding vault system maximizes pump potential.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
                <div className="text-sm text-muted-foreground">Average Creator Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support & Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;