export default function Button(prop) {
    return <>
        <button className={`bg-blue-700 text-slate-50 px-2 py-1 rounded-full`}><i className={`${prop.data.icon}`}></i></button>
    </>;
}