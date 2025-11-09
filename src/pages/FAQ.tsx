import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is GiveWell?",
          answer:
            "GiveWell is a platform that connects generous donors with verified nonprofits. Nonprofits create detailed wishlists of exactly what they need, and donors can contribute directly to those specific needs, ensuring transparency and maximum impact.",
        },
        {
          question: "How does GiveWell work?",
          answer:
            "Nonprofits register on our platform and create wishlists of items they need. Donors browse these wishlists, select items to donate, and purchase them directly. The items are then delivered to the nonprofit, ensuring they receive exactly what they need.",
        },
        {
          question: "Is GiveWell free to use?",
          answer:
            "Yes, GiveWell is free for both donors and nonprofits. There are no fees for creating an account, browsing wishlists, or making donations. Our mission is to facilitate giving without barriers.",
        },
        {
          question: "How do I know the nonprofits are legitimate?",
          answer:
            "All nonprofits on our platform go through a verification process. We verify their nonprofit status, review their documentation, and ensure they meet our standards before they can create wishlists. You can see verification badges on each nonprofit's profile.",
        },
      ],
    },
    {
      title: "For Donors",
      items: [
        {
          question: "How do I donate items?",
          answer:
            "Browse our nonprofit directory, select a nonprofit you'd like to support, and view their wishlist. Click on any item you want to donate, and you'll be directed to purchase it. The item will be shipped directly to the nonprofit.",
        },
        {
          question: "Can I donate money instead of items?",
          answer:
            "Currently, GiveWell focuses on direct item donations to ensure nonprofits receive exactly what they need. However, some nonprofits may have specific donation links on their profiles for monetary contributions.",
        },
        {
          question: "Will I receive a tax receipt?",
          answer:
            "Yes, when you make a donation through GiveWell, you'll receive a receipt via email that you can use for tax purposes. The receipt includes all necessary information for your tax records.",
        },
        {
          question: "Can I donate anonymously?",
          answer:
            "Yes, you can choose to donate anonymously when making a contribution. The nonprofit will receive the donation but won't see your personal information.",
        },
        {
          question: "What if an item I want to donate is out of stock?",
          answer:
            "If an item becomes unavailable, you can check back later or browse other items on the wishlist. Nonprofits regularly update their wishlists, so new items are added frequently.",
        },
      ],
    },
    {
      title: "For Nonprofits",
      items: [
        {
          question: "How do I register my nonprofit?",
          answer:
            "Click on 'Register Your Nonprofit' in the navigation menu or visit the registration page. You'll need to provide your organization's details, nonprofit verification documents, and complete our verification process.",
        },
        {
          question: "What documents do I need to register?",
          answer:
            "You'll need to provide proof of your nonprofit status (such as 501(c)(3) documentation), organization details, contact information, and verification documents. Our team will review your application and verify your status.",
        },
        {
          question: "How long does verification take?",
          answer:
            "Our verification process typically takes 3-5 business days. We'll review your documentation and may contact you if we need additional information. Once verified, you can start creating wishlists immediately.",
        },
        {
          question: "How do I create and manage wishlists?",
          answer:
            "Once your nonprofit is verified, you can log into your account and create wishlists. Add items with descriptions, quantities needed, and links to where donors can purchase them. You can update, add, or remove items at any time.",
        },
        {
          question: "Are there any fees for nonprofits?",
          answer:
            "No, there are no fees for nonprofits to use GiveWell. Registration, verification, and wishlist creation are completely free. Our goal is to help nonprofits get the resources they need without any cost barriers.",
        },
        {
          question: "How will I know when someone donates an item?",
          answer:
            "You'll receive email notifications when items are donated. You can also log into your account to see real-time updates on your wishlist, including which items have been donated and their expected delivery dates.",
        },
      ],
    },
    {
      title: "Account & Technical",
      items: [
        {
          question: "How do I create an account?",
          answer:
            "Click on 'Sign Up' in the navigation menu. You'll need to provide your name, email address, and create a password. After signing up, you'll receive a verification email to confirm your account.",
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer:
            "On the login page, click 'Forgot Password' and enter your email address. You'll receive an email with instructions to reset your password.",
        },
        {
          question: "Can I update my account information?",
          answer:
            "Yes, you can update your account information at any time by logging into your account and accessing your profile settings.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we take your privacy and security seriously. We use industry-standard encryption and security measures to protect your personal information. We never share your information with third parties without your consent.",
        },
        {
          question: "What browsers are supported?",
          answer:
            "GiveWell works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-20 lg:py-32">
          <div className="container">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5">
                <HelpCircle className="h-4 w-4 text-primary" fill="currentColor" />
                <span className="text-sm font-medium text-accent-foreground">
                  Frequently Asked Questions
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                How Can We <span className="bg-gradient-hero bg-clip-text text-transparent">Help You?</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about GiveWell, donations, and how to get started.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`item-${categoryIndex}-${itemIndex}`}
                        className="border-border/40"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground">
                Can't find the answer you're looking for? We're here to help. Contact our support team
                and we'll get back to you as soon as possible.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:support@givewell.org"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-hero px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity shadow-medium"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

