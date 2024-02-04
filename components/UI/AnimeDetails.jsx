import Link from "next/link";
import ImageClient from "../Client/ImageClient";

export default async function AnimeDetails({ content, h1 }) {
  return (
    <div
      dir={"ltr"}
      className=" container mx-auto mb-3 sm:mt-4 flex md:flex-row flex-col items-stretch content-center space-y-5 md:space-y-0 md:space-x-5"
    >
      <div
        className="sm:rounded-box w-full md:w-[70%] max-h-auto md:max-h-[26em] h-auto"
        style={{
          background: "url(" + content?.img + ") center/cover",
        }}
      >
        <div className="card rounded-none sm:rounded-box h-full w-full bg-[linear-gradient(0deg,black,#0000008a)] shadow-xl">
          <div dir={"rtl"} className="card-body h-full">
            <div className="flex gap-4 flex-wrap">
              <h1 className="text-2xl m-0 p-0 font-extrabold text-white">
                مشاهدة {h1??content?.name}
              </h1>
              {/* <Link className="btn btn-square btn-xs" href={content?.type?.url.replace(process.env.BASEURL, "/")??"/"}>{content?.type?.name}</Link> */}
            </div>
            <h3 className="card-title text-sm m-0 p-0 font-light text-white">
              شاهد {content?.name} مباشرة أو حمل الانمي كامل برابط واحد.
            </h3>
            <ul className="flex flex-wrap">
              {/* Genre mapping is removed for simplicity */}
            </ul>
            <div className="w-full max-h-[15em] md:max-h-full h-full overflow-auto text-ellipsis">
              <article className="text-white text-large">
                <p className="text-white font-lg font-semibold">
                  {content?.story}
                </p>
                <p className="text-white text-sm">
                  شاهد جميع الحلقات مترجمة وبجودة عالية بدون تقطيع, أيضا بامكانك
                  تحميل الانمي كاملا برابط واحد مباشر. شاهد أو حمل الانميالان
                  مباشرة
                </p>
              </article>
              <article className="text-white text-large">
                <header>
                  <h5 className="text-white text-lg font-bold">
                    {content?.name}
                  </h5>
                </header>
                <p className="text-white">{/**/}</p>
              </article>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-full">
                {
                  content?.items?.map((item, i)=>(
                    <span key={i} className="badge m-1 badge-primary badge-sm">{item}</span>
                  ))
                }
                {/* <Link href={content?.season?.url.replace(process.env.BASEURL, "/")}><span className="badge m-1 badge-secondary badge-sm">{content?.season?.name}</span></Link> */}
                {/* <span className="badge badge-accent m-1 badge-sm">source : {content?.source}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-box w-auto md:w-[30%] h-auto max-h-auto md:max-h-[26em] mx-4 sm:mx-0"
        style={{ background: "url(" + content?.img + ") center/cover" }}
      >
        <div className="card rounded-box w-full h-full bg-[linear-gradient(0deg,#000000bd,#0000007d)] shadow-xl">
          <div className="card-body h-full w-full overflow-auto overflow-x-hidden">
            <h6 className="text-white text-sm">{content?.name} حالة المسلسل</h6>
            <ul
              dir={"rtl"}
              className="overflow-auto overflow-x-hidden w-full h-full"
            >
              {
                content?.items?.map((item, i)=>(
                  <>
                    <hr />
                    <li key={i} className="flex flex-wrap space-x-2 justify-between text-white item-center content-center align-center">
                      {item}
                    </li>
                  </>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {/* <ImageClient data={{
          "name":content.title,
          "image":images.large
        }}/> */}
    </div>
  );
}
