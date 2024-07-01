import { type IGDBImageSize } from "@/@types";
import Image, { type ImageProps } from "next/image";
import { type FC } from "react";

interface IGDBImageProps extends Omit<ImageProps, "src"> {
  imageSize?: IGDBImageSize;
  imageId: string;
  alt: string;
}

const IGDBImage: FC<IGDBImageProps> = ({
  imageSize = "original",
  imageId,
  alt,
  width,
  height,
  ...restProps
}) => {
  const src = `https://images.igdb.com/igdb/image/upload/t_${imageSize}/${imageId}.png`;

  return (
    <Image {...restProps} src={src} alt={alt} width={width} height={height} />
  );
};

export default IGDBImage;
