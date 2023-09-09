import { Albums } from "../../data/music";
import Image from "next/image";
import MusicPlayerItem from "../MusicPlayerItem/MusicPlayerItem";

export default function MusicGrid() {
  return (
    <div className="w-screen bg-[#010409] flex justify-center items-center text-gray-200">
      <div className="px-3 mx-auto md:px-6 py-14 flex flex-col items-start md:w-[1000px]">
        <h1 className="text-4xl font-bold mb-6">Recently Played</h1>
        <div className="w-full flex flex-row flex-wrap justify-around">
          {Albums.map((album) => {
            return <MusicPlayerItem album={album} key={0} />;
          })}
        </div>
      </div>
    </div>
  );
}
