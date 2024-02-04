import { load } from "cheerio";

export async function GET(req, { params }) {
  const url = process.env.BASEURL + encodeURI(params.path[0]??"/") +"/"+ encodeURI(params.path[1]??"/");
  const response = await fetch(url, { next: { revalidate: 3400 } });
  if (response.status !== 200) {
    return Response.json({
      status: response.status,
      details: {
        url: url,
      },
    });
  }
  const data = await response.text();
  const $ = load(data);

  let $data = {};

  $data["type"] = "episode";
  $data["parent"] = {
    seasons: [],
    name: $("head > title:nth-child(8)").text().replace(process.env.WIT, process.env.NAME),
    img:$(".posterImg > img").attr("src"),
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
  $(".epAll > a").each(function (i, el) {
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
