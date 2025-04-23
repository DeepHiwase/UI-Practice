export default function Button({ label }: ButtonPorps) {
  return (
    <button
      className="bg-[var(--dark-green)] rounded-full text-white px-[39px] py-[15px] font-semibold text-[20px] leading-[24px] tracking-[0.5px]"
    >{label}</button>
  )
}

interface ButtonPorps {
  label: string;
}