import Script from "next/script"

const Analytics = ({ ga_id }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `
      }}
    ></Script>
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391393567498525"
    ></Script>
  </>
)
export default Analytics