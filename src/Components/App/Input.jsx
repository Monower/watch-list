import Button from "./Button";
export default function Input() {
    const button_prop = {
        icon: 'fa-solid fa-plus',
        color: '#1d4ed8',
        background: 'slate-500'
    };



    return <>
        <div className="flex justify-center items-center space-x-1">
            <input className="border-2 border-blue-700 h-10 px-2" type="text" placeholder="Enter name of the movie/series..." />
            <Button data={ button_prop } />
        </div>
    </>;
}