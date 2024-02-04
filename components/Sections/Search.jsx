'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
    const [show, setShow] = useState(false);
    return(
        <>
            <div className="md:block hidden">
                <Conmponent/>
            </div>
            <div className="md:hidden block absolute left-[5px]">
                <button onClick={()=>{setShow(!show)}} className="btn btn-sm btm-primary btn-square">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="strock-secondary-content w-[1.5em]"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-secondary-content"
                        d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2z"
                    />
                </svg>
                </button>
            </div>

            <div className="md:hidden block">
            {
                show ? (
                    <div className="absolute right-0 top-[1.2em] w-[70%]">
                        <Conmponent/>
                    </div>
                ):""
            }
            </div>
        </>
    );
}

const Conmponent = () => {

    const [result, setResult] = useState([]);
    const [query, setQuery] = useState("");
    const [runing, setRuning] = useState(false);
    
    useEffect(() => {
        setRuning(true);
        const delayDebounceFn = setTimeout(() => {
            submit();
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [query]);

    useEffect(() => {
        setRuning(false);
    }, [result])
    
    
    const submit = () => {
        if (query.length) {
            fetch("/api/search?q="+query, { next: { revalidate: Number(process.env.REVALIDATE) } })
            .then((res) => res.json())
            .then((res) => {
              setResult(res.data.list);
            })
        }
    };
  
    return (
        <label dir="ltr" className="searchbox relative mx-3 w-full">
            <div className="dropdown" >
                <div className="join">
                    <input onChange={(e)=>{setQuery(e.target.value)}} className="input input-sm input-bordered input-secondary text-base-content w-full join-item md:w-[9em] w-23 lg:w-[15em]" tabIndex={0}name="search"type="search"placeholder="Gint..."/>
                    <button className="btn btn-sm btn-secondary join-item px-2">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="strock-secondary-content w-[1.5em]"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="fill-secondary-content"
                            d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2z"
                        />
                    </svg>
                    </button>
                </div>
                {
                    query.length?(
                        <ul tabIndex={0} className="dropdown-content z-[11] menu p-2 mt-2 shadow bg-base-100 rounded-box w-full max-h-[80vh] overflow-auto flex-nowrap">
                            {
                                !runing&&result?.map((item, i)=>(
                                    <>
                                    {
                                        i<20?(
                                                <Link href={item.url}>
                                            <li role="option" key={i} className="selected">
                                                <div className="py-2 text-sm font-normal flex flex-col items-start bg-base-200 w-full mb-1">
                                                    <span className="overflow-ellipsis overflow-hidden w-full whitespace-nowrap text-base-content">
                                                        {item.name}
                                                    </span>
                                                    <div className="">
                                                        <span className="badge badge-accent mr-1">{item.genres[0]}</span>
                                                        <span className="badge badge-accent">{item.genres[1]}</span>
                                                    </div>
                                                </div>
                                            </li>
                                                </Link>
                                        ):""
                                    }
                                    </>
                                ))
                            }

                            {
                                !result.length && !runing ? (

                                    <li role="option" className="selected">
                                        <div className="py-2 text-sm font-normal flex flex-col items-start bg-error w-full mb-1">
                                            <span className="overflow-ellipsis text-error-content overflow-hidden w-full whitespace-nowrap">
                                                {"لا توجد نتائج"}
                                            </span>
                                        </div>
                                    </li>
                                ):""
                            }
                            {
                                runing ? (
                                    
                                    <li role="option" className="selected">
                                        <div className="py-2 text-sm font-normal flex flex-col items-start bg-info w-full mb-1">
                                            <span className="overflow-ellipsis text-info-content overflow-hidden w-full whitespace-nowrap">
                                                جاري البحث...
                                            </span>
                                        </div>
                                    </li>
                                ):""
                            }
                        </ul>
                    ):""
                }
            </div>
        </label>
    )
}
