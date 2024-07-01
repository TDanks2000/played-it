import { type DefaultCardProps } from "@/@types/shared/props";
import { cn, ensureDecimal } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { type FC } from "react";

const BannerCard: FC<DefaultCardProps> = ({
  id,
  name,
  cover,
  rating,
  genres,
}) => {
  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.png`;

  return (
    <Link
      className="group h-full w-full overflow-hidden rounded-lg transition-all hover:opacity-80"
      href={`/info/${id}`}
    >
      <div
        className="flex h-full w-full flex-col justify-between overflow-hidden rounded-lg bg-cover bg-center transition-all"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div
          className={cn([
            "flex h-full w-full flex-col justify-between bg-gradient-to-tr from-zinc-900 to-transparent p-4",
            {
              "justify-end": !rating,
            },
          ])}
        >
          {!!rating && rating > 0 && (
            <div className="flex items-center justify-start">
              <div className="flex flex-row items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-sm font-bold">
                <StarIcon size={16} color="yellow" fill="yellow" />
                {ensureDecimal(rating / 10) ?? "??"}
              </div>
            </div>
          )}
          <div>
            <h3 className="line-clamp-2 text-2xl font-bold text-white">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {genres?.[0]?.name ?? null}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
