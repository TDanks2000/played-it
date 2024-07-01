import FeatureShowcase from "@/components/featureShowcase";
import Hero from "@/components/hero";
import MostAnticipatedShowcase from "@/features/gamesShowcase/components/mostAnticipated";
import TopRatedShowcase from "@/features/gamesShowcase/components/topRated";
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

      <div className="mt-14 flex w-full flex-col gap-6 overflow-hidden px-16 py-4">
        <h2 className="text-lg font-medium">Top Rated</h2>
        <TopRatedShowcase type="grid" />
      </div>

      <div className="mt-14 flex w-full flex-col gap-6 overflow-hidden px-16 py-4">
        <h2 className="text-lg font-medium">Most Anticipated</h2>
        <MostAnticipatedShowcase type="grid" />
      </div>
    </div>
  );
}
