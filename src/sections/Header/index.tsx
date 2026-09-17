import { UtilityNav } from "@/sections/Header/components/UtilityNav";
import { MainHeader } from "@/sections/Header/components/MainHeader";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const Header = () => {
  return (
    <header className="box-border caret-transparent outline-[3px] no-underline">
      <div className="box-border caret-transparent outline-[3px] no-underline">
        <div className="box-border caret-transparent outline-[3px] no-underline">
          <UtilityNav />
          <MainHeader />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
