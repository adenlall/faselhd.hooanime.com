import Socials from "@/components/UI/Socials";
import Title from "@/components/UI/Title";
import Image from "next/image";

export const metadata = {
  title: "About - " + process.env.NAME,
  description: "نرحب بك في Hooanime, الوجهة النهائية لعشاق الأنمي! نحن ملتزمون بتوفير تجربة بث سلسة وغامرة لمسلسلات الأنيمي، مجانًا تمامًا وبدون أي إعلانات مزعجة.",
  openGraph: {
    title: "About - " + process.env.NAME,
    description: "نرحب بك في Hooanime, الوجهة النهائية لعشاق الأنمي! نحن ملتزمون بتوفير تجربة بث سلسة وغامرة لمسلسلات الأنيمي، مجانًا تمامًا وبدون أي إعلانات مزعجة.",
    url: process.env.URL + "about",
    siteName: process.env.NAME,
    locale: 'ar_AR',
    type: 'article',
  },
  alternates: {
    canonical: process.env.URL+"about",
    languages: {
      'en-US': 'https://mad-anime.rf.gd/',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: "About - " + process.env.NAME,
    description: "نرحب بك في Hooanime, الوجهة النهائية لعشاق الأنمي! نحن ملتزمون بتوفير تجربة بث سلسة وغامرة لمسلسلات الأنيمي، مجانًا تمامًا وبدون أي إعلانات مزعجة.",
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
          <Title text={"من نحن"} />
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
            <div class="text-lg leading-relaxed">
              <p>
                نرحب بك في <span class="font-bold">{process.env.NAME}</span>,
                الوجهة النهائية لعشاق الأنمي! نحن ملتزمون بتوفير تجربة بث سلسة وغامرة لمسلسلات الأنيمي، مجانًا تمامًا وبدون أي إعلانات مزعجة. التزامنا هو تقديم محتوى عالي الجودة لمجتمع المشاهدين المتحمسين.
              </p>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">ما الدي يميزنا:</h2>

              <ul class="pl-6">
                <li class="mb-2">
                  {" "}
                  <span class="font-bold">تجربة نظيفة خالية من الإعلانات:</span> نحن نفهم كيف يمكن أن تكون الإعلانات متطفلة. ولهذا السبب جعلنا من مهمتنا تقديم بيئة بث خالية تمامًا من الإعلانات. قل وداعًا للمقاطعات واستمتع بالأنمي المفضل لديك دون أي تشتيت.
                </li>
                <li class="mb-2">
                  {" "}
                  <span class="font-bold">جودة عالية للبث:</span> في {" "}
                  <span class="font-bold">{process.env.NAME}</span>
                  ، نعتني بالجودة. كل سلسلة أنمي على منصتنا متاحة بتقنية عالية الدقة، مما يضمن عدم فقدان أي تفاصيل من مسلسلاتك المفضلة. اغمر نفسك في صور بديعة وصوت واضح كالبلورة.
                </li>
                <li class="mb-2">
                  {" "}
                  <span class="font-bold">مكتبة واسعة النطاق:</span> استكشف مجموعة واسعة من سلاسل الأنمي التي تمتد عبر مختلف الأنواع. سواء كنت من عشاق الحركة، الرومانسية، الخيال، أو حتى قطع الحياة، لدينا شيء لكل عاشق للأنمي. تتوسع مكتبتنا باستمرار لنقدم لك أحدث وأعظم العناوين.
                </li>

              </ul>
            </div>
            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">رسالتنا:</h2>

              <p class="text-lg leading-relaxed">
                نحن نؤمن أن الأنمي يجب أن يكون متاحًا للجميع، وأن التكلفة لا يجب أن تكون عائقًا أمام الاستمتاع بالسرد الرائع والرسوم المتحركة الجذابة. يشعر فريقنا بالشغف تجاه إنشاء مجتمع حيث يمكن لعشاق الأنمي أن يتجمعوا معًا، ويشاركوا حبهم لفن الأنمي، ويكتشفوا سلاسل جديدة ومثيرة.
              </p>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">كيف يعمل:</h2>

              <p class="text-lg leading-relaxed">
                البداية سهلة. ما عليك سوى التنقل إلى صفحتنا الرئيسية، استعراض فهرسنا الواسع، وبدء بث سلاسل الأنمي المفضلة لديك فورًا. لا تحتاج إلى تسجيل، لا رسوم خفية - مجرد تمتع بالأنمي الخالص.
              </p>
            </div>
            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4">تواصل معنا:</h2>

              <p class="text-lg leading-relaxed">
                هل لديك اقتراحات، ملاحظات، أو ترغب في التواصل مع عشاق الأنمي الآخرين؟ تابعنا على {" "} <Socials /> للحصول على
                آخر التحديثات، الإعلانات، ومناقشات المجتمع.
              </p>
            </div>

            <p class="mt-8 text-center">
              شكرًا لاختيارك {" "}
              <span class="font-bold">{process.env.NAME}</span> كمنصتك الرئيسية للبث المجاني، خالي من الإعلانات، وبجودة عالية للأنمي. انضم إلينا في هذه المغامرة الأنمي، ولنبدأ في مشاهدة متسلسلة!
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
