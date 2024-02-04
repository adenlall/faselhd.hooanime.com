import ContinueWatching from "@/components/Client/ContinueWatching";
import Slider from "@/components/Sections/Slider";
import AnimeCard from "@/components/UI/AnimeCard";
import EpisodeCard from "@/components/UI/EpisodeCard";

export default async function Page() {
  const res = await fetch(process.env.URL + "api", {
    next: { revalidate: Number(process.env.REVALIDATE) },
  });
  const data = await res.json();

  return (
    <main className="bg-base-100">
      <ContinueWatching />
      <Slider data={data?.data?.featured} />

      <div className="py-10 bg-primary-content">
        <h2 className="text-2xl font-bold pl-2 lg:pl-16 my-2 text-primary container w-full m-auto">
          الانميات المثبتة
        </h2>
        <div className="flex p-2 lg;p-10 flex-wrap justify-center gap-3">
          {data?.data?.last_movies?.map((film, i) => (
            <AnimeCard key={i} textclass={"text-primary"} content={film} />
          ))}
        </div>
      </div>


      <div className="py-10 bg-primary-content">
        <h2 className="text-2xl font-bold pl-2 lg:pl-16 my-2 text-primary container w-full m-auto">
          الانميات المثبتة
        </h2>
        <div className="flex p-2 lg;p-10 flex-wrap justify-center gap-3">
          {data?.data?.last_eps?.map((ep, i) => (
            <EpisodeCard key={i} textclass={"text-primary"} content={ep} />
          ))}
        </div>
      </div>



      <div className="py-10 bg-primary-content">
        <h2 className="text-2xl font-bold pl-2 lg:pl-16 my-2 text-primary container w-full m-auto">
          الانميات المثبتة
        </h2>
        <div className="flex p-2 lg;p-10 flex-wrap justify-center gap-3">
          {data?.data?.last_asia?.map((film, i) => (
            <AnimeCard key={i} textclass={"text-primary"} content={film} />
          ))}
        </div>
      </div>


      <div className="py-10 bg-primary-content">
        <h2 className="text-2xl font-bold pl-2 lg:pl-16 my-2 text-primary container w-full m-auto">
          الانميات المثبتة
        </h2>
        <div className="flex p-2 lg;p-10 flex-wrap justify-center gap-3">
          {data?.data?.last_anime?.map((ep, i) => (
            <EpisodeCard key={i} textclass={"text-primary"} content={ep} />
          ))}
        </div>
      </div>


      <div className="py-10 bg-primary-content">
        <h2 className="text-2xl font-bold pl-2 lg:pl-16 my-2 text-primary container w-full m-auto">
          الانميات المثبتة
        </h2>
        <div className="flex p-2 lg;p-10 flex-wrap justify-center gap-3">
          {data?.data?.top_m?.map((ep, i) => (
            <AnimeCard key={i} textclass={"text-primary"} content={ep} />
          ))}
        </div>
      </div>



    </main>
  );
}

const featured = [
  {
    title: "فريرين - ما بعد نهاية الرحلة",
    id: "sousou-no-frieren",
    img: "https://sm.ign.com/ign_br/screenshot/default/images-12_75qx.jpg",
    genres: ["مغامرة", "دراما", "فانتزي"],
  },
  {
    title: "سولو ليفلينغ",
    id: "solo-leveling-ore-dake-level-up-na-ken",
    img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg",
    genres: ["أكشن", "مغامرة", "فانتزي"],
  },
  {
    title: "ماشل الموسم التاني",
    id: "mashle-part-2",
    img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166610-2gA4Vv20MVhv.jpg",
    genres: ["أكشن", "كوميدي", "فانتزي"],
  },
  {
    title: "بوتشيجيري!؟",
    id: "bucchigiri",
    img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx165254-VyebZ8cyb0u0.jpg",
    genres: ["أكشن", "خارق للطبيعة"],
  },
];
