import { Header } from "@/components/Header";
import { FeaturedNonprofits } from "@/components/FeaturedNonprofits";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const HowItWorksPage = () => {
    return (
        <div className="min-h-screen flex flex-col"> 
        <Header />
        <main className="flex-1">
            <HowItWorks />
        </main>
        <Footer />
        </div>
    );
};

export default HowItWorksPage;