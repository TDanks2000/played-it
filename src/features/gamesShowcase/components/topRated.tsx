import GridLayout from "@/components/gridLayout";
import Row from "@/components/row";
import { api } from "@/trpc/server";
import { cache, type FC } from "react";

interface TopRatedShowcaseProps {
  type?: "grid" | "carousel";
}

const getData = cache(async () => {
  return await api.igdb.top_rated();
});

const TopRatedShowcase: FC<TopRatedShowcaseProps> = async ({ type }) => {
  const data = await getData();

  if (type === "grid") return <GridLayout data={data} />;
  return <Row cardType="default" data={data} />;
};

export default TopRatedShowcase;
