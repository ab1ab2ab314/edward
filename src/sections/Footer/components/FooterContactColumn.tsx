export type FooterContactColumnProps = {
  title: string;
  href: string;
  linkText: string;
};

export const FooterContactColumn = (props: FooterContactColumnProps) => {
  return (
    <div className="box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full px-[15px] md:basis-[33.3333%] md:max-w-[33.3333%]">
      <div className="box-border caret-transparent outline-[3px] no-underline border-stone-300 mt-[25px] mb-5 border-b md:my-0 md:border-b-0 md:border-black">
        <h5 className="box-border caret-transparent text-neutral-700 hidden text-[21px] font-bold leading-[23.1px] outline-[3px] text-center no-underline mb-[5px] md:block md:text-start">
          {props.title}
        </h5>
        <button className="bg-transparent caret-transparent text-neutral-700 block outline-[3px] relative text-center no-underline uppercase w-full pb-5 px-0 md:hidden after:accent-auto after:box-border after:caret-transparent after:text-neutral-700 after:text-lg after:not-italic after:normal-nums after:font-bold after:tracking-[normal] after:leading-[18px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:uppercase after:visible after:w-full after:pl-2.5 after:border-separate after:font-font_awesome_5_free">
          {props.title}
        </button>
        <div className="box-border caret-transparent hidden outline-[3px] text-center no-underline md:block md:text-start">
          <span className="box-border caret-transparent outline-[3px] text-center no-underline md:text-start">
            <div
              role="navigation"
              aria-label="Navigation Menu"
              className="box-border caret-transparent outline-[3px] text-center no-underline w-full md:text-start md:w-auto"
            >
              <ul
                role="menu"
                className="box-border caret-transparent block list-none outline-[3px] text-center no-underline w-full pl-0 md:inline-block md:text-start md:w-auto before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.7px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter_tight before:md:text-start after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.7px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter_tight after:md:text-start"
              >
                <li
                  role="none"
                  className="box-border caret-transparent block leading-[27px] outline-[3px] text-center no-underline w-full mb-2.5 md:list-item md:text-start md:w-auto"
                >
                  <a
                    href={props.href}
                    role="menuitem"
                    className="box-border caret-transparent text-neutral-700 block text-base outline-[3px] text-center no-underline text-ellipsis w-full overflow-hidden py-[5px] md:inline-block md:text-start md:w-auto md:py-0 hover:text-blue-900 hover:border-blue-900"
                  >
                    {props.linkText}
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
