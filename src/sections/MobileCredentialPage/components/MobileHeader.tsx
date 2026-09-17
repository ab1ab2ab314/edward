export type MobileHeaderProps = {
  variant: string;
  title: string;
  imageUrl: string;
  backgroundImageUrl: string;
  badgeImageUrl: string;
  statusLabel: string;
  statusText: string;
};

export const MobileHeader = (props: MobileHeaderProps) => {
  if (props.variant === "title") {
    return (
      <div className="caret-transparent outline-[3px] no-underline text-[22px] font-bold text-center pt-5 pb-[15px] font-arial">
        {props.title}
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url('${props.backgroundImageUrl}')` }}
      className="caret-transparent outline-[3px] no-underline bg-bottom bg-no-repeat bg-size-[100%_300px]"
    >
      <div className="caret-transparent outline-[3px] no-underline pb-[15px] px-2.5 md:px-0">
        <table className="caret-transparent outline-[3px] text-start no-underline">
          <tbody className="caret-transparent outline-[3px] no-underline">
            <tr className="caret-transparent outline-[3px] no-underline align-middle">
              <td className="caret-transparent outline-[3px] no-underline align-middle p-0">
                <img
                  src={props.imageUrl}
                  className="caret-transparent inline outline-[3px] no-underline align-baseline w-[200px] border border-solid"
                />
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-middle p-0">
                <div className="caret-transparent outline-[3px] no-underline w-[35px]"></div>
              </td>
              <td className="caret-transparent outline-[3px] no-underline align-middle p-0">
                <div className="caret-transparent outline-[3px] no-underline">
                  <div className="caret-transparent text-sky-600 text-[15px] font-bold outline-[3px] no-underline uppercase font-arial md:text-amber-500 md:text-xs md:normal-case md:font-avenir">
                    {props.statusLabel}
                  </div>
                  <div className="caret-transparent text-lime-300 text-[28px] outline-[3px] no-underline font-arial md:text-black md:font-avenir">
                    {props.statusText}
                  </div>
                </div>
                <div className="caret-transparent outline-[3px] no-underline">
                  <div className="caret-transparent outline-[3px] no-underline pt-2.5">
                    <div className="caret-transparent h-[115px] outline-[3px] relative no-underline w-[115px]">
                      <div
                        style={{
                          backgroundImage: `url('${props.badgeImageUrl}')`,
                          backgroundSize: "115px 115px",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="caret-transparent h-[115px] outline-[3px] absolute no-underline w-[115px] left-0 top-0"
                      >
                         
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
