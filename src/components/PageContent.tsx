function PageContent() {
  return (
    <div className="bg-[#121212] ml-2 p-4 rounded-md w-full">
      <div className="flex gap-2 items-center ">
        <svg
          className="brightness-50"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
        <div className="flex gap-2 ml-auto items-center text-sm font-bold bg-[#00000098] py-2 px-4 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
          <div>Install App</div>
        </div>
        <div className="bg-[#00000098] p-2 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </div>
      </div>

      <div className="my-5">
        <h3 className="text-3xl font-bold">Good evening</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-md font-bold flex items-center rounded-md bg-[#ffffff1e]">
          <div className="w-20 h-20 mr-3 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="">My Generation: "10s </div>
            </div>
          </div>
        </div>
        <div className="text-md font-bold flex items-center rounded-md bg-[#ffffff1e]">
          <div className="w-20 h-20 mr-3 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="">This is Drake</div>
            </div>
          </div>
        </div>
        <div className="text-md font-bold flex items-center rounded-md bg-[#ffffff1e]">
          <div className="w-20 h-20 mr-3 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="">Liked Songs</div>
            </div>
          </div>
        </div>
        <div className="text-md font-bold flex items-center rounded-md bg-[#ffffff1e]">
          <div className="w-20 h-20 mr-3 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="">This is Megadeth</div>
            </div>
          </div>
        </div>
        <div className="text-md font-bold flex items-center rounded-md bg-[#ffffff1e]">
          <div className="w-20 h-20 mr-3 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="">This is Green Day</div>
            </div>
          </div>
        </div>
        <div className="text-md font-bold flex items-center rounded-md bg-[#ffffff1e]">
          <div className="w-20 h-20 mr-3 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="">This is The Cranberries</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex items-center font-bold ">
        <h3 className="text-2xl ">Made For You</h3>
        <h2 className="text-sm brightness-75 ml-auto">Show all</h2>
      </div>

      <div className="flex gap-3 justify-between">
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 1</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 2</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 3</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 4</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 5</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 6</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Daily Mix 7</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Discover Weekly</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 flex items-center font-bold ">
        <h3 className="text-2xl ">More of what you like</h3>
        <h2 className="text-sm brightness-75 ml-auto">Show all</h2>
      </div>

      <div className="flex gap-3 justify-between">
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">#TBT 2022</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">slowed and reverbed</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">big on the internet</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">gloomcore</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">Indie Gaming</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">end credits</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">summer songs</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#151515] p-4 rounded-md">
          <div className="w-36 h-36 bg-gray-700 rounded-md"></div>
          <div>
            <div className="flex items-center">
              <div className="text-md mt-2 font-bold">notion vibes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
