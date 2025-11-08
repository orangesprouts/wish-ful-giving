import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";

const nonprofits = [
  {
    id: 1,
    name: "Hope Education Center",
    location: "San Francisco, CA",
    mission: "Providing educational resources and mentorship to underserved youth",
    completion: 65,
    itemsNeeded: 12,
    category: "Education",
  },
  {
    id: 2,
    name: "Community Food Bank",
    location: "Austin, TX",
    mission: "Fighting hunger by distributing food to families in need",
    completion: 40,
    itemsNeeded: 8,
    category: "Food Security",
  },
  {
    id: 3,
    name: "Youth Arts Initiative",
    location: "New York, NY",
    mission: "Empowering children through creative arts programs",
    completion: 80,
    itemsNeeded: 15,
    category: "Arts & Culture",
  },
];

export const FeaturedNonprofits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Featured Nonprofits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing organizations making a difference in their communities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nonprofits.map((org) => (
            <Card key={org.id} className="group hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {org.category}
                  </div>
                  <Heart className="h-5 w-5 text-muted-foreground hover:text-secondary hover:fill-secondary transition-colors cursor-pointer" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {org.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  {org.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {org.mission}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Wishlist Progress</span>
                    <span className="font-medium text-foreground">{org.completion}%</span>
                  </div>
                  <Progress value={org.completion} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {org.itemsNeeded} items still needed
                  </p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                  View Wishlist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-accent">
            View All Nonprofits
          </Button>
        </div>
      </div>
    </section>
  );
};
