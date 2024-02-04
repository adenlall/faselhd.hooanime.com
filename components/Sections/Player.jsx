"use client";

import Link from "next/link";
import { useState } from "react";
import EpisodeCardTracker from "../Client/EpisodeTracker";

export default function Player({ stream }) {
  const [source, setSource] = useState(stream[0].url);
  const hundclick = (i) => {
    document.querySelectorAll("#strams > button").forEach((ele) => {
      ele.classList.remove("active");
    });
    document.querySelectorAll("#strams > button")[i].classList.add("active");
  };
  return (
    <div className="container m-auto">
      <div className="navbar w-full bg-base-300">
        <div role="tablist" id="strams" className="tabs tabs-boxed w-full">
          {stream?.map((item, i) => (
            <button
              onClick={() => {
                setSource(item.url);
              }}
              role="tab"
              key={i}
              className={
                "tab overflow-ellipsis overflow-hidden whitespace-nowrap " +
                (source === item.url ? "tab-active" : "")
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <a
        target="_blank" rel="noopener noreferrer"
        href={source}
        id="vid-container"
        className="bg-primary w-full h-[35em] rounded-none sm:rounded-box flex items-center justify-center"
      >
        <div className="flex items-center justify-center flex-col">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-accent w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 13V9m0 0h-4m4 0l-6 6m9.5-5l2.577-1.546c.793-.476 1.19-.714 1.516-.683a1 1 0 01.713.403c.194.264.194.727.194 1.652v4.348c0 .925 0 1.388-.194 1.652a1 1 0 01-.713.404c-.326.03-.723-.208-1.516-.684L16 14m-9.8 4h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C16 16.48 16 15.92 16 14.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 6 13.92 6 12.8 6H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 7.52 3 8.08 3 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 18 5.08 18 6.2 18z"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4 className="text-extrabold text-accent">Strat Watching Now in new tab</h4>
          <button className="btn btn-accent mt-3">Open</button>
        </div>
      </a>

    </div>
  );
}
