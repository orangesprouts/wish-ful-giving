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
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Building2 } from "lucide-react";

const organizationSchema = z.object({
  organizationName: z.string().min(2, "Organization name must be at least 2 characters"),
  contactFirstName: z.string().min(2, "First name must be at least 2 characters"),
  contactLastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  numitem: z.coerce.number().min(1, "Must have at least 1 requested item"),
  user_type: z.string().min(2, "Type must be at least 2 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type OrganizationFormData = z.infer<typeof organizationSchema>;

const RegisterOrganization = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganizationFormData>({
    resolver: zodResolver(organizationSchema),
  });

  const onSubmit = async (data: OrganizationFormData) => {
    setIsLoading(true);
    try {
      // Sign up organization with Supabase
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.contactFirstName,
            last_name: data.contactLastName,
            organization_name: data.organizationName,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            zip_code: data.zipCode,
            numitem: data.numitem,
            user_type: data.user_type,
          },
        },
      });

      if (signUpError) {
        throw signUpError;
      }

      if (authData.user) {
        // Save organization to localStorage for BrowseNonprofits to display
        const organizationData = {
          organizationName: data.organizationName,
          name: data.organizationName,
          contactFirstName: data.contactFirstName,
          contactLastName: data.contactLastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          location: `${data.city}, ${data.state}`,
          mission: `${data.organizationName} - Making a difference in ${data.city}`,
          completion: 0,
          numitem: data.numitem,
          user_type: data.user_type,
        };

        // Get existing organizations from localStorage
        const storedOrgs = localStorage.getItem('registeredOrganizations');
        const orgsArray: typeof organizationData[] = storedOrgs ? JSON.parse(storedOrgs) : [];
        
        // Add new organization
        orgsArray.push(organizationData);
        
        // Save back to localStorage
        localStorage.setItem('registeredOrganizations', JSON.stringify(orgsArray));
        
        toast({
          title: "Organization registered successfully",
          description: "Your organization account has been created. Please check your email to verify your account.",
        });
        
        // Navigate to login page after successful registration
        navigate("/login");
      }
    } catch (error: any) {
      toast({
        title: "Registration failed",
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
        <Card className="w-full max-w-2xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-2">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Register Your Organization</CardTitle>
            <CardDescription className="text-center">
              Create an account for your nonprofit organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="organizationName">Organization Name</Label>
                <Input
                  id="organizationName"
                  placeholder="Your Nonprofit Name"
                  {...register("organizationName")}
                  className={errors.organizationName ? "border-destructive" : ""}
                />
                {errors.organizationName && (
                  <p className="text-sm text-destructive">{errors.organizationName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactFirstName">Contact First Name</Label>
                  <Input
                    id="contactFirstName"
                    placeholder="John"
                    {...register("contactFirstName")}
                    className={errors.contactFirstName ? "border-destructive" : ""}
                  />
                  {errors.contactFirstName && (
                    <p className="text-sm text-destructive">{errors.contactFirstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactLastName">Contact Last Name</Label>
                  <Input
                    id="contactLastName"
                    placeholder="Doe"
                    {...register("contactLastName")}
                    className={errors.contactLastName ? "border-destructive" : ""}
                  />
                  {errors.contactLastName && (
                    <p className="text-sm text-destructive">{errors.contactLastName.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="organization@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  {...register("address")}
                  className={errors.address ? "border-destructive" : ""}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    {...register("city")}
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="State"
                    {...register("state")}
                    className={errors.state ? "border-destructive" : ""}
                  />
                  {errors.state && (
                    <p className="text-sm text-destructive">{errors.state.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="12345"
                    {...register("zipCode")}
                    className={errors.zipCode ? "border-destructive" : ""}
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-destructive">{errors.zipCode.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="items">Item Amount</Label>
                  <Input
                    id="items"
                    placeholder="1"
                    {...register("numitem")}
                    className={errors.zipCode ? "border-destructive" : ""}
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-destructive">{errors.zipCode.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_type">Organization Type</Label>
                  <Input
                    id="user_type"
                    placeholder="General"
                    {...register("user_type")}
                    className={errors.zipCode ? "border-destructive" : ""}
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-destructive">{errors.zipCode.message}</p>
                  )}
                </div>
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
                {isLoading ? "Registering organization..." : "Register Organization"}
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

export default RegisterOrganization;

