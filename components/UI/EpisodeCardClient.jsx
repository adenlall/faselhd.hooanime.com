import Link from "next/link"

export default function EpisodeCardClient({ data }){

    return(
        <article className="w-full z-0" dir="ltr">
            <Link href={data?.url??"/"}>
                <div className="w-auto h-[10em] rounded-box" style={{background: "url('"+data.img+"')", backgroundSize:"cover", backgroundPosition:"center"}}>
                        <div style={{"--tw-bg-opacity":0.6}} className={"bg-accent w-full h-full rounded-box p-2 flex flex-col justify-between"}>
                            <span dir="rtl" className={"badge badge-primary inline-text-1"} style={{width: "100%"}}>{data?.name?.split("–")[1]}</span>
                            <div className="flex flex-col">
                                <h2 className={"inline-text-1 text-accent-content overflow-hidden text-md font-bold w-auto"} style={{width: "100%"}}>{data?.name}</h2>
                            </div>
                        </div>
                </div>
            </Link>
        </article>
    )
}