import Link from "next/link"

export default async function Navigate({ navigation, episode }){
    return(

        <div dir={"ltr"} className="container w-auto mx-4 sm:m-auto mt-0 space-y-4">
            <div className="w-full space-x-2 flex">
                {
                    navigation?.previous?(
                        <Link className="w-1/4" href={navigation?.previous.replace(process.env.BASEURL,'/')}><button className='btn btn-secondary btn-outline w-full'>الحلقة السابقة</button></Link>
                    ):null
                }
                {
                    navigation?.anime?(
                        <Link className="w-full" href={navigation?.anime?.url.replace(process.env.BASEURL,'/')}><button className='btn btn-primary btn-outline w-full'>صفحة الانمي</button></Link>
                    ):null
                }
                {
                    navigation?.next?(
                        <Link className="w-1/4" href={navigation?.next.replace(process.env.BASEURL,'/')}><button className='btn  btn-secondary btn-outline w-full'>الحلقة التالية</button></Link>
                    ):null
                }
            </div>
            <h2 className="text-2xl font-extrabold text-base-content">{episode??""}</h2>
        </div>

    );
}