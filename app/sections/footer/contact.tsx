export const CompanyContacts = () => {
  return (
    <div className="flex gap-2 md:gap-3 xl:gap-3.5 flex-1 flex-col items-start">
      <p className="text-xs md:text-xl xl:text-3xl font-bold uppercase">
        Contact Us
      </p>
      <div className="text-[.625rem] md:text-brand-md xl:text-2xl font-normal space-y-1 md:space-y-2">
        <div className="uppercase">+351 934673643</div>
        <div className="lowercase">info@surfeye.video</div>
      </div>
    </div>
  );
};
