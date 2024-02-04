import AnimeCard from "@/components/UI/AnimeCard";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import "@/styles/pagination.css";

export default async function Page({params}) {
    let url;
    if (!params.path[0]) {
        let temp = params.path;
        params.path = [];
        params.path[0] = temp;
    }
    url = process.env.URL+"api/"+decodeURI(params.path[0])+"/"+(params.path[1]?decodeURI(params.path[1]):"")+"/"+(params.path[2]?decodeURI(params.path[2]):"")+"/"+(params.path[3]?decodeURI(params.path[3]):"");
    const res = await fetch(url, { next: { revalidate: Number(process.env.LONG_REVALIDATE) } });
    const data = await res.json();

    if (data.status !== 200) {
        return notFound();
    }

    return (
        <>
        <div className="py-10 bg-base-300">
            <h1 className="text-2xl font-bold pl-2 lg:pl-16 text-base-content container w-full m-auto">قائمة مسلسلات :  {data?.data?.q}</h1>
            <div className="flex p-2 lg:p-10 flex-wrap justify-center gap-3">
            {data?.data?.list?.map((item, i) => (
                <AnimeCard key={i} content={item} />
            ))}

            {
                data?.data?.pagination?(
                  <div className="w-full">
                    <div className="w-fit m-auto">
                        <div className="pagination join mx-4">
                            {parse(data?.data?.pagination?.replace(/https:\/\/www.faselhd.link\//g, process.env.URL))}
                        </div>
                    </div>
                  </div>
                ):null
            }

            </div>
        </div>
        </>
    )
}


export async function generateMetadata({ params }) {
  let url;
  if (!params.path[0]) {
    let temp = params.path;
    params.path = [];
    params.path[0] = temp;
  }
  url =
    process.env.URL +
    "api/" +
    decodeURI(params.path[0]) +
    "/" +
    (params.path[1] ? decodeURI(params.path[1]) : "") +
    "/" +
    (params.path[2] ? decodeURI(params.path[2]) : "");

  const res = await fetch(url, {
    next: { revalidate: Number(process.env.LONG_REVALIDATE) },
  });
  const data = await res.json();

  if (data.status !== 200) {
    return;
  }

  return {
    title: data?.data?.meta?.title,
    description: data?.data?.meta?.description,
    openGraph: {
      title: data?.data?.meta?.title,
      description: data?.data?.meta?.description,
      url: process.env.URL + "anime/" + params.path,
      siteName: process.env.NAME,
      locale: "ar_AR",
      type: "article",
    },
    alternates: {
      canonical: url.replace("api/", ""),
      languages: {
        "en-US": "https://mad-anime.rf.gd/",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: data?.data?.meta?.title,
      description: data?.data?.meta?.description,
      creator: "@hooanime",
      images: {
        url: "/meta/header-background.png",
        alt: "مشاهدة وتحميل الانمي المترجم اون لاين",
      },
      app: {
        name: process.env.NAME,
        url: {
          iphone: process.env.URL,
          ipad: process.env.URL,
        },
      },
    },
  };
}