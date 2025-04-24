import Image from "next/image";

const Accordion = ({ question, answer }: AccordionInputTypes) => {
  return (
    <div className="bg-white rounded-[30px] w-[620px] flex flex-col py-[29px] pl-[50px] pr-[39px] text-[var(--dark-green)]">
      <div className="flex gap-[13px] items-center">

        <div className="w-[476px] font-medium leading-[34px] text-[20px] tracking-[0.5px]">
          {question}
        </div>
        <div className="w-[42px] h-[42px] rounded-full bg-[var(--background)] flex items-center justify-center">
          <Image src={'/plus.svg'} alt="See Answer" width={18} height={18} />
        </div>

      </div>

      <div className="hidden">
        {answer}
      </div>

    </div>
  )
}

export default Accordion

interface AccordionInputTypes {
  question: string;
  answer?: string;
}