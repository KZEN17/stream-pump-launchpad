import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar,
  Clock,
  Gift,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const SignUpForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPlatform: "",
    experience: "",
    goals: "",
    timeSlot: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to schedule your live onboarding session.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      currentPlatform: "",
      experience: "",
      goals: "",
      timeSlot: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      icon: Gift,
      title: "Complete Funding Package",
      description: "0.1 SOL starter fund + launch funding from our vault system"
    },
    {
      icon: Users,
      title: "Live 1-on-1 Support",
      description: "Personal guidance from experts + streamer allrounder pack"
    },
    {
      icon: Calendar,
      title: "Launch Calendar Feature",
      description: "Get featured on our live pump streams for maximum exposure"
    },
    {
      icon: CheckCircle,
      title: "Growth Investment",
      description: "We fund your events, trips, gear - everything you need to grow"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Get Started Free
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to <span className="glow-text">Launch Your Stream</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our live onboarding program and get everything you need to start pumping tokens successfully.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-stream-card/30 rounded-lg hover:bg-stream-card/50 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">Next Available Slots</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Today 2:00 PM EST</span>
                  <Badge variant="secondary" className="text-xs">3 spots left</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Today 6:00 PM EST</span>
                  <Badge variant="secondary" className="text-xs">5 spots left</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Tomorrow 10:00 AM EST</span>
                  <Badge variant="secondary" className="text-xs">8 spots left</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-stream-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Apply for Live Onboarding</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentPlatform">Current Streaming Platform</Label>
                  <Input
                    id="currentPlatform"
                    name="currentPlatform"
                    placeholder="e.g., Twitch, Kick, YouTube"
                    value={formData.currentPlatform}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Crypto/Trading Experience</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Experience</option>
                    <option value="experienced">Experienced Trader</option>
                    <option value="expert">Expert Level</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="goals">Your Streaming Goals</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    placeholder="Tell us what you want to achieve with pump.fun streaming..."
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="timeSlot">Preferred Time Slot</Label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM EST)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM EST)</option>
                    <option value="evening">Evening (5 PM - 9 PM EST)</option>
                    <option value="night">Night (9 PM - 12 AM EST)</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>

                <Button type="submit" variant="stream" size="lg" className="w-full">
                  Apply for Free Onboarding
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By applying, you agree to our terms and confirm you're 18+ years old.
                  We'll contact you within 24 hours to schedule your session.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;