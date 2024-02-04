import { load } from "cheerio";

export async function GET(req, { params }) {
  const url =
    process.env.BASEURL +
    params.path[0] +
    "/" +
    (params.path[1] ? params.path[1] : "") +
    "/" +
    (params.path[2] ? params.path[2] : "") +
    "/" +
    (params.path[3] ? params.path[3] : "");
  const response = await fetch(url, { next: { revalidate: 5000 } });
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

  $data["meta"] = {
    title:
      $("head > title:nth-child(2)")
        .text()
        .replace("TukTukCinema", "")
        .replace("توك توك سينما", "") +
      " " +
      process.env.NAME,
  };
  if (
    $("body").attr("class").match("post-type-archive") ||
    $("body").attr("class").match("page-template")
  ) {
    $data["type"] = "archive";
    $data["q"] = params.path[0]?(params.path[1]??""+" "+params.path[0]??""):params.path;
    $data["list"] = [];
    $data["pagination"] = $(".pagination").html();

    if ($("#postList > div").text()) {
      $("#postList > div").each(function (i, el) {
        let data = {
          name: $(el).find(".h1").text(),
          url: $(el).find("a").attr("href"),
          img: $(el).find("img").attr("data-src"),
          genres: [
            $(el).find(".posTop span:nth-child(1)").text(),
            $(el).find(".posTop span:nth-child(2)").text(),
            $(el).find(".posTop span:nth-child(3)").text(),
          ],
        };
        $data["list"].push(data);
      });
    } else if ($(".viewsOrderSlider").text()) {
      $(".viewsOrderSlider > div").each(function (i, el) {
        let data = {
          name: $(el).find(".h1").text(),
          url: $(el).find("a").attr("href"),
          img: $(el).find("img").attr("data-src"),
          genres: [
            $(el).find(".posTop span:nth-child(1)").text(),
            $(el).find(".posTop span:nth-child(2)").text(),
            $(el).find(".posTop span:nth-child(3)").text(),
          ],
        };
        $data["list"].push(data);
      });
    }
  }
  return Response.json({
    data: $data,
    uri: url,
    status: 200,
  });
}
