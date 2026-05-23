import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/FloatingNav";
import { AboutSection } from "@/components/AboutSection";
import { PracticeAreas } from "@/components/PracticeAreas";
import { ProcessSection } from "@/components/ProcessSection";
import { TeamSection } from "@/components/TeamSection";
import { Component as ClientStories } from "@/components/ui/testimonial";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dilema Law Consultant — Advocate & Legal Consultant" },
      {
        name: "description",
        content:
          "Dilema Law Consultant (DLC) menangani hukum keluarga, perceraian, litigasi perdata, serta legalitas dan pendirian usaha di Indonesia.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <FloatingNav />
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <ProcessSection />
      <TeamSection />
      <ClientStories />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
