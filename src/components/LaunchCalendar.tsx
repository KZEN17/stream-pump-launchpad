import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Eye,
  ArrowRight,
  Radio
} from "lucide-react";

const LaunchCalendar = () => {
  const upcomingLaunches = [
    {
      streamer: "CryptoMike92",
      token: "$MOONSHOT",
      time: "Today 3:00 PM EST",
      viewers: "1.2K",
      status: "live",
      description: "Gaming streamer launching his first meme coin"
    },
    {
      streamer: "DiamondHands",
      token: "$HODL",
      time: "Today 8:00 PM EST",
      viewers: "890",
      status: "starting-soon",
      description: "Trading expert with 5 years experience"
    },
    {
      streamer: "MemeLord",
      token: "$PEPE2024",
      time: "Tomorrow 2:00 PM EST",
      viewers: "2.1K",
      status: "scheduled",
      description: "Content creator transitioning from TikTok"
    },
    {
      streamer: "PumpQueen",
      token: "$LAMBO",
      time: "Tomorrow 6:00 PM EST",
      viewers: "650",
      status: "scheduled",
      description: "First-time streamer with automotive content"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-red-400 border-red-400/20 bg-red-400/10';
      case 'starting-soon': return 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10';
      default: return 'text-blue-400 border-blue-400/20 bg-blue-400/10';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'LIVE NOW';
      case 'starting-soon': return 'STARTING SOON';
      default: return 'SCHEDULED';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <Radio className="w-4 h-4 mr-2" />
            Live Launch Calendar
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-text">Featured Launches</span> This Week
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our creators launch their tokens live! Get featured on our calendar and reach thousands of engaged viewers ready to pump.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Launches */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Upcoming Launches
            </h3>
            <div className="space-y-4">
              {upcomingLaunches.map((launch, index) => (
                <Card key={index} className="bg-stream-card/30 border-border/50 hover:bg-stream-card/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{launch.streamer}</h4>
                          <p className="text-primary font-semibold">{launch.token}</p>
                        </div>
                      </div>
                      <Badge className={`text-xs font-bold ${getStatusColor(launch.status)}`}>
                        {getStatusText(launch.status)}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{launch.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{launch.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span>{launch.viewers} watching</span>
                        </div>
                      </div>
                      {launch.status === 'live' && (
                        <Button variant="stream" size="sm">
                          Watch Live
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calendar Stats & Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Launch Stats
            </h3>
            
            <Card className="bg-stream-card/30 border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="text-lg">This Week's Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Launches Scheduled</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-2">15.3K</div>
                    <div className="text-sm text-muted-foreground">Total Viewers</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-2">$850K</div>
                    <div className="text-sm text-muted-foreground">Volume Generated</div>
                  </div>
                  <div className="text-center p-4 bg-stream-card/50 rounded-lg">
                    <div className="text-2xl font-bold glow-text mb-2">94%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Get Featured on Our Calendar
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Launch with maximum visibility! Our live calendar is broadcasted to thousands of pump.fun enthusiasts ready to support new tokens.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Featured on live streams
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Promoted to our community
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Cross-platform exposure
                  </li>
                </ul>
                <Button variant="stream" size="sm" className="w-full">
                  Apply for Calendar Spot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCalendar;