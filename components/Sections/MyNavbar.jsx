"use client";

import Link from "next/link";
import Socials from "../UI/Socials";
import Search from "./Search";
import Title from "../UI/Title";
import ThemeSwitcher from "../UI/ThemeSwitcher";

export default function MyNavbar() {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 z-[12] xwid"
            >
              <Navigation />
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Title text="Hooanime" />
          </Link>
          <Search />
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <Navigation />
          </ul>
        </div>
        <div className="navbar-end hidden lg:inline-flex">
          <ThemeSwitcher />
          <Socials />
        </div>
      </nav>
    </>
  );
}

const Navigation = () => (
  <>
    <li>
      <Link className="text-base-content" href={"/"}>
        الصفحة الرئيسية
      </Link>
    </li>
    <li>
      <details>
        <summary className="text-base-content">الأفلام</summary>
        <ul className="p-2 z-10 bg-base-200">
          <li class="text-base-content">
            <Link href="/all-movies">all</Link>
          </li>
          <li class="text-base-content">
            <Link href="/movies">افلام اجنبي</Link>
          </li>
          <li class="text-base-content">
            <Link href="/dubbed-movies">افلام مدبلجة</Link>
          </li>
          <li class="text-base-content">
            <Link href="/hindi">افلام هندي</Link>
          </li>
          <li class="text-base-content">
            <Link href="/asian-movies">افلام اسيوي</Link>
          </li>
          <li class="text-base-content">
            <Link href="/anime-movies">افلام انمي</Link>
          </li>
          <li class="text-base-content">
            <Link href="/movies_top_votes">الاعلي تصويتا</Link>
          </li>
          <li class="text-base-content">
            <Link href="/movies_top_views">الاعلي مشاهدة</Link>
          </li>
          <li class="text-base-content">
            <Link href="/movies_top_imdb">الافلام الاعلي تقييما IMDB</Link>
          </li>
          <li class="text-base-content">
            <Link href="/movies_collections">سلاسل الأفلام</Link>
          </li>
          <li class="text-base-content">
            <Link href="/movies_coming_soon">افلام تصدر قريبا</Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary className="text-base-content">المسلسلات</summary>
        <ul className="p-2 z-10 bg-base-200">
          <li class="text-base-content">
            <Link href="/series">جميع المسلسلات</Link>
          </li>
          <li class="text-base-content">
            <Link href="/recent_series">المضاف حديثا</Link>
          </li>
          <li class="text-base-content">
            <Link href="/episodes">احدث الحلقات</Link>
          </li>
          <li class="text-base-content">
            <Link href="/series_top_imdb">الاعلي تقييما IMDB</Link>
          </li>
          <li class="text-base-content">
            <Link href="/short_series">المسلسلات القصيرة</Link>
          </li>
          <li class="text-base-content">
            <Link href="/series_top_views">الاعلي مشاهدة</Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary className="text-base-content">من نحن</summary>
        <ul className="p-2 z-10 bg-base-200">
          <li>
            <Link className="text-base-content" href={"/about"}>
              حول
            </Link>
          </li>
          <li>
            <Link className="text-base-content" href={"/contact"}>
              تواصل
            </Link>
          </li>
          <li>
            <Link className="text-base-content" href={"/dmca"}>
              DMCA
            </Link>
          </li>
        </ul>
      </details>
    </li>
  </>
);
