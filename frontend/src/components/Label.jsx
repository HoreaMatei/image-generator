import { twMerge } from "tailwind-merge";

const Label = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "text-stone-50 ml-4 font-bold mb-1 text-left text-xs  uppercase",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
