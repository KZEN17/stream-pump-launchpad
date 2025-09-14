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
      title: "Creator Fees Collection",
      description: "We collect minimal creator fees from your successful pumps",
      details: "Transparent fee structure with no hidden costs"
    },
    {
      icon: TrendingUp,
      title: "Initial Funding & Buying",
      description: "Your fees fund the initial purchase and create buying pressure on launch",
      details: "Strategic market entry to maximize pump potential"
    },
    {
      icon: Vault,
      title: "Strong Holding Vault",
      description: "Tokens are securely stored in our holding vault for long-term value",
      details: "Professional custody with maximum security protocols"
    },
    {
      icon: Target,
      title: "Maximized Returns",
      description: "Strategic holding and selling creates better outcomes for everyone",
      details: "Win-win system that benefits both creators and investors"
    }
  ];

  const benefits = [
    "No upfront costs - we invest in your success first",
    "Professional market making on your token launch",
    "Secure vault storage with institutional-grade security",
    "Strategic exit planning to maximize token value",
    "Transparent fee structure with full visibility",
    "Reinvestment into your growth and equipment"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Revolutionary Fee System
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-text">Creator Fees</span> That Work For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike traditional platforms that just take fees, we reinvest your creator fees directly into your token's success through our Strong Holding Vault system.
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
              <Shield className="w-8 h-8 text-primary" />
              Why Our Fee System Works
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
              Learn More About Our Fees
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Card */}
          <div className="space-y-6">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Vault className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Strong Holding Vault</h4>
                  <p className="text-muted-foreground">
                    Our secure vault system that maximizes your token's potential
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">$2.5M+</div>
                    <div className="text-xs text-muted-foreground">Total Vault Value</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">150+</div>
                    <div className="text-xs text-muted-foreground">Tokens Held</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">340%</div>
                    <div className="text-xs text-muted-foreground">Avg ROI</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Monitoring</div>
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
                  "I was skeptical about fees at first, but seeing them reinvest directly into my token launch was incredible. My first pump did 100x better than expected!"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold">- CryptoMike92</div>
                  <div className="text-muted-foreground">$MOONSHOT Creator</div>
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