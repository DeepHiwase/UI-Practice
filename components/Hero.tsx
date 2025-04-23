import Image from "next/image";
import Button from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-[var(--bg-hero)] mt-[40px] h-[668px] rounded-[70px] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="text-[var(--dark-green)] font-bold text-[70px] w-[640px] text-center tracking-[0.5px] leading-[84px]">
        Support for Your Mental Well-being
      </div>
      <div className="text-[var(--dark-green)] font-normal text-[24px] w-[564px] tracking-[0.5px] leading-[29px] m-[15px] text-center">
        Connect with licensed therapists, counselors, and wellness coaches to
        support your journey.
      </div>

      <div>
        <Button label="Get Started" />
      </div>

      <Image
        src={"/hero_left.svg"}
        alt="Image1"
        width={380}
        height={618}
        className="absolute left-0 bottom-0"
      />
      <Image
        src={"/hero_right.svg"}
        alt="Image2"
        width={406}
        height={668}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Hero;
