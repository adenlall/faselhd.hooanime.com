import { load } from 'cheerio'


export const revalidate = 10000;
//export const dynamic = 'force-dynamic'


export async function GET(request){

    const q = request.nextUrl.searchParams.get("q");
        if (!q) {
            return Response.json({"status":500, "details":"no valid query"}, {
                status:500
            })
        }
        const response = await fetch(process.env.BASEURL+"?s="+q, { next: { revalidate: Number(process.env.REVALIDATE) } });
        if (response.status !== 200) {
            return Response.json({"status":response.status}, {
                status:response.status
            })
        }
        const data = await response.text();

        const $ = load(data);
        let $data     = {};

        $data["q"]     = $(".h4").text();
        $data["list"]= [];
        $("#postList > div").each(function (i, el) {
            let data = {
                name   : $(el).find(".h1").text(),
                url    : $(el).find("a").attr("href").replace(process.env.BASEURL, "/"),
                img    : $(el).find("img").attr("data-src"),
                genres : [
                    $(el).find(".posTop >span:nth-child(1)").text(),
                    $(el).find(".posTop > span:nth-child(2)").text(),
                ]
            }
            $data["list"].push(data);
        })

        return Response.json({
            "data" : $data,
            "status":200
        });

}