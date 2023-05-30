import Main from "./layouts/Main";
import Index from "./pages/Index";

function App() {

  return (   
    <>
      <div>
        <div className=" bg-[url('../../src/assets/branden-sk.jpg')] bg-cover bg-repeat-x  bg-center absolute h-screen w-full top-0 left-0 xl:bg-[url('../../src/assets/branden-desktop.png')] ">
        <Main>
          <Index />
        </Main>
        </div>
      </div>
    </>
  );
}

export default App;
