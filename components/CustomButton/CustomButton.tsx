export default function CustomButton({
  buttonText,
  type,
  onClick,
  customStyles,
}: {
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  customStyles?: string;
}) {
  return (
    <button
      className={`bg-indigo-600 hover:bg-indigo-800 w-full rounded-md py-3 font-bold mt-2 ${customStyles}`}
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
