import { Button } from "@/components/ui/button";
import { Heart, Gift, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-giving.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      <div className="container py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5">
              <Heart className="h-4 w-4 text-primary" fill="currentColor" />
              <span className="text-sm font-medium text-accent-foreground">
                Connecting Hearts & Communities
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Help Nonprofits
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Make a Difference
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Browse wishlists from verified nonprofits and donate the exact supplies they need. 
                Every item makes an impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-medium" asChild>
                <Link to="/nonprofits">
                  <Gift className="h-5 w-5" />
                  Browse Nonprofits
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-accent" asChild>
                <Link to="/register-organization">
                  <Users className="h-5 w-5" />
                  Register Your Nonprofit
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Verified Nonprofits</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Items Donated</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">$2M+</div>
                <div className="text-sm text-muted-foreground">Impact Value</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Volunteers organizing donated supplies for community"
              className="relative rounded-2xl shadow-medium object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
