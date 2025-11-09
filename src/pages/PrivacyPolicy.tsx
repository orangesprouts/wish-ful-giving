import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Users, Database, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, such as when you create an account, make a donation, register a nonprofit organization, or contact us for support.",
        "This may include your name, email address, phone number, mailing address, payment information, and any other information you choose to provide.",
        "We also automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, operating system, and usage data.",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and platform functionality.",
        "To process donations and facilitate connections between donors and nonprofits.",
        "To communicate with you about your account, donations, and important updates.",
        "To send you newsletters, marketing communications, and other information (you can opt out at any time).",
        "To detect, prevent, and address technical issues, fraud, or security concerns.",
        "To comply with legal obligations and enforce our terms of service.",
      ],
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties.",
        "We may share your information with nonprofit organizations when you make a donation, so they can acknowledge your contribution and fulfill their obligations.",
        "We may share information with service providers who assist us in operating our platform, processing payments, or conducting business operations.",
        "We may disclose information if required by law, court order, or government regulation, or to protect our rights and the safety of our users.",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
        "We use encryption for sensitive data transmission and secure payment processing through trusted third-party providers.",
        "However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
        "We encourage you to use strong passwords and keep your account credentials confidential.",
      ],
    },
    {
      icon: Globe,
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and personalize content.",
        "You can control cookie preferences through your browser settings, though disabling cookies may limit some functionality.",
        "We may use third-party analytics services to help us understand how users interact with our platform.",
      ],
    },
    {
      icon: FileText,
      title: "Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information at any time through your account settings.",
        "You can opt out of marketing communications by clicking the unsubscribe link in our emails or contacting us directly.",
        "You may request a copy of your personal data or request that we restrict certain processing activities.",
        "If you are located in certain jurisdictions, you may have additional rights under applicable data protection laws.",
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
                <Shield className="h-4 w-4 text-primary" fill="currentColor" />
                <span className="text-sm font-medium text-accent-foreground">
                  Your Privacy Matters
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Privacy <span className="bg-gradient-hero bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We are committed to protecting your privacy and being transparent about how we collect, use, and safeguard your information.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At GiveWell, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our platform to connect with nonprofits and 
                make donations. Please read this policy carefully to understand our practices regarding your personal 
                data and how we will treat it.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero shadow-soft">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">
                          {section.title}
                        </h2>
                        <ul className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex gap-3">
                              <span className="text-primary mt-1.5">•</span>
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected personal 
                  information from a child under 13, we will take steps to delete such information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform may contain links to third-party websites or services. We are not responsible for 
                  the privacy practices of these third parties. We encourage you to review the privacy policies 
                  of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required or permitted by law. When 
                  we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                  you to review this Privacy Policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy 
                  practices, please contact us:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                  <p className="text-foreground font-medium">GiveWell Privacy Team</p>
                  <p className="text-muted-foreground">Email: privacy@givewell.org</p>
                  <p className="text-muted-foreground">Address: 123 Giving Street, Community City, CC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

