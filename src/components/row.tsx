import { type IGDBReturnDataType } from "@/@types";
import Card from "@/components/cards/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type FC } from "react";

interface RowProps {
  cardType: "default" | "horizontal-rectangle" | "vertical-rectangle";
  data: IGDBReturnDataType[];
}

const Row: FC<RowProps> = ({ cardType, data }) => {
  if (!data) return null;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/6 md:basis-[12%] xl:basis-[17.77%] 2xl:basis-[14.5%]"
          >
            <Card type={cardType} {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Row;
