import { type ChangeEvent, type FormEvent, useState } from "react";
import { Linkedin, Mail } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const contactEmail = "ngzheng8888@gmail.com";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // The form opens the user's email client with pre-filled details.
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    // Contact section offers a minimal form and direct social links.
    <section id="contact" className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something clear and useful"
        description="Share your project goals and I will get back to you through email."
      />

      <Card>
        <CardContent className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your website project..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="space-y-4 rounded-xl border border-border/80 bg-muted/35 p-6">
            <h3 className="text-xl font-semibold">Direct Links</h3>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <a href={`mailto:${contactEmail}`}>
                  <Mail className="h-4 w-4" />
                  {contactEmail}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.linkedin.com/in/ng-zheng-a40286246/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Linked In
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
