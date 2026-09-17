import { FooterContact } from "@/sections/Footer/components/FooterContact";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent outline-[3px] no-underline">
      <div className="box-border caret-transparent outline-[3px] no-underline">
        <div className="box-border caret-transparent outline-[3px] no-underline">
          <FooterContact />
          <a
            href="javascript://"
            className="bg-neutral-700/70 box-border caret-transparent text-blue-900 hidden h-[50px] outline-[3px] fixed no-underline w-[50px] z-[10000000] rounded-[35px] left-5 bottom-5 hover:text-blue-500 hover:bg-neutral-700/90 hover:border-blue-500"
          >
            <img
              src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-18.svg"
              alt="Icon"
              className="box-border caret-transparent inline text-[19px] leading-[21.85px] outline-[3px] relative no-underline align-baseline w-5 left-[15px] top-[15px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
