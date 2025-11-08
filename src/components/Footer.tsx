import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-foreground">GiveWell</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting generous donors with nonprofits in need, one wishlist at a time.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">For Donors</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/nonprofits" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Nonprofits
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Impact Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">For Organizations</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/register-organization" className="text-muted-foreground hover:text-primary transition-colors">
                  Register Your Nonprofit
                </Link>
              </li>
              <li>
                <Link to="/organization-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Organization Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} GiveWell. All rights reserved. Built with ❤️ to make a difference.
          </p>
        </div>
      </div>
    </footer>
  );
};
