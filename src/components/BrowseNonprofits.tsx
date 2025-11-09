import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export interface OrganizationData {
  id?: number;
  name?: string;
  location?: string;
  mission?: string;
  completion?: number;
  numitem?: number;
  user_type?: string;
  organizationName?: string;
  city?: string;
  state?: string;
  email?: string;
}

class OrganizationNode {
  data: OrganizationData;
  next: OrganizationNode | null;

  constructor(data: OrganizationData) {
    this.data = data;
    this.next = null;
  }
}

export class OrganizationLinkedList {
  head: OrganizationNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(organization: OrganizationData): void {
    const newNode = new OrganizationNode(organization);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Convert linked list to array for rendering
  toArray(): OrganizationData[] {
    const result: OrganizationData[] = [];
    let current = this.head;
    let id = 1;
    while (current) {
      result.push({
        ...current.data,
        id: current.data.id || id++,
        name: current.data.name || current.data.organizationName,
        location: current.data.location || `${current.data.city || ''}, ${current.data.state || ''}`.trim(),
      });
      current = current.next;
    }
    return result;
  }
}

// Shared linked list instance
export const organizationList = new OrganizationLinkedList();

interface FeaturedNonprofitsProps {
  title?: string;
  description?: string;
}

export const BrowseNonprofits = ({ 
  title = "Featured Nonprofits",
  description = "Discover amazing organizations making a difference in their communities"
}: FeaturedNonprofitsProps = {}) => {
  const [organizations, setOrganizations] = useState<OrganizationData[]>([]);

  // Load organizations from localStorage and populate linked list
  useEffect(() => {
    const loadOrganizations = () => {
      try {
        // Clear existing list
        organizationList.head = null;
        organizationList.size = 0;

        // Load from localStorage (organizations are added here when registered)
        const storedOrgs = localStorage.getItem('registeredOrganizations');
        if (storedOrgs) {
          const orgsArray: OrganizationData[] = JSON.parse(storedOrgs);
          orgsArray.forEach((org) => {
            organizationList.append(org);
          });
        }

        // Convert linked list to array for rendering
        setOrganizations(organizationList.toArray());
      } catch (error) {
        console.error("Error loading organizations:", error);
      }
    };

    loadOrganizations();
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org) => (
            <Card key={org.id} className="group hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {org.user_type}
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
                    {org.numitem} items still needed
                  </p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                  View Wishlist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};