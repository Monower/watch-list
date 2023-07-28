import Input from "./Components/App/Input";
import List from "./Components/App/List";
import Watchedlist from "./Components/App/Watchedlist";
export default function App() {
  const to_watch_list = {
    heading: 'To Watch',
    count: 10,
    icon: 'fa-solid fa-check',
    name: [
      {
        title: 'Hell Boy 1'
      },
      {
        title: 'Hell Boy 2'
      },
      {
        title: 'Hell Boy 3'
      },
      {
        title: 'Hell Boy 4'
      },
      {
        title: 'Hell Boy 5'
      },
    ]
  };


  const watched_list = {
    heading: 'Watched',
    count: 10,
    icon: 'fa-solid fa-trash',
    name: [
      {
        title: 'Hell Boy 1'
      },
      {
        title: 'Hell Boy 2'
      },
      {
        title: 'Hell Boy 3'
      },
      {
        title: 'Hell Boy 4'
      },
      {
        title: 'Hell Boy 5'
      },
    ]
  };

  return <>
    {/* <h3 className="text-[48px] font-bold text-center font-mono underline">Watch List</h3> */}
{/*     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter> */}


    <section className="container mx-auto px-4 lg:px-8">
      <div className="flex justify-center items-center h-24 lg:h-52">
        <h3 className="text-[1.5em] lg:text-[4em] font-bold">Welcome to watch-list.</h3>
      </div>
      <div className="flex justify-center items-center pb-12">
         <Input />
      </div>
      <div className="flex justify-around">
        <List data={to_watch_list} />
        {/* <List data={watched_list} /> */}
        {/* <Watchedlist data={watched_list } /> */}
      </div>
    </section>
  </>;
}