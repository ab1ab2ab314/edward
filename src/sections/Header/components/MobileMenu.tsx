import { MobileMenuHeader } from "@/sections/Header/components/MobileMenuHeader";
import { MobileNavigation } from "@/sections/Header/components/MobileNavigation";
import { MobileSocialLinks } from "@/sections/Header/components/MobileSocialLinks";

export const MobileMenu = () => {
  return (
    <div className="bg-white box-border caret-transparent flex flex-col max-h-[1000px] outline-[3px] fixed no-underline w-full z-[100001] overflow-auto pt-[18px] -right-full inset-y-0 md:w-[400px]">
      <MobileMenuHeader />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline pt-[33.84px] px-9">
        <div className="box-border caret-transparent float-left outline-[3px] relative no-underline z-[1000] mr-[18px]">
          <span className="box-border caret-transparent outline-[3px] no-underline">
            <a
              href="https://www.bcsp.org/get-certified?hsLang=en"
              className="bg-zinc-800 caret-transparent text-white inline-block text-[10px] font-extrabold leading-[11.5px] outline-[3px] no-underline uppercase align-middle mb-[15px] p-[15px] rounded-[3px] hover:bg-neutral-600"
            >
              Get Certified
            </a>
          </span>
        </div>
      </div>
      <MobileNavigation />
      <MobileSocialLinks />
    </div>
  );
};
