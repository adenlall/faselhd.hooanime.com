import { Noto_Kufi_Arabic } from "next/font/google";
import MyNavbar from "@/components/Sections/MyNavbar";
import MyFooter from "@/components/Sections/MyFooter";
import ProgressBar from "@/components/Pages/Prog";
import Analytics from "@/components/Pages/Analytics";
import "./globals.css";

const font = Noto_Kufi_Arabic({ subsets:["arabic"], weight:'500'});


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={font.className+" bg-base-300 text-base-content"}>
        {
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <Analytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ):null
        }
        <ProgressBar/>
        <MyNavbar/>
        {children}
        <MyFooter/>
      </body>
    </html>
  );
}

export const metadata = {
  title: process.env.NAME+" - مشاهدة وتحميل الانمي المترجم اون لاين",
  description: ' انمي '+process.env.NAME+' لمشاهدة جميع الانميات اون لاين وافلام الانمي مترجم جودة عالية اون لاين.',
  openGraph: {
    title: process.env.NAME+" - مشاهدة وتحميل الانمي المترجم اون لاين",
    description: ' انمي '+process.env.NAME+' لمشاهدة جميع الانميات اون لاين وافلام الانمي مترجم جودة عالية اون لاين.',
    url: process.env.URL,
    siteName: process.env.NAME,
    locale: 'en_US',
    type: 'website',
  },
  icons:{
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        url: '/favicon-194x194.png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        url: '/safari-pinned-tab.svg',
      }
    ]
  },
 robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		}
	},
  twitter: {
    card: 'summary_large_image',
    title: process.env.NAME+" - مشاهدة وتحميل الانمي المترجم اون لاين",
    description: ' انمي '+process.env.NAME+' لمشاهدة جميع الانميات اون لاين وافلام الانمي مترجم جودة عالية اون لاين.',
    creator: '@hooanime',
    images: {
      url: "/meta/header-background.png",
      alt: "مشاهدة وتحميل الانمي المترجم اون لاين",
    }
  },
  alternates: {
    canonical: process.env.URL,
    languages: {
      'en-US': 'https://mad-anime.rf.gd/',
    }
  },
  verification: {
    yandex: '8bb5ddbac4194c90'
  },
  other: {
    "msvalidate.01": '3D3242077B02F31DC15CC554963081BA',
    "google-site-verification": "S9rljOpja7JtGKUqbJX_mNfnfPdFzH57WIS2DzW1bIU"
  }
  
};

