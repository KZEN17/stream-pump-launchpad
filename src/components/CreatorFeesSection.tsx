import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Vault, 
  TrendingUp, 
  Shield,
  Coins,
  ArrowRight,
  CheckCircle,
  Users,
  Target
} from "lucide-react";

const CreatorFeesSection = () => {
  const feeProcess = [
    {
      icon: Coins,
      title: "StreamLaunch Fee Collection",
      description: "We collect our platform fees from successful token launches",
      details: "Transparent fee structure supporting platform operations"
    },
    {
      icon: TrendingUp,
      title: "Initial Funding & Buying",
      description: "Our fees fund the initial purchase and create buying pressure on launch",
      details: "Strategic market entry to maximize pump potential"
    },
    {
      icon: Target,
      title: "Buyback and Burn",
      description: "Systematic token buybacks and burns to reduce supply and increase value",
      details: "Deflationary mechanism that benefits all token holders"
    },
    {
      icon: Shield,
      title: "Platform Reinvestment",
      description: "Fees reinvested into platform improvements and creator support programs",
      details: "Continuous development of tools and services for creators"
    }
  ];

  const benefits = [
    "No upfront costs - we only succeed when you succeed",
    "Professional market making on your token launch",
    "Systematic buyback and burn programs increase token value",
    "Platform fees reinvested into creator support programs",
    "Transparent fee structure with full visibility",
    "Continuous platform improvements and new features"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Revolutionary Fee System
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-text">StreamLaunch Fees</span> Drive Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform fees create a powerful ecosystem that benefits everyone - from initial launch support to long-term value creation through buybacks and burns.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {feeProcess.map((step, index) => (
            <Card key={index} className="group hover:glow-border transition-all duration-300 bg-stream-card/50 backdrop-blur-sm border-border/50 relative">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-lg font-bold text-primary mb-2">
                  Step {index + 1}
                </div>
                
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                <p className="text-xs text-muted-foreground/80">{step.details}</p>
                
                {index < feeProcess.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Platform Impact & Benefits
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button variant="stream" size="lg">
              View Fee Breakdown
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Card */}
          <div className="space-y-6">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Coins className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Platform Performance</h4>
                  <p className="text-muted-foreground">
                    Real-time stats showing StreamLaunch's impact on the ecosystem
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">$485K</div>
                    <div className="text-xs text-muted-foreground">Platform Fees Generated</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">$12.8M</div>
                    <div className="text-xs text-muted-foreground">Total Creator Earnings</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">2.1M</div>
                    <div className="text-xs text-muted-foreground">Tokens Burned</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">500+</div>
                    <div className="text-xs text-muted-foreground">Launches Supported</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-stream-card/30 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h4 className="font-bold">Creator Testimonial</h4>
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "StreamLaunch's fee system is genius - they use their fees to buy back and burn tokens, which made my launch way more successful than I expected!"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold">- DiamondHands</div>
                  <div className="text-muted-foreground">$HODL Creator</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorFeesSection;