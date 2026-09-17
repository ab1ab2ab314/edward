export const HeaderActions = () => {
  return (
    <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-px">
        <div className="box-border caret-transparent h-full max-w-0 outline-[3px] no-underline overflow-hidden left-0">
          <form className="box-border caret-transparent h-full outline-[3px] no-underline">
            <label className="box-border caret-transparent hidden font-bold outline-[3px] no-underline mb-[5px]">
              Search
            </label>
            <input
              type="text"
              name="term"
              placeholder="Search..."
              className="box-border caret-transparent h-full outline-[3px] relative no-underline w-full z-[1000] border border-stone-300 px-2 py-[5px] rounded-[3px] border-solid"
            />
            <input
              type="hidden"
              name="type"
              defaultValue="SITE_PAGE"
              className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] no-underline p-0"
            />
            <input
              type="hidden"
              name="type"
              defaultValue="LANDING_PAGE"
              className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] no-underline p-0"
            />
          </form>
        </div>
      </div>
      <button
        type="button"
        aria-label="Search"
        className="items-center bg-transparent caret-transparent hidden min-h-0 min-w-0 outline-[3px] text-center no-underline mr-[5px] p-[5.94px] md:flex md:min-h-[auto] md:min-w-[auto]"
      >
        <img
          src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-4 outline-[3px] no-underline align-baseline w-4 md:block"
        />
      </button>
      <div className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent float-right outline-[3px] relative no-underline z-[1000] ml-[15px]">
          <span className="box-border caret-transparent hidden outline-[3px] no-underline md:inline">
            <a
              href="https://www.bcsp.org/get-certified?hsLang=en"
              className="bg-zinc-800 caret-transparent text-white inline-block text-[10px] font-extrabold leading-[11.5px] outline-[3px] no-underline uppercase align-middle p-[15px] rounded-[3px] hover:bg-neutral-600"
            >
              Get Certified
            </a>
          </span>
        </div>
      </div>
      <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline z-[1001] pl-[18px] md:hidden md:min-h-0 md:min-w-0">
        <button
          aria-label="Toggle Side Menu"
          className="bg-transparent caret-transparent h-[18px] outline-[3px] relative text-center no-underline align-super w-[28.8px] m-auto md:align-baseline"
        >
          <span className="bg-neutral-700 box-border caret-transparent block h-[3px] outline-[3px] absolute no-underline w-[28.8px] rounded-[18px] left-0 top-0"></span>
          <span className="bg-neutral-700 box-border caret-transparent block h-[3px] outline-[3px] absolute no-underline w-[28.8px] rounded-[18px] left-0 top-2/4"></span>
          <span className="bg-neutral-700 box-border caret-transparent block h-[3px] outline-[3px] absolute no-underline w-[28.8px] rounded-[18px] left-0 top-full"></span>
        </button>
      </div>
    </div>
  );
};
