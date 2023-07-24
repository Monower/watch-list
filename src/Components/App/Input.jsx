import Button from "./WatchListButton";
export default function Input() {
    const button_prop = {
        icon: 'fa-solid fa-plus',
        color: '#1d4ed8',
        background: 'slate-500'
    };



    return <>
        <div className="flex justify-center items-center">
            <input className="border border-slate-950 h-10 px-2 focus:outline-none" type="text" placeholder="Enter name of the movie/series..." autoFocus />
            <button className="bg-slate-950 text-slate-50 h-10 w-10"><i className="fa-solid fa-plus"></i></button>
        </div>
    </>;
}