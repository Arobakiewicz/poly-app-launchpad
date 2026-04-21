import { motion } from "framer-motion";
import { BookOpen, Brain, Mic, BarChart3, Briefcase, Stethoscope, Scale, Code, TrendingUp, Wrench, Star, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import polyLogo from "@/assets/poly-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: Brain, title: "AI-Powered Lessons", desc: "Adaptive learning that targets the exact terminology you need for your industry." },
  { icon: Mic, title: "Pronunciation Coach", desc: "Practice saying technical terms with advanced voice analysis and instant feedback." },
  { icon: BookOpen, title: "Real-World Scenarios", desc: "Learn through interactive case studies and workplace situations, not generic textbook dialogues." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Track your fluency growth across industry-specific vocabulary, grammar, and speaking." },
  { icon: Briefcase, title: "Industry Glossaries", desc: "Curated glossaries for each profession — from medical terminology to legal language." },
  { icon: Wrench, title: "Custom Pathways", desc: "Build a learning path around your job role, specialization, and career goals." },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare", desc: "Medical terminology, patient communication, clinical jargon" },
  { icon: Scale, name: "Legal", desc: "Legal terminology, contract language, courtroom vocabulary" },
  { icon: Code, name: "Technology", desc: "Dev jargon, technical documentation, engineering lingo" },
  { icon: TrendingUp, name: "Finance", desc: "Trading terminology, banking language, financial reporting" },
  { icon: Briefcase, name: "Business", desc: "Corporate speak, management terms, consulting vocabulary" },
  { icon: Wrench, name: "Trades & Engineering", desc: "Field-specific terms, safety language, technical specs" },
];

const steps = [
  { num: "01", title: "Pick Your Industry", desc: "Select your profession and specialization to get a tailored curriculum." },
  { num: "02", title: "Assess Your Level", desc: "A quick diagnostic identifies gaps in your industry vocabulary." },
  { num: "03", title: "Learn Daily", desc: "Bite-sized lessons with real workplace scenarios — just 10 minutes a day." },
  { num: "04", title: "Speak Confidently", desc: "Master the jargon that matters and communicate like a seasoned professional." },
];

const testimonials = [
  { name: "Dr. Sarah M.", role: "Medical Resident", quote: "Poly helped me master medical terminology before rotations. I finally speak the language of my field.", rating: 5 },
  { name: "James K.", role: "Software Engineer", quote: "I moved to a US tech company and Poly's tech jargon lessons were exactly what I needed.", rating: 5 },
  { name: "Priya L.", role: "Corporate Lawyer", quote: "Legal terminology in a second language is tough. Poly made it approachable and practical.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-foreground text-sm font-medium border border-accent/20 mb-6">
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                Coming to the App Store soon
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-tight mb-6"
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
            >
              Speak Your{" "}
              <span className="text-secondary">Industry's</span>{" "}
              Language
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              Poly uses AI to teach you the jargon, lingo, and technical vocabulary of your profession — so you can communicate with confidence from day one.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8 h-12 text-base">
                <Smartphone className="w-5 h-5 mr-2" />
                Download Soon for iOS
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            className="mt-16 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] border-[6px] border-foreground/10 bg-card shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/10 rounded-b-2xl" />
              <div className="p-6 pt-10 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <img src={polyLogo} alt="Poly" className="h-6" />
                </div>
                <p className="text-xs text-muted-foreground mb-3">Today's Lesson</p>
                <div className="bg-muted rounded-2xl p-4 mb-3">
                  <p className="text-sm font-semibold text-foreground mb-1">🩺 Medical Terms</p>
                  <div className="w-full bg-border rounded-full h-2 mt-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "65%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">65% complete</p>
                </div>
                <div className="bg-muted rounded-2xl p-4 mb-3">
                  <p className="text-sm font-semibold text-foreground mb-1">🔥 7-Day Streak</p>
                  <p className="text-xs text-muted-foreground">Keep going!</p>
                </div>
                <div className="bg-muted rounded-2xl p-4 mb-3">
                  <p className="text-sm font-semibold text-foreground mb-1">📋 New: Legal Vocab</p>
                  <p className="text-xs text-muted-foreground">12 terms unlocked</p>
                </div>
                <div className="mt-auto">
                  <div className="bg-accent rounded-2xl p-3 text-center">
                    <p className="text-sm font-semibold text-accent-foreground">Continue Lesson →</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Built for Professional Fluency
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tools designed to help you master the language that matters in your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full border-border/50 bg-background hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-display text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Your Industry, Your Language
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Specialized curricula for the fields that need precise, professional communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full border-border/50 bg-card hover:shadow-lg hover:border-secondary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <ind.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-display text-foreground mb-2">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              How Poly Works
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              From beginner to fluent professional in four steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.num} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="text-5xl font-bold font-display text-accent/30 mb-4">{s.num}</div>
                <h3 className="text-lg font-semibold font-display text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Trusted by Professionals
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              See how Poly is helping people speak their industry's language with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full border-border/50 bg-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground mb-4 leading-relaxed italic">"{t.quote}"</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center bg-primary rounded-3xl p-10 md:p-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
              Start Speaking Like a Pro
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Download Poly soon to master your industry's language. Free.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8 h-12 text-base">
              <Smartphone className="w-5 h-5 mr-2" />
              Download Soon for iOS
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
