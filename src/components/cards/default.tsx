import { type DefaultCardProps } from "@/@types/shared/props";
import IGDBImage from "@/components/igdbImage";
import { Card, CardContent } from "@/components/ui/card";
import { type FC } from "react";

const DefaultCard: FC<DefaultCardProps> = ({
  cover,
  name,
  genres,
  ..._data
}) => {
  return (
    <Card className="group relative m-0 mt-3 w-[200px] overflow-hidden rounded-t-lg border-none p-0 ring-0">
      <CardContent className="m-0 p-0">
        <div className="group relative z-0 overflow-hidden rounded-t-lg focus:outline-none">
          {/* <Image
            src={}
            draggable={false}
            alt="background"
            width={300}
            height={300}
          /> */}

          <IGDBImage
            alt={name}
            imageId={cover.image_id ?? ""}
            width={300}
            height={300}
            className="h-72 w-full object-cover transition duration-300 ease-out group-focus-within:scale-105 group-hover:scale-105 group-focus:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-background/75 to-transparent" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-2">
          <div className="flex flex-col gap-1">
            {/* Title */}
            <h3 className="line-clamp-1 text-sm">{name}</h3>
            <div className="flex flex-row items-center gap-1 truncate">
              {/* Genre */}
              <p className="truncate text-xs text-muted-foreground">
                {genres.length > 1 ? genres[0]?.name : "??"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DefaultCard;
