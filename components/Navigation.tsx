import Link from "next/link"

const Navigation = () => {
  return (
    <div className="mt-10 flex justify-between text-[var(--dark-green)]">
      <div className="flex-1 flex justify-between items-center">
      <Link href={'/'} className="text-normal block" >Home</Link>
      <Link href={'/'} className="text-normal block" >About</Link>
      <Link href={'/'} className="text-normal block" >Services</Link>
      </div>
      <div className="flex-2 flex justify-center">
      <Link href={'/'} className="font-bold text-[50px] tracking-[0.5px]" >Solus</Link>
      </div>
      <div className="flex justify-between flex-1 items-center">
      <Link href={'/'} className="text-normal block" >Therapists</Link>
      <Link href={'/'} className="text-normal block" >Resources</Link>
      <Link href={'/'} className="text-normal block" >Contact</Link>
      </div>
    </div>
  )
}

export default Navigation