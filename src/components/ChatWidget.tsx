export const ChatWidget = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[2147483647] right-2.5 bottom-2.5">
      <div className="box-border caret-transparent outline-[3px] no-underline"></div>
      <div
        aria-label="Open chatbot for help"
        className="items-center box-border caret-transparent flex flex-row-reverse outline-[3px] relative no-underline w-fit ml-auto mr-2.5 mt-auto mb-2.5"
      >
        <div className="bg-white shadow-[rgba(0,0,0,0.2)_0px_4px_48px_0px] box-border caret-transparent min-h-[60px] min-w-[60px] outline-[3px] relative no-underline rounded-[50%]">
          <span className="bg-indigo-600 box-border caret-transparent block h-full outline-[3px] absolute no-underline w-full z-[1] rounded-[50%] scale-90 left-0 top-0"></span>
          <span className="bg-red-600 box-border caret-transparent hidden h-2.5 outline-[3px] absolute no-underline w-2.5 z-10 rounded-[50%] right-[5px] top-[7px]"></span>
          <img
            src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-19.svg"
            alt="Icon"
            className="box-border caret-transparent text-white h-[30px] outline-[3px] absolute no-underline translate-x-[-50.0%] translate-y-[-50.0%] align-baseline w-[30px] z-[2] left-2/4 top-[55%]"
          />
        </div>
        <div className="bg-white shadow-[rgba(0,0,0,0.2)_0px_4px_48px_0px] box-border caret-transparent text-sm leading-[16.1px] max-w-[290px] min-h-[auto] min-w-[auto] outline-[3px] break-words relative no-underline w-max pl-2.5 pr-[38px] py-2.5 rounded-[10px] left-[30px] font-inter">
          We are here to help! Chat with us!
        </div>
      </div>
    </div>
  );
};
