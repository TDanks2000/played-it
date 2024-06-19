import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroText from "./text";

const Hero = async () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover object-top"
          src={`https://blog.playstation.com/tachyon/2024/04/4cac0ab5e97f4a2dd352919089793c07e88a429b.jpg`}
          draggable={false}
          alt="background"
          fill
        />

        {/* Blending gradient */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-background to-transparent" />

        <div className="absolute bottom-0 left-0 p-5 text-white transition-all hover:underline hover:opacity-80">
          <Link href="#" className="text-xs ">
            Ghosts of Tsushima
          </Link>
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative mt-24 flex w-fit flex-col items-center justify-center gap-7">
        <div className="flex flex-col items-center justify-center gap-2">
          <HeroText className="gao-0 flex h-[31px] flex-row overflow-hidden font-semibold text-white">
            Track your favorite Games
          </HeroText>
          <HeroText>Discover what to Play next.</HeroText>
          <HeroText>Share your ratings with friends.</HeroText>
        </div>
        {/* Sign up button */}
        <Button size={"lg"} className="text-lg">
          Start tracking now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
