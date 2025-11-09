import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Quote, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ImpactStory {
  id: number;
  name: string;
  location: string;
  story: string;
  nonprofit: string;
  donationType: string;
  date: string;
}

const impactStories: ImpactStory[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    location: "Los Angeles, CA",
    story: "Thanks to the generous donations through GiveWell, our community center received essential supplies that helped feed over 200 families during the holiday season. The impact was immediate and heartwarming.",
    nonprofit: "Community Hope Center",
    donationType: "Food & Supplies",
    date: "December 2024",
  },
  {
    id: 2,
    name: "James Chen",
    location: "Seattle, WA",
    story: "The educational materials donated to our after-school program transformed our learning environment. Our students now have access to books, computers, and art supplies that were previously out of reach.",
    nonprofit: "Youth Education Foundation",
    donationType: "Educational Materials",
    date: "November 2024",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "Chicago, IL",
    story: "As a single mother, receiving winter clothing and blankets for my children through this platform was a blessing. The warmth and kindness shown by donors gave us hope during difficult times.",
    nonprofit: "Family Support Network",
    donationType: "Clothing & Essentials",
    date: "January 2025",
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Miami, FL",
    story: "The medical supplies donated to our clinic allowed us to serve 150 more patients this month. Lives were literally saved because of the generosity of strangers who cared enough to give.",
    nonprofit: "Community Health Clinic",
    donationType: "Medical Supplies",
    date: "December 2024",
  },
  {
    id: 5,
    name: "Emily Davis",
    location: "Portland, OR",
    story: "Our animal shelter received pet food, toys, and medical supplies that helped us care for 50 rescued animals. The donations meant we could find loving homes for every single one.",
    nonprofit: "Paws & Hearts Rescue",
    donationType: "Pet Supplies",
    date: "November 2024",
  },
  {
    id: 6,
    name: "David Martinez",
    location: "Austin, TX",
    story: "The technology equipment donated to our senior center connected our elderly community members with their families through video calls. It brought so much joy and reduced isolation significantly.",
    nonprofit: "Senior Connection Center",
    donationType: "Technology Equipment",
    date: "January 2025",
  },
];

const ImpactStories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-accent/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                  Impact Stories
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Real stories from real people whose lives have been changed by the generosity of our community.
                Every donation creates a ripple effect of positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {impactStories.map((story) => (
                <Card key={story.id} className="hover:shadow-lg transition-shadow duration-300 border-border/40">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                          <Quote className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">{story.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{story.story}"
                    </p>
                    
                    <div className="pt-4 border-t border-border/40 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Heart className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{story.nonprofit}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{story.donationType}</span>
                        <span>{story.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-b from-accent/20 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Be Part of the Next Impact Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Your donation could be the next story we share. Join thousands of donors making a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-medium">
                  <Link to="/nonprofits">Browse Nonprofits</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/share-story">Share Your Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactStories;

