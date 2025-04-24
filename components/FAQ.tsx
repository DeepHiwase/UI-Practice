import Image from "next/image"
import Accordion from "./ui/accordion"

const FAQ = () => {
  return (
    <div className="mt-[150px] flex gap-[50px] h-[975px]">
      <div>
        <div className="pl-[50px] text-[var(--dark-green)]">
          <div className="font-medium text-[14px] leading-[17px] tracking-[0.5px]">
          NEED HELP?
          </div>
          <div className="w-[440px] font-bold text-[52px] leading-[62px] tracking-[0.5px] mt-[40px]">
          Frequently Asked Questions
          </div>
          <div className="w-[476px] font-normal text-[22px] leading-[34px] tracking-[0.5px] mt-[40px]">
          Find answers to common questions about our services, therapy, and mental well-being.
          </div>
        </div>
        <div className="w-[570px] h-[602px] mt-[50px] relative">
          <div className="absolute bottom-0 left-0 right-0 rounded-[60px] h-[385px] bg-[var(--bg-hero)] z-10"></div>
          <Image src={'/faq.svg'} alt="Image 7" width={376} height={574} className="absolute bottom-0 left-[70px] z-20" />
        </div>
      </div>

      {/* Accordions */}
      <div className="pt-[197px] flex flex-col gap-[20px]">
        <Accordion question="How do I book a therapy session?" />
        <Accordion question="Are online sessions available?" />
        <Accordion question="What’s the difference between therapy and coaching?" />
        <Accordion question="Do I need a subscription to access services?" />
        <Accordion question="Can I switch therapists if I don’t feel the right connection?" />
        <Accordion question="Is my information and session history kept confidential?" />
      </div>
    </div>
  )
}

export default FAQ