import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="bg-red-500 mt-[150px] ml-[50px] flex">
      <div>
        <div className="font-medium text-[14px] leading-[17px] tracking-[0.5px] text-[var(--dark-green)]">
        TESTIMONIALS
        </div>

        <div className="font-bold text-[52px] leading-[62px] tracking-[0.5px] text-[var(--dark-green)] w-[440px] mt-[40px]">
        What Our Clients Are Saying
        </div>

        <div className="font-normal text-[22px] leading-[34px] tracking-[0.5px] text-[var(--dark-green)] w-[476px] mt-[40px] mr-[114px]">
        Positive experiences from users who have benefited from therapy or wellness programs.
        </div>

        <div className="mt-[50px] flex gap-[20px]">
          <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center">
            <Image src={'/arrow-left.svg'} alt="Left Arrow" width={20} height={14} />
          </div>
          <div className="w-[54px] h-[54px] rounded-full bg-[var(--dark-green)]  flex items-center justify-center">
            <Image src={'/arrow-right.svg'} alt="Left Arrow" width={20} height={14} />
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-hero)] rounded-[60px] w-[393px] h-[393px] text-[var(--dark-green)] px-[50px] pt-[65px] pb-[60px] mt-[34px] mr-[40px]">
        <div className="w-[293px] font-normal text-[20px] leading-[26px] tracking-[0.5px]">
        &quot;Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!&quot;
        </div>

        <div className="font-normal text-[20px] leading-[26px] tracking-[0.5px] mt-[86px]">
        — Anna R., 32
        </div>
      </div>

      <div className="bg-[var(--dark-green)] rounded-[60px] w-[393px] h-[393px] text-white px-[50px] pt-[65px] pb-[60px] mt-[34px]">
        <div className="w-[293px] font-normal text-[20px] leading-[26px] tracking-[0.5px]">
        &quot;I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I&apos;m prioritizing my mental well-being.&quot;
        </div>

        <div className="font-normal text-[20px] leading-[26px] tracking-[0.5px] mt-[60px]">
        — Mark S., 41
        </div>
      </div>

    </div>
  )
}

export default Testimonials