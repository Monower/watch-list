export default function Watchedlist() {
    return <>
        <div className="flex flex-col">
            <div className="flex items-center">
                <h3>{prop.data.heading}</h3>
                <p>{prop.data.count}</p>
            </div>
            <ul className="flex flex-col space-y-3">
                {
                    prop.data.name.map((item, index) => (
                        <li className="flex items-center justify-between space-x-3"><div>{index + 1}. {item.title}</div>  </li>
                    ))
                }
            </ul>
        </div>
    </>;
}