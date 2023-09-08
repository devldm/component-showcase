import Image from "next/image";
import billImage from "../../public/images/bill.jpg";

export type User = {
  name: string;
  image: string;
  phone: string;
  email: string;
};

const bill = {
  name: "Bill Gates",
  image: billImage,
  phone: "+1-206-555-0101",
  email: "bill@microsoft.com",
};

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-black">
      <div className="px-6 flex flex-col items-center max-w-[65%] sm:w-[400px] sm:flex-row max-h-max border-2 bg-zinc-100 rounded-lg py-8 justify-around align-middle min-w-min">
        <div className="w-32 h-32">
          <Image
            src={user.image}
            alt="bill gates"
            width={200}
            height={200}
            className="rounded-full flex justify-center"
          />
        </div>
        <div className="text-left">
          <h1 className="text-3xl">{user.name}</h1>
          <p className="text-gray-800 font-light text-sm mb-2">{user.phone}</p>
          <p>b{user.email}</p>
        </div>
      </div>
    </div>
  );
}
