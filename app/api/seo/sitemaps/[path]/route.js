export async function GET(req, { params }) {
    const res = await fetch(process.env.BASEURL+params.path, { next: { revalidate: Number(process.env.SHORT_REVALIDATE) } });
    if (res.status !== 200) {
        return Response.json({"error": res.status}, {status:res.status});
    }
    const xml = await res.text();
    let nxml;
    if (params.path === "sitemap.xml" || "sitemap_index.xml" === params.path) {
      nxml = xml.replace(`<?xml-stylesheet type="text/xsl" href="//witanime.pics/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>`, "").replace(/witanime.pics/g, process.env.SHORTURL+"/api/seo/sitemaps")
    }else{
      nxml = xml.replace(`<?xml-stylesheet type="text/xsl" href="//witanime.pics/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>`, "").replace(/witanime.pics/g, process.env.SHORTURL)
    }

  return new Response(nxml, { headers: { "Content-Type": "text/xml" } });
}