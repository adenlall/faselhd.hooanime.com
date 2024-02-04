import Socials from "@/components/UI/Socials";
import Title from "@/components/UI/Title";
import Image from "next/image";



export const metadata = {
  title: "Contact - " + process.env.NAME,
  description: "لا تتردد في الاتصال بنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي لأي استفسارات، ملاحظات، أو مخاوف.",
  openGraph: {
    title: "Contact - " + process.env.NAME,
    description: "لا تتردد في الاتصال بنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي لأي استفسارات، ملاحظات، أو مخاوف.",
    url: process.env.URL + "Contact",
    siteName: process.env.NAME,
    locale: 'ar_AR',
    type: 'article',
  },
  alternates: {
    canonical: process.env.URL+"contact",
    languages: {
      'en-US': 'https://mad-anime.rf.gd/',
    }
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Contact - " + process.env.NAME,
    description: "لا تتردد في الاتصال بنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي لأي استفسارات، ملاحظات، أو مخاوف.",
    creator: '@hooanime',
    images: {
      url: "/meta/header-background.png",
      alt: "مشاهدة وتحميل الانمي المترجم اون لاين",
    }
  },
};

export default async function Page() {
  const res = await fetch(process.env.URL + "api/jump");
  const data = await res.json();
  return (
    <div className="bg-base-100">
      <div className="py-8 mb-[9em]">
        <h1 className="lg:text-[5em] text-[2.3em] font-[900] m-auto w-fit">
          <Title text={"تواصل معنا"} />
        </h1>
      </div>
      <div className="mt-8 py-4 pb-12 bg-base-200">
        {
          data?.data ? (
            <Image
              className="m-auto mb-[3em] mt-[-8em]"
              src={data?.data[Math.floor(Math.random() * data?.data.length)]}
              alt="Shonen Jump Cover"
              width={300}
              height={500}
            />
          ) : ""
        }
        <div className="mx-4">
          <div className="container m-auto 4 w-fit text-center">
            <div className="text-lg leading-relaxed">
              <p>
                نقدر اهتمامك في التواصل معنا. لا تتردد في الاتصال بنا باستخدام المعلومات أدناه:
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">معلومات الاتصال:</h2>

              <ul className="pl-6">
                <li className="mb-2">
                  {" "}
                  <span className="font-bold">البريد الإلكتروني:</span> <i><b><code>adenlall@skiff.com</code></b></i>
                </li>
                <li className="mb-2">
                  {" "}
                  <span className="font-bold">وسائل التواصل الاجتماعي:</span> <Socials />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">كيفية الوصول إلينا:</h2>

              <p className="text-lg leading-relaxed">
                لا تتردد في الاتصال بنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي لأي استفسارات، ملاحظات، أو مخاوف.
              </p>
            </div>

            <p className="mt-8 text-center">
              نقدر ملاحظاتك وسنقوم ببذل قصارى جهدنا للرد على استفساراتك في الوقت المناسب. شكرًا لاختيارك {" "}
              <span className="font-bold">{process.env.NAME}</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
