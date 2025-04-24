import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-[120px] flex gap-[50px] mb-[70px]">
      <div className="rounded-[50px] pt-[40px] px-[60px] pb-[64px] bg-white flex flex-col w-[570px] h-[460px]">
        <div className="font-bold text-[40px] leading-[48px] tracking-[0.5px] text-[var(--dark-green)]">
          Solus
        </div>
        <div className="grid grid-cols-3 grid-rows-5 gap-y-[20px] mt-[40px]">
          <div>About</div>
          <div>Instagram</div>
          <div>Terms of use</div>

          <div>Services</div>
          <div>Facebook</div>
          <div>Privacy Policy</div>

          <div>Therapists</div>
          <div>YouTube</div>
          <div></div>

          <div>Resources</div>
          <div>LinkedIn</div>
          <div></div>

          <div>Contact</div>
        </div>

        <div className="font-normal text-[18px] leading-[22px] tracking-[0.5px] text-[var(--copyright)] mt-[56px]">
          © [2035] Solus. All rights reserved.
        </div>
      </div>

      <div className="rounded-[50px] pt-[75px] px-[50px] pb-[60px] bg-[var(--dark-green)] flex flex-col w-[620px] h-[460px] relative overflow-hidden">
        <div className="font-bold text-[44px] text-white leading-[53px] tracking-[0.5px] w-[295px]">
          Find Support, Guidance, and Balance.
        </div>

        <div className="mt-[50px] rounded-full bg-white px-[148px] py-[15px] text-[var(--dark-green)] text-[20px] leading-[24px] tracking-[0.5px] font-semibold w-[480px]">
          Find Support now
        </div>

        <Image
          src={"/footer.svg"}
          alt="Image 8"
          width={228}
          height={244}
          className="absolute right-0 top-[36px]"
        />
      </div>
    </div>
  );
};

export default Footer;
