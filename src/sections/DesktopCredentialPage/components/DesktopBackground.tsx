export type DesktopBackgroundProps = {
  backgroundVariant: string;
  imageSrc?: string;
  imageClassName?: string;
};

export const DesktopBackground = (props: DesktopBackgroundProps) => {
  return (
    <div
      className={`caret-transparent outline-[3px] no-underline ${props.backgroundVariant}`}
    >
      {props.imageSrc && props.imageClassName ? (
        <img
          src={props.imageSrc}
          className={`caret-transparent inline outline-[3px] no-underline align-baseline ${props.imageClassName}`}
        />
      ) : null}
    </div>
  );
};
