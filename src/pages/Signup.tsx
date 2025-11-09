import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Building2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";


const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      // Sign up user with Supabase
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
          },
        },
      });

      if (signUpError) {
        throw signUpError;
      }

      if (authData.user) {
        toast({
          title: "Account created successfully",
          description: "Welcome! Your account has been created. Please check your email to verify your account.",
        });
        // Navigate to login page after successful signup
        navigate("/login");
      }
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

return (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
<Label htmlFor="firstName">First Name</Label>
<Input
  id="firstName"
  placeholder="John"
  {...register("firstName")}
  className={errors.firstName ? "border-destructive" : ""}
/>
{errors.firstName && (
  <p className="text-sm text-destructive">{errors.firstName.message}</p>
)}
</div>
<div className="space-y-2">
<Label htmlFor="lastName">Last Name</Label>
<Input
  id="lastName"
  placeholder="Doe"
  {...register("lastName")}
  className={errors.lastName ? "border-destructive" : ""}
/>
{errors.lastName && (
  <p className="text-sm text-destructive">{errors.lastName.message}</p>
)}
</div>
</div>

<div className="space-y-2">
<Label htmlFor="email">Email</Label>
<Input
id="email"
type="email"
placeholder="name@example.com"
{...register("email")}
className={errors.email ? "border-destructive" : ""}
/>
{errors.email && (
<p className="text-sm text-destructive">{errors.email.message}</p>
)}
</div>

<div className="space-y-2">
<Label htmlFor="password">Password</Label>
<Input
id="password"
type="password"
placeholder="At least 8 characters"
{...register("password")}
className={errors.password ? "border-destructive" : ""}
/>
{errors.password && (
<p className="text-sm text-destructive">{errors.password.message}</p>
)}
</div>

<div className="space-y-2">
<Label htmlFor="confirmPassword">Confirm Password</Label>
<Input
  id="confirmPassword"
  type="password"
  placeholder="Confirm your password"
  {...register("confirmPassword")}
  className={errors.confirmPassword ? "border-destructive" : ""}
/>
{errors.confirmPassword && (
  <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
)}
</div>

<Button type="submit" className="w-full" disabled={isLoading}>
{isLoading ? "Creating account..." : "Create Account"}
</Button>

<div className="text-center text-sm text-muted-foreground">
Already have an account?{" "}
<Link to="/login" className="text-primary hover:underline">
  Sign in
</Link>
</div>
</form>
</CardContent>
</Card>
</main>
<Footer />
</div>
);
};

export default Signup;
