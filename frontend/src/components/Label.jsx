import { twMerge } from "tailwind-merge";

const Label = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "text-stone-50 font-bold mb-1 text-left text-xs ml-5 uppercase",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
