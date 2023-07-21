import Input from "./Components/App/Input";

export default function App() {
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


    <section>
      <div className="flex justify-center items-center h-24 lg:h-52">
        <h3 className="text-[1.5em] lg:text-[4em] font-bold">Welcome to watch-list.</h3>
      </div>
      <div className="flex justify-center items-center">
         <Input />
      </div>
    </section>
  </>;
}