import { load } from 'cheerio'


export const revalidate = 10000;
//export const dynamic = 'force-dynamic'


export async function GET(){

        const response = await fetch(process.env.BASEURL, { next: { revalidate: Number(process.env.REVALIDATE) } });
        const data = await response.text();

        const $ = load(data);
        const $data         = {};

        $data["type"] = "home";


        $data["last_movies"] = [];
        $("div.container:nth-child(12) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div").each(function (i, el) {
                let data = {
                    name   : $(el).find(".h5").text(),
                    url    : $(el).find("a").attr("href"),
                    img    : $(el).find("img").attr("data-src"),
                    genres : []
                }
                $(el).find(".blockMovieMeta > span").each(function (j, li) {
                    data.genres.push($(li).text().replace(/\s/g, ""));
                })
                $data["last_movies"].push(data);
        });

        $data["last_asia"] = [];
        $("div.col-xl-8:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div").each(function (i, el) {
                let data = {
                    name   : $(el).find(".h5").text(),
                    url    : $(el).find("a").attr("href"),
                    img    : $(el).find("img").attr("data-src"),
                    genres : []
                }
                $(el).find(".blockMovieMeta > span").each(function (j, li) {
                    data.genres.push($(li).text().replace(/\s/g, ""));
                })
                $data["last_asia"].push(data);
        });


        $data["last_eps"] = [];
        $("div.col-xl-4:nth-child(1) > section:nth-child(1) > div").each(function (i, el) {
            if (i!==0) {
                let data = {
                    name     : $(el).find(".h4").text(),
                    url      : $(el).find("a").attr("href"),
                    img      : $(el).find("img").attr("data-src"),
                    status   : $(el).find(".epStatus").text(),
                    epscount : $(el).find(".epHomeContent > div > span:nth-child(2)").text(),
                }
                $data["last_eps"].push(data);
            }
        });

        $data["last_anime"] = [];
        $("div.col-xl-4:nth-child(4) > section:nth-child(1) > div").each(function (i, el) {
            if (i!==0) {
                let data = {
                    name     : $(el).find(".h4").text(),
                    url      : $(el).find("a").attr("href"),
                    img      : $(el).find("img").attr("data-src"),
                    status   : $(el).find(".epHomeContent > div > span:nth-child(2)").text(),
                    epscount : $(el).find(".epHomeContent > div > span.sCat").text(),
                }
                $data["last_anime"].push(data);
            }
        });

        $data["top_m"] = [];
        $(".mb-5 > div:nth-child(2) > div").each(function (i, el) {
            let data = {
                name   : $(el).find(".h5").text(),
                url    : $(el).find("a").attr("href"),
                img    : $(el).find("img").attr("data-src"),
                genres : []
            }
            $(el).find(".blockMovieMeta > span").each(function (j, li) {
                data.genres.push($(li).text().replace(/\s/g, ""));
            })
            $data["top_m"].push(data);
        });


        $data["featured"] = [];
        $(".swiper-wrapper > div").each(function (i, el) {
            let data = {
                name   : $(el).find(".h1").text(),
                url    : $(el).find("a").attr("href").replace(process.env.BASEURL, "/"),
                img    : $(el).find("img").attr("src"),
                genres : []
            }
            $(el).find(".slideCats > span").each(function (j, li) {
                data.genres.push($(li).text());
            })
            $data["featured"].push(data);
        });


        return Response.json({
            "data" : $data,
            "status": 200
        });

}