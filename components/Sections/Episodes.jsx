import Link from "next/link";
import EpisodeCard from "../UI/EpisodeCard";

export default function Episodes({ episodes }) {

  return (
    <div id="episodes" className="flex flex-wrap justify-center container m-auto px-2 w-full">
        {
            episodes?.map((item, i)=>(
              <Link href={item?.url?.replace(process.env.BASEURL, process.env.URL) ?? "/"} className="hover:scale-105 m-2 p-4 h-40 w-40 flex items-center justify-center bg-accent rounded-box">
                <div className="text-accent-content text-lg">{item.name}</div>
              </Link>
          ))
        }
    </div>
  );
}
