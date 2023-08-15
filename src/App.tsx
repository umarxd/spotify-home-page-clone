import MainNav from "./components/MainNav";
import MusicPlayer from "./components/MusicPlayer";
import Playlists from "./components/Playlists";

function App() {
  return (
    <>
      <div className="text-white w-96 p-2 flex flex-col h-[90vh]">
        <MainNav />
        <Playlists />
      </div>
      <MusicPlayer />
    </>
  );
}

export default App;
