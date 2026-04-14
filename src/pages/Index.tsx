import { motion } from "framer-motion";
import { Globe, BookOpen, Brain, Mic, BarChart3, Users, Star, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  { icon: Brain, title: "AI-Powered Lessons", desc: "Adaptive learning that adjusts to your skill level and learning style in real time." },
  { icon: Mic, title: "Speech Recognition", desc: "Practice pronunciation with advanced voice analysis and instant feedback." },
  { icon: BookOpen, title: "Immersive Stories", desc: "Learn through interactive narratives that make vocabulary stick naturally." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Detailed analytics show your growth across reading, writing, and speaking." },
  { icon: Users, title: "Community", desc: "Connect with native speakers and fellow learners for authentic practice." },
  { icon: Globe, title: "30+ Languages", desc: "From Spanish to Mandarin, learn the world's most spoken languages." },
];

const steps = [
  { num: "01", title: "Choose Your Language", desc: "Pick from 30+ languages and set your proficiency level." },
  { num: "02", title: "Personalized Path", desc: "Our AI creates a custom curriculum based on your goals." },
  { num: "03", title: "Learn Daily", desc: "Bite-sized lessons that fit into your schedule — just 10 minutes a day." },
  { num: "04", title: "Track & Grow", desc: "Watch your fluency improve with detailed progress insights." },
];

const testimonials = [
  { name: "Sarah M.", role: "Spanish Learner", quote: "Poly made learning Spanish feel natural. I was having real conversations within weeks!", rating: 5 },
  { name: "James K.", role: "Japanese Learner", quote: "The AI adapts perfectly to my pace. Best language app I've ever used.", rating: 5 },
  { name: "Priya L.", role: "French Learner", quote: "The speech recognition is incredible. My pronunciation improved dramatically.", rating: 5 },
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
                Now available on the App Store
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-tight mb-6"
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
            >
              Speak the World's{" "}
              <span className="text-secondary">Languages</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              Poly uses AI to create personalized language lessons that adapt to how you learn. Master any language — your way.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8 h-12 text-base">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>

          {/* Floating UI mockup */}
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
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-foreground">Poly</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Today's Lesson</p>
                <div className="bg-muted rounded-2xl p-4 mb-3">
                  <p className="text-sm font-semibold text-foreground mb-1">Spanish Basics</p>
                  <div className="w-full bg-border rounded-full h-2 mt-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "65%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">65% complete</p>
                </div>
                <div className="bg-muted rounded-2xl p-4 mb-3">
                  <p className="text-sm font-semibold text-foreground mb-1">🔥 7-Day Streak</p>
                  <p className="text-xs text-muted-foreground">Keep going!</p>
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
              Everything You Need to Become Fluent
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Powerful tools designed to make language learning effective and enjoyable.
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

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              How Poly Works
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Start speaking a new language in four simple steps.
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
      <section id="testimonials" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Loved by Learners
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Join thousands who are already speaking new languages with Poly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full border-border/50 bg-background">
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
              Start Learning Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Download Poly and take the first step toward fluency. Free to get started.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8 h-12 text-base">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
