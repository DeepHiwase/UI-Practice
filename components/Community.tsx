import Image from "next/image"
import Button from "./ui/button"

const Community = () => {
  return (
    <div className="bg-white rounded-[60px] w-full h-[587px] pt-[70px] pl-[60px] text-[var(--dark-green)] relative overflow-hidden mt-[140px]">
      <div className="leading-[17px] tracking-[0.5px] font-medium text-[14px]">COMMUNITY</div>
      <div className="leading-[62px] tracking-[0.5px] font-bold text-[52px] w-[440px] mt-[40px]">You&apos;re Not Alone on This Journey</div>
      <div className="leading-[34px] tracking-[0.5px] font-normal text-[22px] w-[476px] mt-[40px]">Connect with others, share experiences, and find encouragement in a safe, supportive space.</div>
      <div className="mt-[50px]">
      <Button label="Join The Community" />
      </div>

      <Image src={'/community.svg'} alt="Community Image" width={712} height={443} className="absolute bottom-0 right-0" />
    </div>
  )
}

export default Community