import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-8">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">By accessing or using the Poly application ("App"), you agree to be bound by these Terms of Service. If you do not agree, do not use the App. The App is operated by Polyglot Learning LLC.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">2. Use of the Service</h2>
            <p className="text-muted-foreground leading-relaxed">You must be at least 13 years old to use Poly. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">3. Subscriptions & Payments</h2>
            <p className="text-muted-foreground leading-relaxed">Poly may offer subscription-based access to premium features. Subscriptions are billed through Apple's App Store. You may manage or cancel your subscription through your App Store account settings. Refunds are subject to Apple's refund policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">All content, features, and functionality of the App are owned by Polyglot Learning LLC and are protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">5. User Content</h2>
            <p className="text-muted-foreground leading-relaxed">You retain ownership of any content you submit. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use it for operating and improving the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">6. Prohibited Conduct</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Reverse engineering or decompiling the App</li>
              <li>Using the App for unlawful purposes</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Distributing malware or harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">The App is provided "as is" without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">To the fullest extent permitted by law, Polyglot Learning LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">10. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Polyglot Learning LLC<br />
              Email: <a href="mailto:legal@polyglotlearning.com" className="text-secondary hover:underline">legal@polyglotlearning.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
