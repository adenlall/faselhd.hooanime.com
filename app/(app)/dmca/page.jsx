import Socials from "@/components/UI/Socials";
import Title from "@/components/UI/Title";
import Image from "next/image";


export const metadata = {
  title: "DMCA - " + process.env.NAME,
  description: "جميع البيانات والمحتوى المتاح على Hooanime هي ملك لأصحاب المحتوى، الرخصاء، أو أصحاب الحقوق الآخرين. تعمل الموقع كمستعرض ويب ولا يستضيف أو يخزن أي مواد محمية بحقوق الطبع والنشر على خوادمه.",
  openGraph: {
    title: "DMCA - " + process.env.NAME,
    description: "جميع البيانات والمحتوى المتاح على Hooanime هي ملك لأصحاب المحتوى، الرخصاء، أو أصحاب الحقوق الآخرين. تعمل الموقع كمستعرض ويب ولا يستضيف أو يخزن أي مواد محمية بحقوق الطبع والنشر على خوادمه.",
    url: process.env.URL + "DMCA",
    siteName: process.env.NAME,
    locale: 'ar_AR',
    type: 'article',
  },
  
  alternates: {
    canonical: process.env.URL+"dmca",
    languages: {
      'en-US': 'https://mad-anime.rf.gd/',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: "DMCA - " + process.env.NAME,
    description: "جميع البيانات والمحتوى المتاح على Hooanime هي ملك لأصحاب المحتوى، الرخصاء، أو أصحاب الحقوق الآخرين. تعمل الموقع كمستعرض ويب ولا يستضيف أو يخزن أي مواد محمية بحقوق الطبع والنشر على خوادمه.",
    creator: '@hooanime',
    images: {
      url: "/meta/header-background.png",
      alt: "مشاهدة وتحميل الانمي المترجم اون لاين",
    }
  },
};


export default async function Page() {
  const res = await fetch(process.env.URL + "api/jump");
  const data = await res.json(); return (
    <div className="bg-base-100">
      <div className="py-8 mb-[9em]">
        <h1 className="lg:text-[5em] text-[2.3em] font-[900] m-auto w-fit">
          <Title text={"DMCA"} />
        </h1>
      </div>
      <div className="mt-8 py-4 pb-12 bg-base-200">
        {
          data?.data ? (
            <Image
              className="m-auto mb-[2em] mt-[-8em]"
              src={data?.data[Math.floor(Math.random() * data?.data.length)]}
              alt="Shonen Jump Cover"
              width={300}
              height={500}
            />
          ) : ""
        }
        <div className="mx-4">
          <div className="container m-auto 4 w-fit text-center">
            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">ملكية البيانات:</h2>

              <p class="text-lg leading-relaxed">
                جميع البيانات والمحتوى المتاح على{" "}
                <span class="font-bold">{process.env.NAME}</span> هي ملك لأصحاب المحتوى، الرخصاء، أو أصحاب الحقوق الآخرين. تعمل الموقع كمستعرض ويب ولا يستضيف أو يخزن أي مواد محمية بحقوق الطبع والنشر على خوادمه.
              </p>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">تنويه بشأن متصفح الويب:</h2>

              <p class="text-lg leading-relaxed">
                يرجى أن تكونوا على علم بأن{" "}
                <span class="font-bold">{process.env.NAME}</span> يعمل كمتصفح ويب يفهرس ويربط بالمحتوى المتاح على مواقع أخرى. ليس لدينا السيطرة على المحتوى المستضاف على المواقع الخارجية ولا نتبنى أو نتحمل أي مسؤولية بشأن قانونية أو دقة أو ملاءمة المحتوى.
              </p>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">
                لا مسؤولية عن انتهاك حقوق الطبع والنشر:
              </h2>

              <p class="text-lg leading-relaxed">
                بينما نبذل جهودًا لضمان الامتثال لقوانين حقوق الطبع والنشر،{" "}
                <span class="font-bold">{process.env.NAME}</span> لا تتحمل مسؤولية عن أي انتهاك لحقوق الطبع والنشر قد يحدث عبر أفعال مواقع الويب الخارجية المرتبطة من منصتنا. نشجع أصحاب حقوق الطبع والنشر على معالجة أي مخاوف مباشرة مع موقع الويب المستضيف.
              </p>
            </div>

            <p class="mt-8 text-center">
              لأية استفسارات أو مخاوف تتعلق بقانون حقوق الطبع والنشر، يرجى الاتصال بنا على{" "}
              <i><b><code>adenxx@skiff.com</code></b></i> أو <Socials />.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}
