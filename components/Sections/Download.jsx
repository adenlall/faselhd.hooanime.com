export default function Download({data}) {
    return(
        <div className="my-6 container w-auto m-auto">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" /> 
                <h5 className="collapse-title text-base-content text-xl font-medium">
                   {"تحميل الحلقة"}
                </h5>
                <ul className="collapse-content w-full flex flex-content"> 
                    {
                        data?.map((item, i)=>(
                            <a target="_blank" rel="noopener noreferrer" href={item.url} className="btn btn-primary btn-outline m-1">{item.name}</a>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
