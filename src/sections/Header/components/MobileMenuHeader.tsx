export const MobileMenuHeader = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full z-[100000] ml-auto">
      <div className="box-border caret-transparent block float-left outline-[3px] no-underline pr-[18px] md:hidden">
        <div className="box-border caret-transparent outline-[3px] relative no-underline w-px z-[1000]">
          <div className="box-border caret-transparent hidden h-full max-w-0 outline-[3px] no-underline w-0 overflow-hidden left-0">
            <form className="box-border caret-transparent h-full outline-[3px] no-underline">
              <label className="box-border caret-transparent hidden font-bold outline-[3px] no-underline mb-[5px]">
                Search
              </label>
              <input
                type="text"
                name="term"
                placeholder="Search..."
                className="box-border caret-transparent text-base leading-[18.4px] outline-[3px] no-underline w-full border border-zinc-300 px-2 py-3 rounded-[3px] border-solid"
              />
              <input
                type="hidden"
                name="type"
                defaultValue="SITE_PAGE"
                className="appearance-none bg-transparent box-border caret-transparent hidden text-base leading-[18.4px] outline-[3px] no-underline border border-zinc-300 p-2 rounded-[3px] border-solid"
              />
              <input
                type="hidden"
                name="type"
                defaultValue="LANDING_PAGE"
                className="appearance-none bg-transparent box-border caret-transparent hidden text-base leading-[18.4px] outline-[3px] no-underline border border-zinc-300 p-2 rounded-[3px] border-solid"
              />
            </form>
          </div>
        </div>
        <button
          type="button"
          aria-label="Search"
          className="items-center bg-transparent caret-transparent flex outline-[3px] absolute text-center no-underline mr-[5px] p-[5.94px] right-[52px] top-0.5"
        >
          <img
            src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-5.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 outline-[3px] no-underline align-baseline w-4"
          />
        </button>
      </div>
      <div className="box-border caret-transparent block float-right outline-[3px] text-right no-underline z-[1001] mr-[15px] pl-[18px] md:hidden">
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
