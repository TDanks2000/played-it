import Row from "@/components/row";
import { api } from "@/trpc/server";

const TopRatedShowcase = async () => {
  const data = await api.igdb.top_rated();

  return <Row cardType="default" data={data} />;
};

export default TopRatedShowcase;
