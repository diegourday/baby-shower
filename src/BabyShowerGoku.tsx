import { useState, useEffect } from "react";

const EVENT_DATE = Date.now() + 30 * 24 * 60 * 60 * 1000;

export default function BabyShowerGoku() {
  useEffect(() => {
    document.title = "Baby Shower - Goku";
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    dias: "00",
    horas: "00",
    minutos: "00",
    segundos: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        dias: String(dias).padStart(2, "0"),
        horas: String(horas).padStart(2, "0"),
        minutos: String(minutos).padStart(2, "0"),
        segundos: String(segundos).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-[100vh] w-full overflow-hidden bg-[#eef8ff] font-sans">
      <div className="absolute inset-0 bg-[url('/goku/bg-goku.jpg')] bg-[length:100%_100%] bg-center bg-no-repeat" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-white/45 blur-3xl" />

      <div className="relative z-10 flex min-h-[100vh] w-full flex-col items-center justify-center px-4 py-8 text-center md:px-8 lg:flex-row lg:gap-16 lg:px-12">
        <div className="relative w-80 h-80 md:w-[520px] md:h-[520px] flex-shrink-0 animate-fade-in-up">
          <img
            src="/goku/nube.png"
            alt="Nube flotante"
            className="absolute bottom-0 left-1/2 z-0 w-full -translate-x-1/2 object-contain drop-shadow-[0_20px_35px_rgba(96,165,250,0.25)]"
          />
          <div className="absolute -right-4 top-6 z-20 animate-bounce md:-right-2 md:top-10">
            <img
              src="/goku/esfera.png"
              alt="Esfera del dragón"
              className="h-24 w-24 object-contain drop-shadow-[0_16px_30px_rgba(255,190,0,0.45)] md:h-32 md:w-32"
            />
          </div>
          <img
            src="/goku/main-goku.png"
            alt="Goku"
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_18px_35px_rgba(59,130,246,0.22)]"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <div className="mb-2 animate-fade-in-up delay-100">
            <h1 className="font-poppins font-semibold text-[2.2rem] md:text-6xl text-brand-sky tracking-tight drop-shadow-sm">
              Mi Baby Shower
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 animate-fade-in-up delay-200 mt-2 md:mt-4">
            <p className="text-[#44607a] font-sans font-normal text-sm md:text-xl tracking-wide">
              Te invitamos a celebrar con nosotros
            </p>
            <p className="text-[#44607a] font-sans font-normal text-sm md:text-xl tracking-wide">
              la llegada de
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-2 mt-1 animate-fade-in-up delay-300 md:mt-4">
            <h2
              className="font-poppins text-[3.1rem] md:text-7xl text-[#ff9200] leading-tight text-center tracking-tight"
              style={{
                fontFamily: '"Saiyan-Sans", sans-serif',
                textShadow: "none",
                WebkitTextStroke: "0px transparent",
              }}
            >
              Enzo Matheo
            </h2>
          </div>

          <p className="text-[#5d7891] mt-2 mb-4 md:mt-6 md:mb-4 text-[1.1rem] md:text-xl font-normal animate-fade-in-up delay-400">
            Faltan
          </p>

          <div className="bg-brand-sky rounded-xl shadow-[0_4px_18px_rgba(56,150,231,0.32)] flex divide-x divide-white/75 p-2 mb-6 animate-fade-in-up delay-500 w-fit border border-white/70">
            <div className="flex flex-col items-center justify-center w-20 md:w-24 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.dias}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Días
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-16 md:w-20 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.horas}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Hr
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-16 md:w-20 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.minutos}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Min
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-16 md:w-20 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.segundos}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Seg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}