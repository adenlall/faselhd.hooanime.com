import Image from "next/image";
import Link from "next/link";

export default async function AnimeCard({ content, type }) {
  // let data;
  // try {
  //   let url;
  //   if (type === "season") {
  //     url = process.env.IMDB+encodeURI(removeAr(content?.url?.split("series/")[1]).replace("-", " ").replace("/",""))+".json", { next: { revalidate: Number(process.env.LONG_REVALIDATE) } };      console.log(url);
  //   } else {
  //     url = process.env.IMDB+encodeURI(removeAr(content?.name))+".json", { next: { revalidate: Number(process.env.LONG_REVALIDATE) } }
  //   }
  //   const res = await fetch(url);
  //   data = await res.json();
      
  // } catch (error) {
  //   console.error("@mal/api", error);
  // }

  return (
    <article className="mb-3 hover:scale-105 transition-transform">
      <div className="card-anime rounded-box m-1 shadow-xl">
        <Link href={content?.url?.split(process.env._BASEURL)[1] ?? "/"}>
          <div className="sm:hidden bg-[#000000b0] sm:bg-transparent flex flex-col items-center justify-between p-5 h-full w-full rounded-box hover:bg-[#000000b0] card-anime absolute z-10">
            <h6 className="flex w-full justify-between">
              <span>
                <span className="badge badge-accent">
                  {content?.genres[0] ?? "TV"}
                </span>
              </span>
            </h6>
            <div className="flex flex-col space-y-3 w-full">
              <h2 className="inline-text text-md font-bold text-white hardwidth">
                {content?.name ?? "--"}
              </h2>
              <ul className="scroll-hidden flex flex-nowrap space-0">
                {
                  content?.genres?.map((item, i)=>(
                    <>
                    {i > 0 ? (
                      <li key={i} className="badge inline ovverflow-hidden text-hidden w-fit m-1">{item}</li>
                    ):""
                    }
                    </>
                  ))
                }
              </ul>
              <button className="w-full z-auto">
                <button className="btn btn-secondary w-full">مشاهدة</button>
              </button>
            </div>
          </div>
        </Link>
        <Image className="card-anime rounded-box bg-primary" width={240} height={350} src={content?.img??""} alt={content?.name+" image poster hd"}/>
      </div>
      
    </article>
  );
}


const removeAr = (str) => {
    var arabicRegex = /[\u0600-\u06FF]/g;
    let data = decodeURI(str).replace(arabicRegex, '');
    return data;
}