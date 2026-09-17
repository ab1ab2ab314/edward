import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const MainHeader = () => {
  return (
    <header className="box-border caret-transparent outline-[3px] no-underline py-2.5">
      <div className="items-center box-border caret-transparent flex max-w-none outline-[3px] no-underline w-full mx-auto px-[15px] md:max-w-[1440px] md:px-[30px]">
        <HeaderLogo />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-auto">
          <DesktopNavigation />
        </div>
        <HeaderActions />
      </div>
    </header>
  );
};
