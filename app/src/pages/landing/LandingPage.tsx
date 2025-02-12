import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  Rocket, 
  Zap, 
  Shield, 
  ArrowRight 
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-4">
          <Rocket className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">YourProduct</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <ModeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Ideas into Reality
          </h2>
          <p className="text-muted-foreground text-lg">
            A powerful platform that empowers creators, developers, and entrepreneurs to build amazing products faster.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <Card className="w-full max-w-md p-6 shadow-xl">
            <img 
              src="https://picsum.photos/seed/landing/600/400" 
              alt="Product Preview" 
              className="rounded-lg"
            />
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Powerful Features</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed to streamline your workflow and boost productivity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Optimized performance that keeps you ahead of the curve."
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              description: "Enterprise-grade security to protect your most valuable assets."
            },
            {
              icon: Rocket,
              title: "Scalable Solution",
              description: "Grow without limits, from prototype to production."
            }
          ].map(({ icon: Icon, title, description }, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are transforming their ideas into reality.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 YourProduct. All rights reserved.
        </p>
      </footer>
    </div>
  )
}