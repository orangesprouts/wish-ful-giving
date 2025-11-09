import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Plus, ExternalLink, Package, Link as LinkIcon, Loader2 } from "lucide-react";

// Types
type ItemType = "url" | "manual";
type AvailabilityStatus = "Available" | "Sold Out" | "Preorder";

interface WishlistItem {
  id: string;
  type: ItemType;
  name: string;
  description?: string;
  price: number;
  priceEstimate?: boolean; // true if price is an estimate
  image?: string;
  url?: string;
  availability: AvailabilityStatus;
  progress: number; // 0-100
  quantityNeeded?: number;
  quantityReceived?: number;
}

// Schema for URL-based items
const urlItemSchema = z.object({
  productUrl: z.string().url("Please enter a valid URL"),
});

// Schema for manual items
const manualItemSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().optional(),
  priceEstimate: z.number().min(0, "Price must be positive"),
  imageUrl: z.string().url("Please enter a valid image URL").optional().or(z.literal("")),
  quantityNeeded: z.number().min(1, "Quantity must be at least 1").optional(),
});

type UrlItemFormData = z.infer<typeof urlItemSchema>;
type ManualItemFormData = z.infer<typeof manualItemSchema>;


const Wishlist = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<WishlistItem[]>([
    // Example items
    {
      id: "1",
      type: "url",
      name: "Amazon Basics School Supplies",
      price: 24.99,
      image: "https://via.placeholder.com/300x300?text=Product+Image",
      url: "https://amazon.com/example",
      availability: "Available",
      progress: 75,
      quantityNeeded: 20,
      quantityReceived: 15,
    },
    {
      id: "2",
      type: "manual",
      name: "School Supplies Pack",
      description: "Generic school supplies including notebooks, pens, pencils, and erasers",
      price: 15.00,
      priceEstimate: true,
      image: "https://via.placeholder.com/300x300?text=School+Supplies",
      availability: "Available",
      progress: 40,
      quantityNeeded: 50,
      quantityReceived: 20,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const urlForm = useForm<UrlItemFormData>({
    resolver: zodResolver(urlItemSchema),
  });

  const manualForm = useForm<ManualItemFormData>({
    resolver: zodResolver(manualItemSchema),
    defaultValues: {
      quantityNeeded: 1,
    },
  });

  // Simulate fetching product data from URL
  const fetchProductData = async (url: string): Promise<Partial<WishlistItem>> => {
    setIsFetching(true);
    try {
      // TODO: Replace with actual API call to fetch product data
      // This would typically call a backend service that scrapes or uses an API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock data - in real app, this would come from the API
      return {
        name: "Product from URL",
        price: 29.99,
        image: "https://via.placeholder.com/300x300?text=Fetched+Product",
        availability: "Available" as AvailabilityStatus,
      };
    } catch (error) {
      throw new Error("Failed to fetch product data");
    } finally {
      setIsFetching(false);
    }

  };

  const onUrlSubmit = async (data: UrlItemFormData) => {
    try {
      const productData = await fetchProductData(data.productUrl);
      
      const newItem: WishlistItem = {
        id: Date.now().toString(),
        type: "url",
        name: productData.name || "Product",
        price: productData.price || 0,
        image: productData.image,
        url: data.productUrl,
        availability: productData.availability || "Available",
        progress: 0,
        quantityNeeded: 1,
        quantityReceived: 0,
      };

      setItems([...items, newItem]);
      urlForm.reset();
      setIsDialogOpen(false);
      toast({
        title: "Item added",
        description: "Product information fetched and added to wishlist.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch product data. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onManualSubmit = (data: ManualItemFormData) => {
    const newItem: WishlistItem = {
      id: Date.now().toString(),
      type: "manual",
      name: data.name,
      description: data.description,
      price: data.priceEstimate,
      priceEstimate: true,
      image: data.imageUrl || undefined,
      availability: "Available",
      progress: 0,
      quantityNeeded: data.quantityNeeded || 1,
      quantityReceived: 0,
    };

    setItems([...items, newItem]);
    manualForm.reset();
    setIsDialogOpen(false);
    toast({
      title: "Item added",
      description: "Item has been added to your wishlist.",
    });
  };

  const getAvailabilityBadgeVariant = (status: AvailabilityStatus) => {
    switch (status) {
      case "Available":
        return "default";
      case "Sold Out":
        return "destructive";
      case "Preorder":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Wishlist</h1>
            <p className="text-muted-foreground mt-2">
              Manage your organization's wishlist items
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>

              </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Wishlist Item</DialogTitle>
                <DialogDescription>
                  Add items by providing a product URL or manually entering item details.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="url" className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4" />
                    Product URL
                  </TabsTrigger>
                  <TabsTrigger value="manual" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Manual Entry
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="url" className="space-y-4 mt-4">
                  <form onSubmit={urlForm.handleSubmit(onUrlSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="productUrl">Product URL</Label>
                      <Input
                        id="productUrl"
                        type="url"
                        placeholder="https://amazon.com/product/..."
                        {...urlForm.register("productUrl")}
                        className={urlForm.formState.errors.productUrl ? "border-destructive" : ""}
                      />
                      {urlForm.formState.errors.productUrl && (
                        <p className="text-sm text-destructive">
                          {urlForm.formState.errors.productUrl.message}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        We'll automatically fetch product name, price, image, and availability.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={isFetching}>
                        {isFetching ? (
                          <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Fetching...
                        </>
                      ) : (
                        "Fetch & Add"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </TabsContent>

              <TabsContent value="manual" className="space-y-4 mt-4">
                <form onSubmit={manualForm.handleSubmit(onManualSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., School Supplies Pack"
                      {...manualForm.register("name")}
                      className={manualForm.formState.errors.name ? "border-destructive" : ""}
                    />
                    {manualForm.formState.errors.name && (
                      <p className="text-sm text-destructive">
                        {manualForm.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the item..."
                        {...manualForm.register("description")}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="priceEstimate">Price Estimate ($) *</Label>
                        <Input
                          id="priceEstimate"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          {...manualForm.register("priceEstimate", { valueAsNumber: true })}
                          className={manualForm.formState.errors.priceEstimate ? "border-destructive" : ""}
                        />
                        {manualForm.formState.errors.priceEstimate && (
                          <p className="text-sm text-destructive">
                            {manualForm.formState.errors.priceEstimate.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantityNeeded">Quantity Needed</Label>
                        <Input
                          id="quantityNeeded"
                          type="number"
                          min="1"
                          placeholder="1"
                          {...manualForm.register("quantityNeeded", { valueAsNumber: true })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">Image URL (Optional)</Label>
                      <Input
                        id="imageUrl"
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        {...manualForm.register("imageUrl")}
                        className={manualForm.formState.errors.imageUrl ? "border-destructive" : ""}
                      />
                      {manualForm.formState.errors.imageUrl && (
                        <p className="text-sm text-destructive">
                          {manualForm.formState.errors.imageUrl.message}
                        </p>
                      )}
                    </div>

                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Add Item</Button>
                    </DialogFooter>
                  </form>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        {items.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items yet</h3>
              <p className="text-muted-foreground text-center mb-4">
                Start building your wishlist by adding items.
              </p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Item
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                {item.image && (
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=No+Image";
                      }}
                    />
                      </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    {item.type === "url" && item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  {item.description && (
                    <CardDescription>{item.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">
                        ${item.price.toFixed(2)}
                        {item.priceEstimate && (
                          <span className="text-sm font-normal text-muted-foreground ml-1">
                            (est.)
                          </span>
                           )}
                           </p>
                         </div>
                         <Badge variant={getAvailabilityBadgeVariant(item.availability)}>
                           {item.availability}
                         </Badge>
                       </div>
     
                       {item.quantityNeeded && (
                         <div className="space-y-2">
                           <div className="flex justify-between text-sm">
                             <span className="text-muted-foreground">Progress</span>
                             <span className="font-medium">
                               {item.quantityReceived || 0} / {item.quantityNeeded}
                             </span>
                           </div>
                           <Progress value={item.progress} />
                         </div>
                       )}
     
                       {!item.quantityNeeded && (
                         <div className="space-y-2">
                           <div className="flex justify-between text-sm">
                             <span className="text-muted-foreground">Progress</span>
                             <span className="font-medium">{item.progress}%</span>
                           </div>
                           <Progress value={item.progress} />
                         </div>
                       )}
                     </CardContent>
                   </Card>
                 ))}
               </div>
             )}
               </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
