import './App.css';
import {useState} from "react";
import Raid from "./pages/Raid";
import MythicPlus from "./pages/MythicPlus";

function App() {

    const [instanceType, setInstanceType] = useState("mm+");

    return (
    <div className="App flex flex-col">
        <header className="mt-5">
        <h1 className="text-3xl font-bold">Warcraft Stats</h1>
        </header>

        <main className="my-10">
            <nav className="w-full flex justify-center mb-10">
                <ul className="w-50 bg-amber-300 rounded-md flex justify-center border-4 border-amber-300">
                    <li
                        style={instanceType === 'raid' ? {background: '#fff' } : {}}
                        onClick={() => setInstanceType("raid")}
                        className="cursor-pointer px-5 text-2xl border-amber-200 border-r-2"
                    >
                        Raid
                    </li>
                    <li
                        style={instanceType === 'mm+' ? {background: '#fff' } : {}}
                        onClick={() => setInstanceType("mm+")}
                        className="cursor-pointer px-5 text-2xl"
                    >
                        Mythic +
                    </li>
                </ul>
            </nav>

            {instanceType === "raid" && <Raid />}
            {instanceType === "mm+" && <MythicPlus />}

        </main>

        <footer className="font-light mt-auto py-3">
          <i>
              Open source <a className="underline" href="https://github.com/GraphtyLove/warcraft_stats_frontend">code</a>
              &nbsp; developed with ❤️ by <a className="underline" href="https://github.com/GraphtyLove">GraphtyLove</a>
          </i>
        </footer>

    </div>
  );
}

export default App;
