

export default function List(prop) {

    let item = JSON.parse(localStorage.getItem('watchList'))




    return <>
        <div className="flex flex-col border border-slate-950 p-3">
            <div className="flex items-center space-x-3">
                <h3 className="font-bold font-mono text-[36px]">{ prop.data.heading }</h3>
                <p className="bg-black text-white px-2 py-1 rounded-full">{item?.length }</p>
            </div>
            <ul className="flex flex-col space-y-3 pl-1">
                {
/*                     prop.data.name.map((item, index) => (
                        <li className="flex items-center justify-between space-x-3 text-[18px] font-semibold font-mono group hover:bg-black hover:text-white cursor-pointer"><div>{index + 1}. {item.title}</div>  <div className="bg-black text-white px-1 hover:bg-blue-500" ><i class="fa-solid fa-check"></i></div></li>
                    )) */

                    // <li className="flex items-center justify-between space-x-3 text-[18px] font-semibold font-mono group hover:bg-black hover:text-white cursor-pointer"><div>{index + 1}. {item.title}</div>  <div className="bg-black text-white px-1 hover:bg-blue-500" ><i class="fa-solid fa-check"></i></div></li>
                     
                    item?.map((item, index) => (
                        <li className="flex items-center justify-between space-x-3 text-[18px] font-semibold font-mono group hover:bg-black hover:text-white cursor-pointer"><div>{index + 1}. {item.title}</div>  <div className="bg-black text-white px-1 hover:bg-blue-500" ><i class="fa-solid fa-check"></i></div></li>
                    ))
                
                }
            </ul>
        </div>
    </>;
}