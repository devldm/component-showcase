export default function FormInput({
  label,
  labelStyles,
  type,
}: {
  label: string;
  labelStyles?: string;
  type: string;
}) {
  return (
    <div className="text-left mb-2 w-full">
      <p className={`font-bold mb-1.5 ${labelStyles}`}>{label}</p>
      <input
        type={type ?? "text"}
        className="border border-gray-300 px-2.5 py-2 w-full rounded-md focus:outline-none focus:border-indigo-500 text-black"
      />
    </div>
  );
}
