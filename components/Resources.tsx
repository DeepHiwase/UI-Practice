const Resources = () => {
  return (
    <div className="mt-[120px]">
      <div className="flex flex-col items-center">
        <div className="leading-[17px] tracking-[0.5px] font-medium text-[14px]">
          EXPLORE & LEARN
        </div>
        <div className="w-[440px] leading-[62px] tracking-[0.5px] font-bold text-[52px] text-center mt-[20px]">
          Resources for Your Well-being
        </div>
        <div className="w-[476px] leading-[34px] tracking-[0.5px] font-normal text-[22px] text-center mt-[20px]">
          Explore expert insights, self-care guides, and tools to support your
          mental health.
        </div>
      </div>

      <div className="flex gap-[40px] mt-[80px]">
        <div className="bg-white rounded-[59px] w-[387px] h-[404px] flex flex-col items-center">
          <div className="w-[247px] leading-[36px] tracking-[0.5px] font-semibold text-[30px] text-center mt-[60px]">
            Articles & Guides
          </div>
          <div className="w-[307px] leading-[26px] tracking-[0.5px] font-normal text-[18px] text-center mt-[20px]">
            Practical tips on stress management, mindfulness, and emotional
            resilience.
          </div>
          <div className="bg-[var(--button-yellow)] rounded-full px-[39px] py-[15px] w-[155px] font-semibold text-[20px] text-white leading-[24px] tracking-[0.5px] mt-[60px]">
            Explore
          </div>
        </div>

        <div className="bg-white rounded-[59px] w-[387px] h-[404px] flex flex-col items-center">
          <div className="w-[247px] leading-[36px] tracking-[0.5px] font-semibold text-[30px] text-center mt-[60px]">
            Meditation & Relaxation
          </div>
          <div className="w-[307px] leading-[26px] tracking-[0.5px] font-normal text-[18px] text-center mt-[20px]">
            Audio sessions for guided meditation and deep breathing exercises.
          </div>
          <div className="bg-[var(--button-aqua)] rounded-full px-[39px] py-[15px] w-[155px] font-semibold text-[20px] text-white leading-[24px] tracking-[0.5px] mt-[60px]">
            Explore
          </div>
        </div>

        <div className="bg-white rounded-[59px] w-[387px] h-[404px] flex flex-col items-center">
          <div className="w-[247px] leading-[36px] tracking-[0.5px] font-semibold text-[30px] text-center mt-[60px]">
            Webinars & Workshops
          </div>
          <div className="w-[307px] leading-[26px] tracking-[0.5px] font-normal text-[18px] text-center mt-[20px]">
            Live and recorded sessions with mental health professionals.
          </div>
          <div className="bg-[var(--button-pink)] rounded-full px-[39px] py-[15px] w-[155px] font-semibold text-[20px] text-white leading-[24px] tracking-[0.5px] mt-[86px]">
            Explore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
