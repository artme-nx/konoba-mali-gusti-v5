import { SiteHeader } from "@/components/site-header";
import { TastingHero } from "@/components/tasting-hero";
import { StoryNote } from "@/components/story-note";
import { TastingFlight } from "@/components/tasting-flight";
import { LocationSection } from "@/components/location-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <TastingHero />
        <StoryNote />
        <TastingFlight />
        <LocationSection />
      </main>
      <SiteFooter />
    </>
  );
}
