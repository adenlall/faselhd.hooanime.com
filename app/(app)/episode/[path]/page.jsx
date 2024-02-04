import ContinueWatching from "@/components/Client/ContinueWatching";
import EpisodeCardTracker from "@/components/Client/EpisodeTracker";
import Download from "@/components/Sections/Download";
import Episodes from "@/components/Sections/Episodes";
import Player from "@/components/Sections/Player";
import AnimeDetails from "@/components/UI/AnimeDetails";
import Navigate from "@/components/UI/Navigate";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { redirect } from "next/navigation";



export async function generateMetadata({ params }) {

    try {
            
        let res, data;
        res = await fetch(process.env.URL+"api/episode/"+params.path);
        data = await res.json();
        

        return {
            title: data?.data?.meta?.title,
            description: data?.data?.meta?.description,
            openGraph: {
            title: data?.data?.meta?.title,
            description: data?.data?.meta?.description,
            url: process.env.URL+"anime/"+params.path,
            siteName: process.env.NAME,
            locale: 'ar_AR',
            type: 'article',
            },
            alternates: {
              canonical: process.env.URL+"episode/"+params.path,
              languages: {
                'en-US': 'https://mad-anime.rf.gd/',
              }
            },
            
            twitter: {
            card: 'summary_large_image',
            title: data?.data?.meta?.title,
            description: data?.data?.meta?.description,
            creator: '@hooanime',
            images: {
                url: data?.data?.thumbnail,
                alt: data?.data?.meta?.title,
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

    } catch (error) {

        let res, data;
        res = await fetch(process.env.URL+"api/episode/"+params.path, { next: { revalidate: Number(process.env.LONG_REVALIDATE) } });
        data = await res.json();
        

        return {
            title: data?.data?.meta?.title,
            description: data?.data?.meta?.description,
            openGraph: {
            title: data?.data?.meta?.title,
            description: data?.data?.meta?.description,
            url: process.env.URL+"anime/"+params.path,
            siteName: process.env.NAME,
            locale: 'ar_AR',
            type: 'article',
            },
            
            twitter: {
            card: 'summary_large_image',
            title: data?.data?.meta?.title,
            description: data?.data?.meta?.description,
            creator: '@hooanime',
            images: {
                url: data?.data?.thumbnail,
                alt: data?.data?.meta?.title,
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
      
}



export default async function Page({ params }) {


        let res, data;
        res = await fetch(process.env.URL+"api/episode/"+params.path, { next: { revalidate: Number(process.env.LONG_REVALIDATE) } });
        data = await res.json();


        if (data.status !== 200) {
            return notFound();
        }

        const anime = await animeContext(data?.data?.navigation?.anime?.url);

        return (
            <article className="pb-2 bg-base-300">
                <ContinueWatching/>
                {
                    anime ? (
                        <AnimeDetails anime={anime?.data}/>
                    ):null
                }
                <Navigate navigation={data?.data?.navigation} episode={data?.data?.title}/>
                <Player stream={data?.data?.streams} />
                <Download data={data?.data?.download}/>

                <div className="container m-auto sm:ml-auto ml-4 my-6 w-auto">
                    {/* <h2 className="text-xl my-2 font-bold">All Episodes</h2> */}
                    <Episodes episodes={anime?.data?.episodes} />
                </div>
                <EpisodeCardTracker data={{
                    "anime":{
                        "name":data?.data?.navigation?.anime?.url,
                        "name":data?.data?.navigation?.anime?.name,
                    },
                    "url":"/episode/"+params.path,
                    "name":data?.data?.title
                }} />
            </article>
        );

}

const animeContext = async (url) => {
    if (!url) {
        return;
    }
    const id = url.split("anime/")[1];
    const animeres = await fetch(process.env.URL+"api/anime/"+id);
    const data = await animeres.json();
    return data;
}