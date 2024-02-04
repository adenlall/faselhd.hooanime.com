import Link from "next/link"

export default async function EpisodeCard({ content, color }){

    // let data = {
    //     image:"",
    //     large:""
    //   };
    //   try {
    //     const res = await fetch(process.env.IMDB+encodeURI(removeAr(content?.name))+".json", { next: { revalidate: Number(process.env.LONG_REVALIDATE) } });
    //     data = await res.json();
    //   } catch (error) {
    //     console.error("@mal/api", error);
    //   }
    
    return(

        <article className="mb-3 group hover:scale-105 transition-transform">
            <Link href={content?.url?.split(process.env._BASEURL)[1] ?? "/"}>
                <div className="w-[16em] h-[10em] rounded-box m-1 shadow-xl" style={{background: "url('"+(content?.img ??"")+"')", backgroundSize:"cover", backgroundPosition:"center"}}>
                        <div style={{"--tw-bg-opacity":0.65}} className={"bg-"+( color??"accent")+" w-full h-full rounded-box p-4 flex flex-col justify-between"}>
                            <div><span className={"text-md text-"+color+"-content"}>{content?.name}</span></div>
                        </div>
                </div>
            </Link>
        </article>
    );
}

const removeAr = (str) => {
    var arabicRegex = /[\u0600-\u06FF]/g;
    return str.replace(arabicRegex, '');
}