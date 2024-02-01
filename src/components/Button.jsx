/* eslint-disable react/prop-types */
const Button = ({ text, onClick, disabled, hover }) => {
  const btnStyle =
    "mt-6 md:px-6 md:text-[1.2rem] md:py-1.5  px-4 text-[#562ABD] py-2 border rounded uppercase";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${btnStyle} ${
        hover
          ? "hover:bg-[#562ABD] hover:text-white border-[#562ABD] cursor-pointer"
          : "border-[#562ABD]"
      }
      ${disabled ? " hidden" : ""}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
