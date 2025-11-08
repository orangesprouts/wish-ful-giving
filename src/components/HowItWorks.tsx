import { Search, Heart, Package, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse verified nonprofits and explore their missions and current needs",
  },
  {
    icon: Heart,
    title: "Choose",
    description: "Select items from wishlists that resonate with your values",
  },
  {
    icon: Package,
    title: "Donate",
    description: "Purchase items directly or contribute funds toward specific needs",
  },
  {
    icon: Smile,
    title: "Impact",
    description: "Track your donations and see the real-world difference you're making",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a difference has never been easier
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-xl rounded-full" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
