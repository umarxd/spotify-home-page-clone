import MainNav from "./components/MainNav";
import MusicPlayer from "./components/MusicPlayer";
import PageContent from "./components/PageContent";
import Playlists from "./components/Playlists";

function App() {
  return (
    <>
      <div className="text-white flex p-2 h-[91vh]">
        <div className=" w-[440px] flex flex-col">
          <MainNav />
          <Playlists />
        </div>
        <PageContent />
      </div>
      <MusicPlayer />
    </>
  );
}

export default App;
