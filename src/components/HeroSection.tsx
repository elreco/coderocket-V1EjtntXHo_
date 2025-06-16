import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transform Your Digital Experience Today
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Join thousands of satisfied customers who have already taken their online presence to the next level with our innovative solutions.
          </p>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 max-w-md">
            {!submitted ? (
              <>
                <h3 className="text-xl font-semibold mb-4">Get Started Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your submission and will be in touch soon.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Subscribe Another Email
                </Button>
              </div>
            )}
          </Card>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 rounded-2xl p-6 h-[400px] w-full flex items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-primary/70"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <p className="text-lg font-medium">Your Vision, Our Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}