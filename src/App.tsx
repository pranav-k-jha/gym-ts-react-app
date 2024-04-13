import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="flex items-center justify-center w-full h-full">
        <div className="mt-4 w-5/6 flex-center bg-gradient-to-r from-blue-500 to-purple-800 rounded-lg p-4 animate-pulse">
          <p className="text-center text-white">
            👨‍💻 Currently under construction... 🚧 <br />
            Just me tinkering with the code. Stay tuned for updates! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
