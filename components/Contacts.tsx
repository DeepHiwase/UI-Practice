import Image from "next/image";

const Contacts = () => {
  return (
    <div className="mt-[150px] text-[var(--dark-green)]">
      <div className="flex flex-col items-center">
        <div className="leading-[17px] tracking-[0.5px] font-medium text-[14px]">
          Get in Touch
        </div>
        <div className="w-[440px] leading-[62px] tracking-[0.5px] font-bold text-[52px] text-center mt-[20px]">
          We’re Here to Support You
        </div>
        <div className="w-[563px] leading-[34px] tracking-[0.5px] font-normal text-[22px] text-center mt-[20px]">
          Whether you have questions, need help getting started, or want to
          learn more — reach out anytime.
        </div>
      </div>

      <div className="bg-white rounded-[50px] h-[627px] p-[70px] mt-[80px] flex gap-[78px]">
        <div>
          <div className="font-semibold text-[30px] leading-[36px] tracking-[0.5px]">
            Contact Details:
          </div>
          <div className="font-normal text-[20px] leading-[34px] tracking-[0.5px] mt-[47px]">
            <strong>Email</strong>: support@solus.com
          </div>
          <div className="font-normal text-[20px] leading-[34px] tracking-[0.5px] mt-[15px]">
            <strong>Phone</strong>: +1 (123) 456-7890
          </div>
          <div className="font-normal text-[20px] leading-[34px] tracking-[0.5px] mt-[15px]">
            <strong>Address</strong>: 123 Wellness Way, Calm City, CA 90210
          </div>

          <div className="flex gap-[20px] mt-[40px]">
            <Image
              src={"/logo_linkedin.svg"}
              alt="LinkedIn"
              width={24}
              height={24}
            />
            <Image src={"/logo_meta.svg"} alt="Meta" width={24} height={24} />
            <Image
              src={"/logo_instagram.svg"}
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src={"/logo_whatsapp.svg"}
              alt="Whatsapp"
              width={24}
              height={24}
            />
          </div>

          <div className="mt-[173px]">
            We typically respond within 12 hours.
          </div>
        </div>

        <div className="">
          <div className="ml-[50px] font-semibold text-[30px] leading-[36px] tracking-[0.5px]">
            Send Us a Message
          </div>
          <form className="mt-[50px] rounded-[50px] pt-[45px] px-[50px] pb-[60px] bg-[var(--contacts-bg)] flex flex-col w-[550px] h-[401px]">
            <label
              htmlFor="email"
              className="font-normal text-[20px] leading-[34px] tracking-[0.5px] mb-0"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="font-normal text-[20px] leading-[34px] tracking-[0.5px] border-b border-b-[var(--dark-green)] "
            />
            <label
              htmlFor="message"
              className="font-normal text-[20px] leading-[34px] tracking-[0.5px] mt-[11px]"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              placeholder="Message"
              className="font-normal text-[20px] leading-[34px] tracking-[0.5px] border-b border-b-[var(--dark-green)] mt-[30px]"
            />

            <div className="mt-[50px] rounded-full bg-[var(--dark-green)] px-[151px] py-[15px] text-[var(--contacts-bg)] text-[20px] leading-[24px] tracking-[0.5px] font-semibold">
              Send Message
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
