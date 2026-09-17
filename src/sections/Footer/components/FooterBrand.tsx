export const FooterBrand = () => {
  return (
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
  );
};
