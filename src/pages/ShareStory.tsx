import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heart, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Please enter your location.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  nonprofit: z.string().min(2, {
    message: "Please enter the nonprofit organization name.",
  }),
  donationType: z.string().min(2, {
    message: "Please describe the type of donation you received.",
  }),
  story: z.string().min(50, {
    message: "Please share your story (at least 50 characters).",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ShareStory = () => {
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      email: "",
      nonprofit: "",
      donationType: "",
      story: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Story submitted:", values);
    // TODO: Add API call to submit story to Supabase
    // Example: await submitStory(values);
    
    // Navigate to success page with user's name
    navigate("/story-submission-success", {
      state: { name: values.name },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Share Your Impact Story</CardTitle>
            <CardDescription className="text-center">
              Tell us how donations have positively impacted your life or your community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nonprofit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nonprofit Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of the nonprofit that helped you" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="donationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Donation</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Food & Supplies, Educational Materials, Medical Supplies" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Story</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your story about how the donation impacted you or your community. Be as detailed as you'd like..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
                  <Heart className="h-4 w-4 mr-2" />
                  Submit Your Story
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ShareStory;

