import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BabyShowerConejita from "./BabyShowerConejita";
import BabyShowerGoku from "./BabyShowerGoku";
import BabyShowerPanda from "./BabyShowerPanda";
import BabyShowerOsito from "./BabyShowerOsito";
import BabyShowerOsita from "./BabyShowerOsita";
import MatrimonioUno from "./MatrimonioUno";
import PrimerAnitoMoana from "./PrimerAnitoMoana";

function Home() {
  useEffect(() => {
    document.title = "Nuestras Invitaciones";
  }, []);

  return (
    <div className="flex min-h-[100vh] w-full items-center justify-center p-4 text-center font-sans bg-gray-50">
      <div className="w-full max-w-lg rounded-3xl bg-white/80 p-6 shadow-2xl shadow-pink-100 backdrop-blur-sm md:p-8">
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-pink-100">
            <img
              src="https://rumba77.com/img/logo.svg"
              alt="Rumba77"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Nuestras Invitaciones
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/baby-shower-conejita"
            className="flex items-center gap-3 bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-pink-600 shadow-sm">
              1
            </span>
            Invitación de Conejita
          </Link>

          <Link
            to="/baby-shower-panda"
            className="flex items-center gap-3 bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-green-700 shadow-sm">
              2
            </span>
            Invitación de Panda
          </Link>

          <Link
            to="/primer-anito-moana"
            className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-blue-700 shadow-sm">
              3
            </span>
            Primer Añito Moana
          </Link>

          <Link
            to="/baby-shower-goku"
            className="flex items-center gap-3 bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-sky-700 shadow-sm">
              4
            </span>
            Baby Shower Goku
          </Link>

          <Link
            to="/baby-shower-osito"
            className="flex items-center gap-3 bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-cyan-700 shadow-sm">
              5
            </span>
            Baby Shower Osito
          </Link>

          <Link
            to="/baby-shower-osita"
            className="flex items-center gap-3 bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-pink-700 shadow-sm">
              6
            </span>
            Baby Shower Osita
          </Link>

          <Link
            to="/matrimonio-uno"
            className="flex items-center gap-3 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-amber-700 shadow-sm">
              7
            </span>
            Matrimonio Uno
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baby-shower-conejita" element={<BabyShowerConejita />} />
        <Route path="/baby-shower-panda" element={<BabyShowerPanda />} />
        <Route path="/primer-anito-moana" element={<PrimerAnitoMoana />} />
        <Route path="/baby-shower-goku" element={<BabyShowerGoku />} />
        <Route path="/baby-shower-osito" element={<BabyShowerOsito />} />
        <Route path="/baby-shower-osita" element={<BabyShowerOsita />} />
        <Route path="/matrimonio-uno" element={<MatrimonioUno />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
