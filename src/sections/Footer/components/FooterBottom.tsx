import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterSocialLinks } from "@/sections/Footer/components/FooterSocialLinks";

export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline mb-[25px]">
      <FooterBrand />
      <FooterSocialLinks />
    </div>
  );
};
