type propTypes = {
  name: String;
  owner: String;
};

function SinglePlaylist({ name, owner }: propTypes) {
  return (
    <div className="flex items-center mt-4 ">
      <div className="w-12 h-12 mr-3 bg-gray-700 rounded-md"></div>
      <div>
        <div className="text-md font-semibold">{name}</div>
        <div className="flex items-center">
          <div className="text-sm brightness-75">Playlist • {owner}</div>
        </div>
      </div>
    </div>
  );
}

export default SinglePlaylist;
