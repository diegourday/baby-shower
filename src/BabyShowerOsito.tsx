import { useEffect, useState } from "react";

const EVENT_DATE = Date.now() + 30 * 24 * 60 * 60 * 1000;

const floatingDecorations = [
  {
    src: "/osito/babero.svg",
    alt: "Babero",
    className:
      "bottom-2 right-0 w-12 md:bottom-4 md:-right-6 md:w-16 lg:bottom-6 lg:-right-8 lg:w-18",
    delay: "0s",
  },
  {
    src: "/osito/chupon.svg",
    alt: "Chupon",
    className:
      "right-2 top-2 w-[2.75rem] md:right-0 md:top-4 md:w-[3.5rem] lg:right-2 lg:top-6 lg:w-[3.75rem]",
    delay: "1.2s",
  },
  {
    src: "/osito/sonaja.svg",
    alt: "Sonaja",
    className:
      "-bottom-1 left-0 w-11 md:-bottom-2 md:left-4 md:w-16 lg:-bottom-4 lg:left-6 lg:w-18",
    delay: "0.6s",
  },
  {
    src: "/osito/globo.svg",
    alt: "Globo",
    className:
      "-left-2 top-2 w-[3.25rem] md:left-2 md:top-0 md:w-[4.25rem] lg:left-4 lg:-top-2 lg:w-[4.5rem]",
    delay: "1.8s",
  },
];

export default function BabyShowerOsito() {
  useEffect(() => {
    document.title = "Baby Shower - Osito";
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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/osito/bg.svg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(239,249,255,0.52)_42%,rgba(217,240,252,0.68)_100%)]" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-white/35 blur-3xl" />

      <div className="relative z-10 flex min-h-[100vh] w-full flex-col items-center justify-center px-4 py-8 text-center md:px-8 lg:flex-row lg:gap-16 lg:px-12">
        <div className="relative w-80 h-80 md:w-[520px] md:h-[520px] flex-shrink-0 overflow-visible animate-fade-in-up">
          <div className="absolute inset-0 z-20 pointer-events-none">
            {floatingDecorations.map((item) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                aria-hidden="true"
                className={`absolute object-contain drop-shadow-[0_10px_20px_rgba(59,130,246,0.16)] animate-soft-orbit ${item.className}`}
                style={{ animationDelay: item.delay }}
              />
            ))}
          </div>

          <img
            src="/osito/main.svg"
            alt="Osito"
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_18px_35px_rgba(59,130,246,0.18)]"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <div className="mb-2 animate-fade-in-up delay-100">
            <h1
              className="font-poppins font-semibold text-[2.2rem] md:text-6xl text-[#55aee3] tracking-tight drop-shadow-sm"
              style={{ fontFamily: '"Fredoka", sans-serif' }}
            >
              Mi Baby Shower
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 animate-fade-in-up delay-200 mt-2 md:mt-4">
            <p className="text-[#314c66] font-sans font-normal text-[0.98rem] md:text-[1.15rem] tracking-wide">
              Te invitamos a celebrar con nosotros
            </p>
            <p className="text-[#314c66] font-sans font-normal text-[0.98rem] md:text-[1.15rem] tracking-wide">
              la llegada de
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-2 mt-1 animate-fade-in-up delay-300 md:mt-4">
            <h2
              className="font-poppins font-semibold text-[3.1rem] md:text-7xl text-[#e9bc97] leading-tight text-center tracking-tight"
              style={{ fontFamily: '"Fredoka", sans-serif' }}
            >
              Ethan Mateo
            </h2>
          </div>

          <p className="text-[#5d7891] mt-2 mb-4 md:mt-6 md:mb-4 text-[1.1rem] md:text-xl font-semibold animate-fade-in-up delay-400">
            Faltan
          </p>

          <div className="bg-[#7cc9f1] rounded-xl shadow-[0_4px_18px_rgba(96,165,250,0.28)] flex divide-x divide-white/75 p-2 mb-6 animate-fade-in-up delay-500 w-fit border border-white/70">
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