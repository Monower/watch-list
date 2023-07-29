import Button from "./WatchListButton";
import { useRef } from "react";

export default function Input() {
    const input = useRef(null);
    let name = [];
    let item = {
        title: null
    };

    function HandleSubmit(e) {
        e.preventDefault();
        // console.log(input.current.value);
        if (input.current.value === '') {
            // to clear the storage
            // localStorage.clear();

            return alert('Input feild cant be empty.');
        } else {
            name = JSON.parse(localStorage.getItem('watchList'))
            name.push({ title: input.current.value });
            window.localStorage.setItem('watchList', JSON.stringify(name));
            input.current.value = '';
            let item = JSON.parse(localStorage.getItem('watchList'))
            // console.log(item);
        }
        

    }


    return <>
        <div className="flex justify-center items-center">
            <form onSubmit={(e) => { HandleSubmit(e) }}>
                <input ref={input} className="border border-slate-950 h-10 px-2 focus:outline-none" type="text" placeholder="Enter name of the movie/series..." autoFocus />
                <button type="submit" className="bg-slate-950 hover:bg-blue-500 text-slate-50 h-10 w-10"><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    </>;
}