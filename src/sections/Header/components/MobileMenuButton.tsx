export const MobileMenuButton = () => {
  return (
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
  );
};
