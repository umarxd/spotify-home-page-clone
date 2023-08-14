import MainNav from "./components/MainNav";
import Playlists from "./components/Playlists";

function App() {
  return (
    <>
      <div className="text-white w-96 p-2 flex flex-col h-screen">
        <MainNav />
        <Playlists />
      </div>
    </>
  );
}

export default App;
