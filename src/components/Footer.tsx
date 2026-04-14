import { Link } from "react-router-dom";
import polyLogo from "@/assets/poly-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={polyLogo} alt="Poly" className="h-8" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Master industry-specific language and jargon with AI-powered lessons built for professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold font-display text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#industries" className="hover:text-foreground transition-colors">Industries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-display text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-display text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/support" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><a href="mailto:support@polyglotlearning.com" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Polyglot Learning LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Apple and the Apple logo are trademarks of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
