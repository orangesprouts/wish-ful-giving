import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const RegistrationSuccess = () => {
  const location = useLocation();
  const companyName = location.state?.companyName || "your organization";

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
            <CardTitle className="text-3xl">Registration Successful!</CardTitle>
            <CardDescription className="text-lg">
              You have been registered, {companyName}.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Thank you for registering your nonprofit organization. We'll be in touch soon!
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
                <Link to="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/register-organization">Register Another Organization</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationSuccess;

