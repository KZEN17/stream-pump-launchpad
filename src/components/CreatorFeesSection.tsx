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

        <div className="text-center">
          <Button variant="stream" size="lg">
            View Fee Breakdown
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreatorFeesSection;