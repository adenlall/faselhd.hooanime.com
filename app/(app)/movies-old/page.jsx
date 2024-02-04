import AnimeCard from "@/components/UI/AnimeCard";
import { notFound } from "next/navigation";
import parse from 'html-react-parser';
import '@/styles/pagination.css';

export const metadata = {
    title: " جميع قائمة أفلام الانمي المترجم - "+process.env.NAME,
    description: "مشاهدة وتحميل قائمة أفلام الانمي المترجم اون لاين  جودة عالية - قائمة الانمي" +" - "+process.env.MAME,
    openGraph: {
        title: "جميع قائمة أفلام الانمي المترجم - "+process.env.NAME,
        description: "مشاهدة وتحميل قائمة أفلام الانمي المترجم اون لاين  جودة عالية - قائمة الانمي" +" - "+process.env.MAME,
        url: process.env.URL+"anime/",
        siteName: process.env.NAME,
        locale: 'ar_AR',
        type: 'article',
    },
    
    alternates: {
        canonical: process.env.URL+"anime-type/movie/",
        languages: {
          'en-US': 'https://mad-anime.rf.gd/',
        }
      },
    twitter: {
        card: 'summary_large_image',
        title: "جميع قائمة أفلام الانمي المترجم - "+process.env.NAME,
        description: "مشاهدة وتحميل قائمة الانمي المترجم اون لاين  جودة عالية - قائمة الانمي" +" - "+process.env.MAME,
        creator: '@hooanime',
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


export default async function Page() {

    let url = process.env.URL+"api/"+"anime-type/movie/";
    const res = await fetch(url, { next: { revalidate: Number(process.env.LONG_REVALIDATE) } });
    const data = await res.json();
    
    if (data.status !== 200) {
        return notFound();
    }

    return (
        <>
        <div className="py-10 bg-base-300">
            <h1 className="text-3xl font-bold pl-2 lg:pl-16 text-base-content container w-full m-auto mb-3">قائمة أفلام الانمي</h1>
            <h2 className="text-lg font-bold pl-2 lg:pl-16 text-base-content container w-full m-auto">شاهد جميع أفلام الانمي الان</h2>
            <div className="flex p-2 lg:p-10 flex-wrap justify-center gap-3">
            {data?.data?.animes?.map((anime, i) => (
                <AnimeCard key={i} anime={anime} />
            ))}
            </div>
            {
                data?.data?.pagination?(
                    <div className="container m-auto w-fit">
                        <div className="pagination join w-fit">
                            {parse(data?.data?.pagination?.replace(/https:\/\/witanime.pics\//g, process.env.URL))}
                        </div>
                    </div>
                ):null
            }
        </div>
        </>
    )
}