import { type IGDBReturnDataType } from "@/@types";
import BannerCard from "@/components/cards/bannerCard";
import { cn } from "@/lib/utils";
import { type FC } from "react";

interface GridLayoutProps {
  data: IGDBReturnDataType[];
}

const GridLayout: FC<GridLayoutProps> = ({ data }) => {
  const TopClasses = "h-60";

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5">
      {!!data[0] && (
        <div className={cn("col-span-2", TopClasses)}>
          <BannerCard {...data[0]} />
        </div>
      )}
      {!!data[1] && (
        <div className={cn(`col-start-1 row-start-2`, TopClasses)}>
          <BannerCard {...data[1]} />
        </div>
      )}
      {!!data[2] && (
        <div className={cn("col-start-3 row-start-2", TopClasses)}>
          <BannerCard {...data[2]} />
        </div>
      )}
      {!!data[3] && (
        <div className={cn("col-start-2 row-start-2", TopClasses)}>
          <BannerCard {...data[3]} />
        </div>
      )}
      {!!data[4] && (
        <div className={cn("col-start-3 row-start-1", TopClasses)}>
          <BannerCard {...data[4]} />
        </div>
      )}
    </div>
  );
};

export default GridLayout;
