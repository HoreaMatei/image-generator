import { twMerge } from "tailwind-merge";

const Input = ({ isTextArea, className, ...props }) => {
  let Component;
  if (isTextArea) {
    Component = "textarea";
  } else {
    Component = "input";
  }

  return (
    <Component
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className={twMerge(
        " bg-white  w-64 lg:w-80 m-auto p-2 shadow-lg focus:outline-none  ",
        className
      )}
      {...props}
    />
  );
};

export default Input;
