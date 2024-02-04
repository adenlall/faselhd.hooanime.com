'use client';

import { useEffect } from "react";

export default function ThemeSwitcher() {


		useEffect(() => {
			theme(localStorage.theme ?? "light");
		}, []);

		const theme = (item) => {
				localStorage.theme = item;
				document.querySelector('html').setAttribute('data-theme', item);
		}


  return (
    <div className="">

							<div className="dropdown">
							<label tabIndex={0} className="btn btn-sm btn-primary m-1">Themes</label>
							<ul tabIndex={0} style={{right:'-50%'}} className="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 space-y-2 max-h-[340px] block overflow-y-scroll rounded-box w-52">


								<button onClick={()=>{theme('light')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="light" data-act-className="[&amp;_svg]:visible">
									<div data-theme="light" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">light</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('dark')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="dark" data-act-className="[&amp;_svg]:visible">
									<div data-theme="dark" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">dark</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('cupcake')}} className="outline-base-content overflow-hidden rounded-box text-left [&amp;_svg]:visible w-full" data-set-theme="cupcake" data-act-className="[&amp;_svg]:visible">
									<div data-theme="cupcake" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">cupcake</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('bumblebee')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="bumblebee" data-act-className="[&amp;_svg]:visible">
									<div data-theme="bumblebee" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">bumblebee</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('corporate')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="corporate" data-act-className="[&amp;_svg]:visible">
									<div data-theme="corporate" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">corporate</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('retro')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="retro" data-act-className="[&amp;_svg]:visible">
									<div data-theme="retro" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">retro</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('cyberpunk')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="cyberpunk" data-act-className="[&amp;_svg]:visible">
									<div data-theme="cyberpunk" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">cyberpunk</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('valentine')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="valentine" data-act-className="[&amp;_svg]:visible">
									<div data-theme="valentine" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">valentine</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('halloween')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="halloween" data-act-className="[&amp;_svg]:visible">
									<div data-theme="halloween" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">halloween</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('garden')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="garden" data-act-className="[&amp;_svg]:visible">
									<div data-theme="garden" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">garden</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('forest')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="forest" data-act-className="[&amp;_svg]:visible">
									<div data-theme="forest" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">forest</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('pastel')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="pastel" data-act-className="[&amp;_svg]:visible">
									<div data-theme="pastel" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">pastel</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('wireframe')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="wireframe" data-act-className="[&amp;_svg]:visible">
									<div data-theme="wireframe" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">wireframe</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('black')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="black" data-act-className="[&amp;_svg]:visible">
									<div data-theme="black" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">black</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('luxury')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="luxury" data-act-className="[&amp;_svg]:visible">
									<div data-theme="luxury" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">luxury</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('dracula')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="dracula" data-act-className="[&amp;_svg]:visible">
									<div data-theme="dracula" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">dracula</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('cmyk')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="cmyk" data-act-className="[&amp;_svg]:visible">
									<div data-theme="cmyk" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">cmyk</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('autumn')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="autumn" data-act-className="[&amp;_svg]:visible">
									<div data-theme="autumn" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">autumn</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('business')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="business" data-act-className="[&amp;_svg]:visible">
									<div data-theme="business" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">business</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('acid')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="acid" data-act-className="[&amp;_svg]:visible">
									<div data-theme="acid" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">acid</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('lemonade')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="lemonade" data-act-className="[&amp;_svg]:visible">
									<div data-theme="lemonade" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">lemonade</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
								<button onClick={()=>{theme('night')}} className="outline-base-content overflow-hidden rounded-box text-left w-full" data-set-theme="night" data-act-className="[&amp;_svg]:visible">
									<div data-theme="night" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="invisible h-3 w-3 shrink-0">
													<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
												</svg>
												<div className="flex-grow text-sm">night</div>
												<div className="flex h-full flex-shrink-0 flex-wrap gap-1" data-svelte-h="svelte-izuv7l">
													<div className="bg-primary w-2 rounded"></div>
													<div className="bg-secondary w-2 rounded"></div>
													<div className="bg-accent w-2 rounded"></div>
													<div className="bg-neutral w-2 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</button>
							</ul>
						</div>
    </div>
  );
}
