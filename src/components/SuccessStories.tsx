import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import successStory1 from "@/assets/success-story-1.jpg";
import successStory2 from "@/assets/success-story-2.jpg";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Alex 'CryptoKing' Johnson",
      image: successStory1,
      platform: "Twitch → Pump.fun",
      achievement: "First coin hit $500K market cap",
      volume: "$2.3M",
      followers: "150K",
      quote: "StreamLaunch got me from zero to hero in just 2 weeks. The live onboarding was game-changing!",
      tags: ["Gamification", "Community Building", "Meme Coins"]
    },
    {
      id: 2,
      name: "Sarah 'PumpQueen' Martinez",
      image: successStory2,
      platform: "Kick → Pump.fun",
      achievement: "3 successful launches in 30 days",
      volume: "$1.8M",
      followers: "89K",
      quote: "The OBS setup guide and wallet funding made everything so easy. Now I'm teaching others!",
      tags: ["Educational Content", "Trading Tips", "Success Coaching"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Success Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From <span className="glow-text">Streamers to Legends</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real streamers who transformed their careers with pump.fun. Your success story could be next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:glow-border transition-all duration-300 bg-stream-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={`Success story of ${story.name}`}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                    <p className="text-primary text-sm mb-2">{story.platform}</p>
                    <p className="text-muted-foreground text-sm">{story.achievement}</p>
                  </div>
                </div>

                <blockquote className="text-lg font-medium mb-6 italic leading-relaxed">
                  "{story.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-stream-card/30 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Volume</span>
                    </div>
                    <div className="text-lg font-bold glow-text">{story.volume}</div>
                  </div>
                  <div className="text-center p-3 bg-stream-card/30 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Followers</span>
                    </div>
                    <div className="text-lg font-bold glow-text">{story.followers}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;