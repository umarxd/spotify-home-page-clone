import MainNav from "./components/MainNav";
import Playlists from "./components/Playlists";

function App() {
  return (
    <>
      <div className="text-[#ffffff] w-1/4 p-2 flex flex-col">
        <MainNav />
        <Playlists />
      </div>
    </>
  );
}

export default App;
