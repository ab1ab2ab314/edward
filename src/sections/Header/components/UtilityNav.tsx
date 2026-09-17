export const UtilityNav = () => {
  return (
    <div className="bg-slate-600 box-border caret-transparent outline-[3px] relative no-underline z-[1000] py-[3px]">
      <div className="box-border caret-transparent max-w-none outline-[3px] no-underline w-full mx-auto px-[15px] md:max-w-[1440px] md:px-[30px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline">
          <div className="box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
            <nav className="box-border caret-transparent outline-[3px] relative no-underline md:static">
              <div className="box-border caret-transparent outline-[3px] no-underline">
                <div
                  aria-label="Navigation Menu"
                  role="navigation"
                  className="box-border caret-transparent outline-[3px] no-underline w-full md:w-auto"
                >
                  <ul
                    role="menu"
                    className="box-border caret-transparent float-none list-none outline-[3px] text-center no-underline w-full mx-auto pl-0 md:float-right md:text-start md:w-auto md:mx-0 before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.7px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter_tight before:md:text-start after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.7px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter_tight after:md:text-start"
                  >
                    <li
                      role="none"
                      className="box-border caret-transparent inline-block float-none leading-[27px] outline-[3px] text-center no-underline px-[5px] md:list-item md:float-left md:text-start md:px-0"
                    >
                      <a
                        href="https://directory.bcsp.org/"
                        role="menuitem"
                        className="box-border caret-transparent text-white block text-sm font-bold outline-[3px] text-center no-underline text-ellipsis text-nowrap pl-0 py-0 md:inline-block md:text-start md:pl-5 md:py-[5px] hover:text-stone-300 hover:border-stone-300"
                      >
                        Credential Holder Directory
                      </a>
                    </li>
                    <li
                      role="none"
                      className="box-border caret-transparent inline-block float-none leading-[27px] outline-[3px] text-center no-underline px-[5px] md:list-item md:float-left md:text-start md:px-0"
                    >
                      <a
                        href="https://certification.bcsp.org/bcspssa?__hstc=233546881.dba8a2eeb184e3d45535b8d7a47eff79.1728060784354.1729276341841.1729281212140.25&__hssc=233546881.36.1729281212140&__hsfp=1364837029"
                        role="menuitem"
                        className="box-border caret-transparent text-white block text-sm font-bold outline-[3px] text-center no-underline text-ellipsis text-nowrap pl-0 py-0 md:inline-block md:text-start md:pl-5 md:py-[5px] hover:text-stone-300 hover:border-stone-300"
                      >
                        My Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
