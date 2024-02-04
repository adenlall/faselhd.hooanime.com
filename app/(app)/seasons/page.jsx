import ContinueWatching from "@/components/Client/ContinueWatching";
import EpisodeCardTracker from "@/components/Client/EpisodeTracker";
import Download from "@/components/Sections/Download";
import Episodes from "@/components/Sections/Episodes";
import Player from "@/components/Sections/Player";
import AnimeDetails from "@/components/UI/AnimeDetails";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { redirect } from "next/navigation";

export default async function page({searchParams}) {
  const q = searchParams.p;
  if (!q) {
    return Response.json(
      { status: 500, details: "no valid query"},
      {
        status: 500,
      }
    );
  }
  let res, data;
  res = await fetch(process.env.URL + "api/seasons?p=" + q, {
    next: { revalidate: Number(process.env.REVALIDATE) },
  });
  data = await res.json();

  if (data.status !== 200) {
    console.log(data);
    return notFound();
  }
  return (
    <article className="pb-2 bg-base-300 text-base-content">
      <ContinueWatching />
      <AnimeDetails content={data?.data?.parent} />
      <div className="container px-2 m-auto w-full">
        <a
          href="#episodes"
          className="btn btn-base btn-outline btn-block btn-lg"
        >
          <h1>{data?.data?.name}</h1>
        </a>
      </div>
      <Player stream={data?.data?.stream} />
      <Download data={data?.data?.download} />
      {data?.data?.parent?.seasons.length ? (
        <div className="flex flex-wrap justify-center container m-auto my-14 px-2 w-full">
          {data?.data?.parent?.seasons?.map((item, i) => (
            <div
              className="m-2 rounded-box group"
              style={{
                background: "url('" + (item?.img ?? "") + "')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Link
                style={{ "--tw-bg-opacity": 0.75 }}
                href={"/seasons" + item?.url}
                className="p-4 h-40 w-80 flex items-center justify-center group-hover:bg-primary bg-secondary rounded-box"
              >
                <div className="text-secondary-content group-hover:text-primary-content text-2xl font-black">
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {data?.data?.episodes?.length ? (
        <Episodes episodes={data?.data?.episodes} />
      ) : (
        ""
      )}
    </article>
  );
}
