import Image from "next/image";
import Link from "next/link";
import Title from "../UI/Title";

export default function NotFoundChan() {
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-base text-center px-4 py-8">
                <h1 className="md:text-5xl lg:text-[4em] text-3xl font-[900]"><Title text={"444-chan"} /></h1>
                <div className="mt-4 lg:text-2xl md:text-xl text-lg font-semibold text-primary">الصفحة غير موجودة</div>
                <div className="mt-2 lg:text-lg text-sm text-primary">
                    Oops! 404-chan says there's nothing to see here!.
                </div>
                <div className="mt-8">
                    <Image
                        alt="Anime character"
                        className="w-64 h-64 mx-auto object-cover rounded-full"
                        priority={false}
                        height="400"
                        src="https://media1.tenor.com/m/1fW0Go5bsHgAAAAC/yui-hirasawa-kon.gif"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                </div>
                <div className="mt-8">
                    <Link
                        className="btn btn-primary"
                        href="/"
                    >
                    العودة للصفحة الرئيسية
                    </Link>
                </div>
            </div>
        </>
    );
}