import { album } from "@/data/music";
import Image from "next/image";

export default function MusicPlayerItem({ album }: { album: album }) {
  return (
    <div className="border-gray-600 flex-1 md:min-w-[200px] border-2 rounded-md p-3 bg-[#21262d] m-1.5 md:m-3 hover:bg-[#181c23] cursor-pointer">
      <Image
        alt={album.album_title}
        title={album.album_title}
        src={album.imgHref}
        width={200}
        height={200}
        className={"rounded-md"}
      />
      <h1 className="font-extrabold mt-2">{album.album_title}</h1>
      <p className="text-sm font-light">{album.artist}</p>
    </div>
  );
}
