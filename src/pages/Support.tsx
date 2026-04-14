import { Mail, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Support</h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Need help with Poly? We're here for you. Choose how you'd like to reach us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border/50">
            <CardContent className="p-6 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full mt-auto">
                <a href="mailto:support@polyglotlearning.com">Contact Us</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">FAQ</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Find answers to common questions about using Poly.
              </p>
              <Button variant="outline" className="rounded-full mt-auto">Coming Soon</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-display text-foreground">Common Questions</h2>

          {[
            { q: "How do I reset my password?", a: "Go to the login screen and tap 'Forgot Password.' Enter your email and follow the instructions sent to your inbox." },
            { q: "How do I cancel my subscription?", a: "Open the Settings app on your iPhone → tap your name → Subscriptions → select Poly → Cancel Subscription." },
            { q: "Is my data secure?", a: "Yes. We use industry-standard encryption and never sell your personal data. See our Privacy Policy for details." },
            { q: "Which languages are available?", a: "Poly currently supports 30+ languages including Spanish, French, Mandarin, Japanese, German, Korean, and many more." },
          ].map((item) => (
            <div key={item.q} className="border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-2xl border border-border text-center">
          <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            Review our{" "}
            <Link to="/privacy" className="text-secondary hover:underline">Privacy Policy</Link>
            {" "}and{" "}
            <Link to="/terms" className="text-secondary hover:underline">Terms of Service</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
