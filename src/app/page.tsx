import FeatureShowcase from "@/components/featureShowcase";
import Hero from "@/components/hero";
import { features } from "@/lib/features";

export default async function Home() {
  return (
    <div>
      <div className="h-[calc(100vh-65px)] w-screen max-w-full overflow-hidden">
        <Hero />
      </div>

      {/* Feature showcase */}
      <div className="mt-14 flex h-full w-full max-w-full flex-row items-center justify-center bg-black bg-opacity-20 px-16 py-4">
        <FeatureShowcase features={features} />
      </div>
    </div>
  );
}
