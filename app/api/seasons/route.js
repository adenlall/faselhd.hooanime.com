import { load } from 'cheerio'

export const revalidate = 10000;

export async function GET(request){

    const q = request.nextUrl.searchParams.get("p");
        if (!q) {
            return Response.json({"status":500, "details":"no valid query"}, {
                status:500
            })
        }
        let url = process.env.BASEURL+"?p="+q;
        const response = await fetch(url, { next: { revalidate: Number(process.env.REVALIDATE) } });
        if (response.status !== 200) {
            return Response.json({"status":response.status}, {
                status:response.status
            })
        }
        const data = await response.text();

        const $ = load(data);
        let $data     = {};

        $data["type"] = "episode";
        $data["parent"] = {
          seasons: [],
          name: $(".h1").text(),
          story: $(".singleDesc").text(),
          items: [],
        };
      
        $("#seasonList > div").each(function (i, el) {
          $data["parent"].seasons.push({
            name: $(el).find(".title").text(),
            url: "/?p=" + $(el).find(".seasonDiv").attr("onclick").split("/?p=")[1],
            img: $(el).find("img").attr("data-src"),
          });
        });
      
        $("#singleList > div > span").each(function (i, el) {
          $data["parent"].items.push($(el).text());
        });
      
        $data["name"] = $(".h3").text();
      
        $data["episodes"] = [];
        $(".epAll > *").each(function (i, el) {
          
          $data["episodes"].push({
              name:$(el).text().replace(/\s/g, ""),
              url:$(el).attr("href")
          });
        })
      
        $data["stream"] = [];
        $(".tabs-ul > li").each(function (i, el) {
          $data["stream"].push({
              name:$(el).find("a").text(),
              url:$(el).attr("onclick").split("'")[1]
          })
        })
      
        $data["download"] = [];
        $(".downloadLinks > a").each(function (i, el) {
              $data["download"].push({
                  name:$(el).text(),
                  url:$(el).attr("href")
              })
        })
      
        return Response.json({
          data: $data,
          uri: url,
          status: 200,
        });

}