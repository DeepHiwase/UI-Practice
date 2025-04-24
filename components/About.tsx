import Image from "next/image";
import Button from "./ui/button";

const About = () => {
  return (
    <div className="mt-[100px] mx-[50px] flex justify-between">

      <div className="w-[476px] my-auto flex flex-col gap-[37px]">
        <div className="font-medium text-[14px] tracking-[0.5px] text-[var(--dark-green)]">HOW IT WORKS</div>
        <div className="font-bold text-[52px] leading-[62px] tracking-[0.5px] text-[var(--dark-green)]">We Help You Prioritize Your Mental Health</div>
        <div className="font-normal text-[22px] leading-[34px] tracking-[0.5px] text-[var(--dark-green)]">
          Browse therapists, book a session, and start your healing journey with
          trusted professionals.
        </div>
        <div>
          <Button label="Find A Therapist" />
        </div>
      </div>

      <div className="bg-[var(--dark-green)] rounded-[60px] w-[550px] relative">
        <Image src={'/about.svg'} alt="Image 3" width={415} height={493} className="mx-auto mt-[71px]" />
      </div>

    </div>
  );
};

export default About;
