import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-white rounded-[60px] h-[158px] mt-[150px] flex items-center gap-[64px] pl-[50px] pr-[69px]">
      <div className="text-nowrap text-[var(--dark-green)] font-medium text-[22px] leading-[26px] tracking-[0.5px]">
        Our Partners
      </div>

      <Image
        src={"/company_wealthsimple.svg"}
        alt="WealthSimple Logo"
        width={180}
        height={48}
        className="mt-[8px]"
      />

      <Image
        src={"/company_notion.svg"}
        alt="Notion Logo"
        width={129}
        height={48}
      />

      <Image
        src={"/company_medium.svg"}
        alt="Medium Logo"
        width={145}
        height={48}
      />

      <Image
        src={"/company_braze.svg"}
        alt="Braze Logo"
        width={92}
        height={48}
        className="mt-[8px]"
      />

      <Image
        src={"/company_sonos.svg"}
        alt="Sonos Logo"
        width={115}
        height={48}
      />
    </div>
  );
};

export default Partners;
