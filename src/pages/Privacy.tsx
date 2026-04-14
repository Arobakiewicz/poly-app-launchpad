import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">Polyglot Learning LLC ("we," "our," or "us") operates the Poly mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and profile information you provide when creating an account.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with the app, including lesson progress, time spent, and feature usage.</li>
              <li><strong className="text-foreground">Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
              <li><strong className="text-foreground">Voice Data:</strong> Audio recordings when you use speech recognition features, processed to provide pronunciation feedback.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>To provide and personalize our language learning services</li>
              <li>To improve and optimize our application</li>
              <li>To communicate with you about your account and updates</li>
              <li>To analyze usage patterns and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">We do not sell your personal information. We may share data with third-party service providers who assist us in operating our application, subject to confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">6. Security</h2>
            <p className="text-muted-foreground leading-relaxed">We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold font-display text-foreground mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="text-muted-foreground mt-2">
              Polyglot Learning LLC<br />
              Email: <a href="mailto:privacy@polyglotlearning.com" className="text-secondary hover:underline">privacy@polyglotlearning.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
