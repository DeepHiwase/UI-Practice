import Image from "next/image";
import Button from "./ui/button";

const Services = () => {
  return (
    <div className=" bg-yellow-300 mt-[150px] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="leading-[17px] tracking-[0.5px] font-medium text-[14px]">
          SERVICES
        </div>
        <div className="w-[440px] leading-[62px] tracking-[0.5px] font-bold text-[52px] text-center mt-[20px]">
          Your Path to Well-being
        </div>
        <div className="w-[476px] leading-[34px] tracking-[0.5px] font-normal text-[22px] text-center mt-[20px]">
          Discover expert guidance for a healthier mind and balanced life.
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-[40px] mt-[80px]">
        <div className="bg-[var(--bg-hero)] w-[600px] rounded-[60px] pl-[60px] relative h-[455px]">
          <div className="w-[360px] leading-[48px] tracking-[0.5px] font-semibold text-[40px] mt-[75px]">
            Mindfulness & Meditation
          </div>
          <div className="w-[295px] leading-[26px] tracking-[0.5px] font-normal text-[20px] mt-[35px]">
            Guided meditation sessions and stress management techniques.
          </div>

          <button className="w-[192px] h-[54px] rounded-full bg-[var(--bg-hero)] text-[var(--dark-green)] font-semibold text-[20px] leading-[24px] tracking-[0.5px] border border-[var(--dark-green)] mt-[35px]">
            Learn More
          </button>

          <Image
            src={"/services1.svg"}
            alt="Image 4"
            width={229}
            height={322}
            className="absolute right-[52px] bottom-[74px]"
          />
        </div>

        <div className="bg-white rounded-[60px] pl-[60px] h-[455px]">
          <div className="w-[360px] leading-[48px] tracking-[0.5px] font-semibold text-[40px] mt-[75px]">
            One-on-One Therapy
          </div>
          <div className="w-[295px] leading-[26px] tracking-[0.5px] font-normal text-[20px] mt-[35px]">
            Virtual and in-person therapy sessions with licensed professionals.
          </div>

          <button className="w-[192px] h-[54px] rounded-full bg-white text-[var(--dark-green)] font-semibold text-[20px] leading-[24px] tracking-[0.5px] border border-[var(--dark-green)] mt-[35px]">
            Learn More
          </button>
        </div>

        <div className="bg-white rounded-[60px] pl-[60px] col-span-2 relative overflow-hidden">
          <div className="w-[515px] leading-[48px] tracking-[0.5px] font-semibold text-[40px] mt-[75px]">
            Wellness Coaching
          </div>
          <div className="w-[617px] leading-[26px] tracking-[0.5px] font-normal text-[20px] mt-[35px]">
            Personalized guidance to help you build healthier habits, manage
            stress, and achieve balance in all areas of your life.
            <br />
            <br />
            Our wellness coaches support you in creating sustainable routines
            for mental, emotional, and physical well-being.
          </div>

          <div className="pt-[35px]">
            <Button label="Learn More" />
          </div>

          <Image
            src={"/services2.svg"}
            alt="Image 5"
            width={510}
            height={455}
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
