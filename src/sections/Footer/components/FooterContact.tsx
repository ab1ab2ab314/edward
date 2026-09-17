import { FooterContactColumn } from "@/sections/Footer/components/FooterContactColumn";

export const FooterContact = () => {
  return (
    <div className="bg-stone-50 box-border caret-transparent outline-[3px] no-underline py-[25px]">
      <div className="box-border caret-transparent max-w-none outline-[3px] no-underline w-full mx-auto px-[15px] md:max-w-[1440px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline">
          <FooterContactColumn
            title="Main"
            href="mailto://bcsp@bcsp.org"
            linkText="bcsp@bcsp.org"
          />
          <FooterContactColumn
            title="Phone"
            href="tel://+13175934800"
            linkText="+1 317-593-4800"
          />
          <FooterContactColumn
            title="Fax"
            href="javascript://void(0);"
            linkText="+1 317-458-2411"
          />
        </div>
        <div className="box-border caret-transparent hidden outline-[3px] no-underline w-full border-stone-300 mb-[25px] pt-[25px] border-b md:block"></div>
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline mb-[25px]">
          <div className="box-border caret-transparent basis-auto shrink max-w-none min-h-[auto] min-w-[auto] order-2 outline-[3px] relative no-underline w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%] md:order-none">
            <div className="box-border caret-transparent outline-[3px] text-center no-underline mt-5 mb-2.5 md:text-start md:mt-0">
              <a
                href="https://www.bcsp.org/?hsLang=en"
                className="box-border caret-transparent text-blue-900 outline-[3px] text-center no-underline md:text-start hover:text-blue-500 hover:border-blue-500"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/BCSP_Full_Logo_Black_1.png"
                  alt="BCSP_Full Logo_Black 1"
                  className="box-border caret-transparent inline max-h-[30px] max-w-[222px] outline-[3px] text-center no-underline align-bottom w-full md:text-start"
                />
              </a>
            </div>
            <div className="box-border caret-transparent outline-[3px] text-left no-underline">
              <span className="box-border caret-transparent outline-[3px] no-underline">
                <div
                  role="navigation"
                  aria-label="Navigation Menu"
                  className="box-border caret-transparent outline-[3px] no-underline w-full md:w-auto"
                >
                  <ul
                    role="menu"
                    className="box-border caret-transparent block list-none outline-[3px] text-center no-underline w-full pl-0 md:inline-block md:text-left md:w-auto before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.7px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter_tight before:md:text-left after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.7px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter_tight after:md:text-left"
                  >
                    <li
                      role="none"
                      className="box-border caret-transparent inline-block float-none leading-[27px] outline-[3px] text-center no-underline md:list-item md:float-left md:text-left"
                    >
                      <a
                        href="https://www.bcsp.org/terms-of-use"
                        role="menuitem"
                        className="box-border caret-transparent text-neutral-700 block text-[14.4px] outline-[3px] text-center no-underline text-ellipsis text-nowrap w-full overflow-hidden pr-2.5 md:inline-block md:text-left md:w-auto hover:text-blue-900 hover:border-blue-900"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li
                      role="none"
                      className="box-border caret-transparent inline-block float-none leading-[27px] outline-[3px] text-center no-underline md:list-item md:float-left md:text-left"
                    >
                      <a
                        href="https://www.bcsp.org/privacy-policy"
                        role="menuitem"
                        className="box-border caret-transparent text-neutral-700 block text-[14.4px] outline-[3px] text-center no-underline text-ellipsis text-nowrap w-full overflow-hidden pr-2.5 md:inline-block md:text-left md:w-auto hover:text-blue-900 hover:border-blue-900"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <p className="box-border caret-transparent text-stone-500 text-[13px] leading-[19.5px] outline-[3px] text-center no-underline mb-[18px] md:text-start">
              © 2026 Copyright by BCSP
            </p>
          </div>
          <div className="box-border caret-transparent basis-auto shrink max-w-none min-h-[auto] min-w-[auto] order-1 outline-[3px] relative no-underline w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%] md:order-none">
            <div className="box-border caret-transparent outline-[3px] text-center no-underline mb-[25px] md:text-right md:mb-0">
              <a
                href="https://www.facebook.com/pages/BCSP/134960406575047"
                className="box-border caret-transparent text-blue-900 inline-block h-12 outline-[3px] text-center no-underline w-12 mx-[5px] pt-[5px] px-[5px] md:inline md:h-auto md:text-right md:w-auto hover:text-blue-500 hover:border-blue-500"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-13.svg"
                  alt="Icon"
                  className="box-border caret-transparent inline h-4 outline-[3px] text-center no-underline align-baseline w-2.5 md:text-right"
                />
              </a>
              <a
                href="https://twitter.com/BCSP"
                className="box-border caret-transparent text-blue-900 inline-block h-12 outline-[3px] text-center no-underline w-12 mx-[5px] pt-[5px] px-[5px] md:inline md:h-auto md:text-right md:w-auto hover:text-blue-500 hover:border-blue-500"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-14.svg"
                  alt="Icon"
                  className="box-border caret-transparent inline h-4 outline-[3px] text-center no-underline align-baseline w-4 md:text-right"
                />
              </a>
              <a
                href="https://www.instagram.com/bcsporg/"
                className="box-border caret-transparent text-blue-900 inline-block h-12 outline-[3px] text-center no-underline w-12 mx-[5px] pt-[5px] px-[5px] md:inline md:h-auto md:text-right md:w-auto hover:text-blue-500 hover:border-blue-500"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-15.svg"
                  alt="Icon"
                  className="box-border caret-transparent inline h-4 outline-[3px] text-center no-underline align-baseline w-3.5 md:text-right"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/board-of-certified-safety-professionals"
                className="box-border caret-transparent text-blue-900 inline-block h-12 outline-[3px] text-center no-underline w-12 mx-[5px] pt-[5px] px-[5px] md:inline md:h-auto md:text-right md:w-auto hover:text-blue-500 hover:border-blue-500"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-16.svg"
                  alt="Icon"
                  className="box-border caret-transparent inline h-4 outline-[3px] text-center no-underline align-baseline w-3.5 md:text-right"
                />
              </a>
              <a
                href="https://www.youtube.com/user/BCSPTube"
                className="box-border caret-transparent text-blue-900 inline-block h-12 outline-[3px] text-center no-underline w-12 mx-[5px] pt-[5px] px-[5px] md:inline md:h-auto md:text-right md:w-auto hover:text-blue-500 hover:border-blue-500"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent inline h-4 outline-[3px] text-center no-underline align-baseline w-[18px] md:text-right"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline">
          <div className="box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full px-[15px]">
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <br className="box-border caret-transparent outline-[3px] no-underline" />
              <p className="box-border caret-transparent leading-[27px] outline-[3px] no-underline mb-[18px]">
                 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
