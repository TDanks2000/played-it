import { type DefaultCardProps } from "@/@types/shared/props";
import DefaultCard from "@/components/cards/default";
import { type FC } from "react";

interface CardProps extends DefaultCardProps {
  type: "default" | "horizontal-rectangle" | "vertical-rectangle";
}

const Card: FC<CardProps> = ({ type, ...data }) => {
  switch (type) {
    case "default":
    default:
      return <DefaultCard {...data} />;
    case "horizontal-rectangle":
      // TODO: implement horizontal rectangle card
      return null;
    case "vertical-rectangle":
      // TODO: implement vertical rectangle card
      return null;
  }
};

export default Card;
