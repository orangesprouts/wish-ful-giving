import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Heart } from "lucide-react";

const StorySubmissionSuccess = () => {
  const location = useLocation();
  const userName = location.state?.name || "there";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl">Thank You for Sharing Your Story!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for sharing your story, {userName}.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
                <Link to="/impact">
                  <Heart className="h-4 w-4 mr-2" />
                  View Impact Stories
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default StorySubmissionSuccess;

