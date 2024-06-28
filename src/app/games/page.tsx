import TopRatedShowcase from "@/features/gamesShowcase/components/topRated";

const GamesPage = () => {
  return (
    <div className="overflow-hidden p-5">
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-lg font-medium leading-6">Top Rated</h1>
        <TopRatedShowcase />
      </div>
    </div>
  );
};

export default GamesPage;
