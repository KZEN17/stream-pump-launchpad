import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar,
  Clock,
  Bell,
  Users,
  ArrowRight
} from "lucide-react";

const ComingSoonSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stream-card/10">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
          <Calendar className="w-4 h-4 mr-2" />
          Coming Soon
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="glow-text">Live Launch Calendar</span> Menu
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          A dedicated menu system to browse all upcoming launches, filter by creator, track your favorites, and never miss a pump!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-stream-card/30 border-border/50">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Interactive Calendar</h3>
              <p className="text-sm text-muted-foreground">Browse launches by date with detailed scheduling</p>
            </CardContent>
          </Card>
          
          <Card className="bg-stream-card/30 border-border/50">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Creator Profiles</h3>
              <p className="text-sm text-muted-foreground">Follow your favorite creators and get notified</p>
            </CardContent>
          </Card>
          
          <Card className="bg-stream-card/30 border-border/50">
            <CardContent className="p-6 text-center">
              <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Smart Notifications</h3>
              <p className="text-sm text-muted-foreground">Custom alerts for launches you don't want to miss</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/10 border-primary/20 max-w-2xl mx-auto mb-8">
          <CardContent className="p-8">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Launch Timeline</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Q1 2025: Basic calendar interface</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary/50 rounded-full" />
                <span className="text-sm">Q2 2025: Creator profiles & following</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary/30 rounded-full" />
                <span className="text-sm">Q3 2025: Advanced filtering & notifications</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button variant="stream" size="lg">
          Get Notified When Ready
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Be the first to access our advanced launch calendar system
        </p>
      </div>
    </section>
  );
};

export default ComingSoonSection;