import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BabyShowerConejita from "./BabyShowerConejita";
import BabyShowerGoku from "./BabyShowerGoku";
import BabyShowerPanda from "./BabyShowerPanda";
import PrimerAnitoMoana from "./PrimerAnitoMoana";

function Home() {
  useEffect(() => {
    document.title = "Nuestras Invitaciones";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] w-full p-4 text-center font-sans bg-gray-50">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
        Nuestras Invitaciones
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          to="/baby-shower-conejita"
          className="bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
        >
          Invitación de Conejita
        </Link>

        <Link
          to="/baby-shower-panda"
          className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
        >
          Invitación de Panda
        </Link>

        <Link
          to="/baby-shower-goku"
          className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
        >
          Baby Shower Goku
        </Link>

        <Link
          to="/primer-anito-moana"
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors duration-300"
        >
          Primer Añito Moana
        </Link>
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
        <Route path="/baby-shower-goku" element={<BabyShowerGoku />} />
        <Route path="/baby-shower-panda" element={<BabyShowerPanda />} />
        <Route path="/primer-anito-moana" element={<PrimerAnitoMoana />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
