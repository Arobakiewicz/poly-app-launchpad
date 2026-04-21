import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import polyLogo from "@/assets/poly-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={polyLogo} alt="Poly" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#industries" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Industries</a>
          <Link to="/support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Support</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleDark} className="rounded-full">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6">
            Download App Soon
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#industries" className="text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Industries</a>
            <Link to="/support" className="text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Support</Link>
            <div className="flex items-center gap-3 pt-2">
              <Button variant="ghost" size="icon" onClick={toggleDark} className="rounded-full">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6 flex-1">
                Download App Soon
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
