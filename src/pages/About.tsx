import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Target, Users, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of empathy and understanding to drive meaningful change in communities.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Every donation is tracked and verified, ensuring donors know exactly where their contributions go.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on measurable outcomes and real-world results that make a tangible difference.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections between donors and nonprofits to create stronger, more resilient communities.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-20 lg:py-32">
          <div className="container">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5">
                <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                <span className="text-sm font-medium text-accent-foreground">
                  Our Story
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                About <span className="bg-gradient-hero bg-clip-text text-transparent">GiveWell</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Connecting generous donors with nonprofits in need, one wishlist at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 w-fit">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-accent-foreground">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  Making Giving Simple and Impactful
                </h2>
                <p className="text-lg text-muted-foreground">
                  GiveWell was founded with a simple yet powerful vision: to bridge the gap between 
                  generous donors and nonprofits in need. We recognized that many people want to help 
                  but struggle to find the right way to make a meaningful impact.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform allows nonprofits to create detailed wishlists of exactly what they need, 
                  and enables donors to contribute directly to those specific needs. This transparency 
                  and direct connection ensures that every donation makes the maximum possible impact.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
                <div className="relative rounded-2xl bg-gradient-to-br from-accent/50 to-background p-8 border border-border/40">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
                        <Sparkles className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                        <p className="text-muted-foreground">
                          A world where every nonprofit has access to the resources they need, 
                          and every donor can see the direct impact of their generosity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="relative group">
                  <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/20 transition-colors">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-xl rounded-full" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero shadow-soft">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Together, we're making a real difference
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-br from-accent/30 to-background border border-border/40">
                <div className="text-4xl font-bold text-foreground">500+</div>
                <div className="text-lg text-muted-foreground">Verified Nonprofits</div>
                <p className="text-sm text-muted-foreground">
                  Trusted organizations making a difference in their communities
                </p>
              </div>
              <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-br from-accent/30 to-background border border-border/40">
                <div className="text-4xl font-bold text-foreground">10K+</div>
                <div className="text-lg text-muted-foreground">Items Donated</div>
                <p className="text-sm text-muted-foreground">
                  Essential supplies delivered directly to those who need them most
                </p>
              </div>
              <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-br from-accent/30 to-background border border-border/40">
                <div className="text-4xl font-bold text-foreground">$2M+</div>
                <div className="text-lg text-muted-foreground">Impact Value</div>
                <p className="text-sm text-muted-foreground">
                  Total value of donations and support provided to communities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Join Us in Making a Difference
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a donor looking to make an impact or a nonprofit in need of support, 
                we're here to help you connect and create positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/nonprofits"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-hero px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity shadow-medium"
                >
                  Browse Nonprofits
                </Link>
                <Link
                  to="/register-organization"
                  className="inline-flex items-center justify-center rounded-lg border border-border/40 bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  Register Your Nonprofit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

