import { Header } from "@/components/Header";
import { FeaturedNonprofits } from "@/components/FeaturedNonprofits";
import { BrowseNonprofits } from "@/components/BrowseNonprofits";
import { Footer } from "@/components/Footer";

const NonProfit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <BrowseNonprofits 
          title="Browse All Nonprofits"
          description="Explore all verified nonprofits and their wishlists. Find organizations making a difference in communities near you."
        />
      </main>
      <Footer />
    </div>
  );
};

export default NonProfit;