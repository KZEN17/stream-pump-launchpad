// src/components/OnboardingModal.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitOnboardingApplication } from "@/lib/appwrite";
import {
  Calendar,
  CheckCircle,
  Gift,
  Loader2,
  Mail,
  Rocket,
  Twitter,
  Users,
} from "lucide-react";
import { useState } from "react";

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OnboardingModal = ({ open, onOpenChange }: OnboardingModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: "",
    contact: "",
    contactType: "email" as "email" | "twitter",
    currentPlatform: "",
    experience: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nickname || !formData.contact) {
      toast({
        title: "Missing Information",
        description: "Please fill in your nickname and contact information.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitOnboardingApplication(formData);

      if (result.success) {
        toast({
          title: "Application Submitted! 🚀",
          description:
            "We'll contact you within 24 hours to schedule your live onboarding session.",
        });

        // Reset form
        setFormData({
          nickname: "",
          contact: "",
          contactType: "email",
          currentPlatform: "",
          experience: "",
        });

        onOpenChange(false);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const benefits = [
    {
      icon: Gift,
      title: "0.1 SOL Starter Fund",
      description: "Complete funding to get you started",
    },
    {
      icon: Users,
      title: "Live 1-on-1 Support",
      description: "Personal expert guidance",
    },
    {
      icon: Calendar,
      title: "Launch Calendar Feature",
      description: "Maximum exposure on our platform",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-stream-card/95 backdrop-blur-sm border-primary/20">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Join StreamLaunch</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Get live onboarding and everything you need to succeed on
                pump.fun
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">What You Get:</h3>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-stream-card/50 rounded-lg"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Next Available Slots</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Today 2:00 PM EST</span>
                  <Badge variant="secondary" className="text-xs">
                    3 spots left
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Today 6:00 PM EST</span>
                  <Badge variant="secondary" className="text-xs">
                    5 spots left
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Tomorrow 10:00 AM EST</span>
                  <Badge variant="secondary" className="text-xs">
                    8 spots left
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nickname">Streamer Nickname *</Label>
              <Input
                id="nickname"
                value={formData.nickname}
                onChange={(e) => handleInputChange("nickname", e.target.value)}
                placeholder="Your streaming name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label>How should we contact you? *</Label>
              <div className="flex gap-2 mt-2 mb-3">
                <Button
                  type="button"
                  variant={
                    formData.contactType === "email" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleInputChange("contactType", "email")}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
                <Button
                  type="button"
                  variant={
                    formData.contactType === "twitter" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleInputChange("contactType", "twitter")}
                  className="flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
              </div>
              <Input
                value={formData.contact}
                onChange={(e) => handleInputChange("contact", e.target.value)}
                placeholder={
                  formData.contactType === "email"
                    ? "your.email@example.com"
                    : "@your_twitter_handle"
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="currentPlatform">
                Current Platform (Optional)
              </Label>
              <Input
                id="currentPlatform"
                value={formData.currentPlatform}
                onChange={(e) =>
                  handleInputChange("currentPlatform", e.target.value)
                }
                placeholder="e.g., Twitch, Kick, YouTube"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="experience">Crypto Experience (Optional)</Label>
              <select
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
                className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              >
                <option value="">Select your level</option>
                <option value="beginner">Complete Beginner</option>
                <option value="some">Some Experience</option>
                <option value="experienced">Experienced Trader</option>
                <option value="expert">Expert Level</option>
              </select>
            </div>

            <Button
              type="submit"
              variant="stream"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Apply for Free Onboarding
                  <Rocket className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By applying, you confirm you're 18+ and agree to our terms. We'll
              contact you within 24 hours to schedule your session.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
