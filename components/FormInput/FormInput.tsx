export default function FormInput({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  return (
    <div className="text-left mb-2 w-full">
      <p className="font-bold text-black mb-1.5">{label}</p>
      <input
        type={type ?? "text"}
        className="border border-gray-300 px-2.5 py-2 w-full rounded-md focus:outline-none focus:border-indigo-500 text-black"
      />
    </div>
  );
}
