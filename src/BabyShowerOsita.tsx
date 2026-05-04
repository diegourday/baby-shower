import { useEffect, useState } from "react";

const EVENT_DATE = Date.now() + 30 * 24 * 60 * 60 * 1000;

const floatingDecorations = [
  {
    src: "/osita/corazones.svg",
    alt: "Corazones",
    className:
      "left-2 top-24 w-16 md:left-4 md:top-28 md:w-20 lg:left-6 lg:top-40 lg:w-24",
  },
  {
    src: "/osita/nube-1.svg",
    alt: "Nube 1",
    className:
      "right-3 top-2 w-16 md:right-4 md:top-4 md:w-24 lg:right-6 lg:top-6 lg:w-28",
  },
  {
    src: "/osita/nube-2.svg",
    alt: "Nube 2",
    className:
      "-right-14 top-16 w-18 md:-right-16 md:top-20 md:w-28 lg:-right-18 lg:top-24 lg:w-32",
  },
  {
    src: "/osita/biberon.svg",
    alt: "Biberon",
    className:
      "left-5 bottom-4 w-12 md:left-7 md:bottom-6 md:w-16 lg:left-10 lg:bottom-10 lg:w-20",
  },
  {
    src: "/osita/chupon.svg",
    alt: "Chupon",
    className:
      "right-0 top-1/2 w-12 -translate-y-1/2 md:right-2 md:w-16 lg:right-4 lg:w-18",
  },
];

export default function BabyShowerOsita() {
  useEffect(() => {
    document.title = "Baby Shower - Osita";
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
    <div className="relative isolate flex min-h-[100vh] w-full overflow-hidden bg-[#fff1f7] font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('/osita/bg.svg')",
        }}
      />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-pink-200/35 blur-3xl" />
      <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-white/45 blur-3xl" />

      <div className="relative z-10 flex min-h-[100vh] w-full flex-col items-center justify-center px-4 py-8 text-center md:px-8 lg:flex-row lg:gap-16 lg:px-12">
        <div className="relative h-80 w-80 flex-shrink-0 overflow-visible animate-fade-in-up md:h-[520px] md:w-[520px]">
          <div className="absolute inset-0 z-20 pointer-events-none">
            {floatingDecorations.map((item) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                aria-hidden="true"
                className={`absolute object-contain drop-shadow-[0_10px_20px_rgba(236,72,153,0.18)] ${item.className}`}
              />
            ))}
          </div>

          <img
            src="/osita/main.svg"
            alt="Osita"
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_18px_35px_rgba(236,72,153,0.25)]"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center lg:w-auto">
          <div className="mb-2 animate-fade-in-up delay-100">
            <h1
              className="font-poppins text-[2.2rem] font-semibold tracking-tight text-[#ee6ea0] drop-shadow-[0_2px_0_rgba(255,255,255,0.55)] md:text-6xl"
              style={{ fontFamily: '"Fredoka", sans-serif' }}
            >
              Mi Baby Shower
            </h1>
          </div>

          <div className="mt-2 flex flex-col items-center justify-center space-y-1 animate-fade-in-up delay-200 md:mt-4">
            <p className="text-[0.98rem] font-normal tracking-wide text-[#6d4e5d] md:text-[1.15rem]">
              Te invitamos a celebrar con nosotros
            </p>
            <p className="text-[0.98rem] font-normal tracking-wide text-[#6d4e5d] md:text-[1.15rem]">
              la llegada de
            </p>
          </div>

          <div className="mb-2 mt-1 flex items-center justify-center gap-1 animate-fade-in-up delay-300 md:mt-4">
            <h2
              className="text-center text-[3.1rem] font-semibold leading-tight tracking-tight text-[#f07fab] drop-shadow-[0_2px_0_rgba(255,255,255,0.5)] md:text-7xl"
              style={{ fontFamily: '"Fredoka", sans-serif' }}
            >
              Valentina Sofía
            </h2>
          </div>

          <p className="mb-4 mt-2 animate-fade-in-up delay-400 text-[1.1rem] font-semibold text-[#8b5b72] md:mb-4 md:mt-6 md:text-xl">
            Faltan
          </p>

          <div className="mb-6 flex w-fit divide-x divide-white/75 rounded-xl border border-white/70 bg-[#ef85ad] p-2 shadow-[0_4px_18px_rgba(240,137,178,0.38)] animate-fade-in-up delay-500">
            <div className="flex w-20 flex-col items-center justify-center py-1 md:w-24">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.dias}
              </span>
              <span className="mt-0.5 text-[12px] font-medium tracking-wider text-white capitalize md:text-[13px]">
                Días
              </span>
            </div>
            <div className="flex w-16 flex-col items-center justify-center py-1 md:w-20">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.horas}
              </span>
              <span className="mt-0.5 text-[12px] font-medium tracking-wider text-white capitalize md:text-[13px]">
                Hr
              </span>
            </div>
            <div className="flex w-16 flex-col items-center justify-center py-1 md:w-20">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.minutos}
              </span>
              <span className="mt-0.5 text-[12px] font-medium tracking-wider text-white capitalize md:text-[13px]">
                Min
              </span>
            </div>
            <div className="flex w-16 flex-col items-center justify-center py-1 md:w-20">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.segundos}
              </span>
              <span className="mt-0.5 text-[12px] font-medium tracking-wider text-white capitalize md:text-[13px]">
                Seg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}