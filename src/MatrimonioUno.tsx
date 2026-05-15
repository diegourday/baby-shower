import { useEffect, useState } from "react";

const EVENT_DATE = Date.now() + 30 * 24 * 60 * 60 * 1000;

export default function MatrimonioUno() {
  useEffect(() => {
    document.title = "Matrimonio Uno - Gabriel y Dana";
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
    <div className="relative isolate flex min-h-[100vh] w-full overflow-hidden bg-[#f8f9f3] font-sans text-[#40514a]">
      <div className="absolute inset-0 bg-[#f8f9f3]" />
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/matrimonio-uno/bg-mancha.svg"
          alt="Manchas decorativas"
          aria-hidden="true"
          className="w-[76vw] max-w-md select-none opacity-75"
        />
      </div>
      <div className="absolute left-[-1.5rem] top-[-1rem] z-0 pointer-events-none md:left-[-2.5rem] md:top-[-1.5rem]">
        <img
          src="/matrimonio-uno/bg-mancha.svg"
          alt="Mancha decorativa superior izquierda"
          aria-hidden="true"
          className="w-[58vw] max-w-sm select-none opacity-70 md:w-[34vw] md:max-w-sm"
        />
      </div>
      <img
        src="/matrimonio-uno/flores-izq.svg"
        alt="Flores izquierda"
        aria-hidden="true"
        className="pointer-events-none absolute left-[-0.2rem] top-[45%] z-0 w-24 -translate-y-1/2 sm:w-28 md:left-0 md:top-1/2 md:w-40 lg:w-60"
      />
      <img
        src="/matrimonio-uno/flores-der-arriba.svg"
        alt="Flores derecha superior"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-0.2rem] top-0 z-0 w-55 md:right-0 md:w-64 lg:w-90"
      />
      <img
        src="/matrimonio-uno/flores-der-abajo.svg"
        alt="Flores derecha inferior"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-0.2rem] z-0 w-36 sm:w-40 md:right-0 md:w-55 lg:w-80"
      />
      <div className="absolute left-[-4rem] top-10 h-56 w-56 rounded-full bg-white/35 blur-3xl md:left-[-5rem] md:h-72 md:w-72" />
      <div className="absolute bottom-[-5rem] right-[-3rem] h-64 w-64 rounded-full bg-[#84a494]/10 blur-3xl md:bottom-[-6rem] md:right-[-4rem] md:h-80 md:w-80" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(120,150,140,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10 flex min-h-[100vh] w-full flex-col items-center justify-center gap-8 px-4 py-8 text-center lg:flex-row lg:gap-16 lg:px-10">
        <div className="relative flex h-55 w-55 flex-shrink-0 items-center justify-center md:h-[420px] md:w-[420px] animate-fade-in-up lg:translate-x-20 xl:translate-x-28">
          <img
            src="/matrimonio-uno/main.png"
            alt="Gabriel y Dana"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center justify-center">
          <div className="animate-fade-in-up delay-100">
            <p
              className="text-sm font-bold uppercase tracking-[0.15em] text-[#6f8b81] md:text-base"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Nuestra Boda
            </p>
            <h1
              className="mt-3 text-[3rem] leading-none text-[#5b7468] md:text-7xl"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              Gabriel y Dana
            </h1>
          </div>

          <div className="mt-6 animate-fade-in-up delay-300">
            <p className="text-base font-semibold uppercase text-[#6f8b81] md:text-lg">
              Faltan
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-[#7f9b92]/90 bg-[#5d786c] shadow-[0_18px_40px_rgba(95,121,111,0.16)] animate-fade-in-up delay-400">
            <div className="grid grid-cols-4 divide-x divide-white/45">
              <div className="flex w-20 flex-col items-center justify-center bg-[#5d786c] px-3 py-4 md:w-24 md:px-4 md:py-5">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.dias}
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#eef4f2] md:text-[13px]">
                Días
              </span>
              </div>
              <div className="flex w-20 flex-col items-center justify-center bg-[#5d786c] px-3 py-4 md:w-24 md:px-4 md:py-5">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.horas}
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#eef4f2] md:text-[13px]">
                Hr
              </span>
              </div>
              <div className="flex w-20 flex-col items-center justify-center bg-[#5d786c] px-3 py-4 md:w-24 md:px-4 md:py-5">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.minutos}
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#eef4f2] md:text-[13px]">
                Min
              </span>
              </div>
              <div className="flex w-20 flex-col items-center justify-center bg-[#5d786c] px-3 py-4 md:w-24 md:px-4 md:py-5">
              <span className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                {timeLeft.segundos}
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#eef4f2] md:text-[13px]">
                Seg
              </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
