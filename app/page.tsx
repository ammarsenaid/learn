function DashboardMockup() {
  const activeCerts = [
    ["Taxi & Mietwagen", "85%", "green"],
    ["§34a Bewachung", "62%", "purple"],
    ["Güterkraftverkehr", "40%", "gold"],
  ] as const;

  const bars = [38, 52, 45, 66, 54, 78, 92] as const;

  return (
    <div className="relative w-full overflow-hidden rounded-[30px] border border-sky-400/40 bg-[#06172c]/95 p-3 shadow-[0_0_0_1px_rgba(56,189,248,0.20),0_0_70px_rgba(56,189,248,0.28)] sm:p-4">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-12 left-14 h-28 w-72 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative rounded-[22px] border border-white/10 bg-[#07172a] p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-yellow-400 text-xs font-black text-[#081526]">
              FP
            </span>
            <div>
              <p className="text-sm font-black text-white">FachkundePilot</p>
              <p className="text-xs text-slate-500">Lernübersicht</p>
            </div>
          </div>

          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">
            Lernplan aktiv
          </span>
        </div>

        <div className="mb-5">
          <p className="text-xl font-black tracking-[-0.04em] text-white">
            Guten Abend, Ahmet
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            Prüfung in 14 Tagen · Heute: 24 Karten fällig
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#0a1d35] p-4">
            <p className="text-sm font-bold text-slate-400">Prüfungsreife</p>
            <p className="mt-2 text-5xl font-black tracking-[-0.07em] text-white">
              78%
            </p>
            <div className="mt-3">
              <Progress value="78%" />
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Nächstes Ziel: Kostenrechnung
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0a1d35] p-4">
            <p className="text-sm font-bold text-slate-300">Lernzeit heute</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-4xl font-black tracking-[-0.07em] text-white">
                42m
              </p>
              <div className="flex h-12 flex-1 items-end gap-1.5">
                {bars.map((h) => (
                  <span
                    key={h}
                    className="w-full rounded-t bg-gradient-to-t from-sky-600 to-sky-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">Diese Woche: 4h 20m</p>
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_180px]">
          <div className="rounded-2xl border border-white/10 bg-[#0a1d35] p-4">
            <p className="mb-3 text-sm font-black text-white">Aktive Zertifikate</p>

            <div className="space-y-2.5">
              {activeCerts.map(([name, progress, tone]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_86px] items-center gap-3 rounded-xl bg-[#061326] px-3 py-2.5"
                >
                  <p className="truncate text-sm font-bold text-slate-200">{name}</p>
                  <Progress value={progress} color={tone} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-300">
              Heute empfohlen
            </p>
            <p className="mt-3 text-3xl font-black tracking-[-0.06em] text-white">
              20 Min.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Lernkarten Recht & Kostenrechnung
            </p>
            <a
              href="/dashboard"
              className="mt-4 block rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 px-4 py-3 text-center text-sm font-black text-white"
            >
              Weiterlernen
            </a>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-[#061326] p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-300">
            Sprachbrücke
          </p>
          <p className="mt-2 text-sm font-bold leading-6 text-white">
            Betriebssitz → المكان الرسمي المسجل للشركة
          </p>
        </div>
      </div>
    </div>
  );
}

function SideStats() {
  const items = [
    ["globe", "Mehrsprachig", "DE · AR · EN · TR"],
    ["target", "Prüfungsnah", "Simulationen"],
    ["analytics", "Smart Review", "Schwächen erkennen"],
    ["route", "12+", "Zertifikate geplant"],
  ] as const;

  return (
    <div className="mt-8 grid max-w-[720px] gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map(([icon, value, text]) => (
        <div
          key={value}
          className="rounded-2xl border border-white/10 bg-[#071a30]/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <IconBox icon={icon as IconName} />
          <p className="mt-3 text-sm font-black text-white">{value}</p>
          <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">{text}</p>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[#03111f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_30%,rgba(34,139,230,0.26),transparent_34%),radial-gradient(circle_at_14%_22%,rgba(246,200,79,0.10),transparent_28%),linear-gradient(180deg,#03111f_0%,#05172a_66%,#03111f_100%)]" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(86,161,220,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(86,161,220,.12)_1px,transparent_1px)] [background-size:58px_58px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#03111f]" />

      <div className="relative z-10">
        <Header />

        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 pb-16 pt-12 lg:grid-cols-[minmax(0,560px)_minmax(0,560px)] lg:items-center lg:justify-between lg:gap-16 lg:pb-20 lg:pt-16 xl:grid-cols-[minmax(0,600px)_minmax(0,560px)] xl:gap-20">
          <div className="min-w-0">
            <p className="mb-5 inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-xs font-black text-sky-300 shadow-[0_0_26px_rgba(56,189,248,0.18)]">
              Für deutsche Sach- und Fachkundeprüfungen
            </p>

            <h1 className="max-w-[620px] text-[42px] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-[56px] md:text-[64px] lg:text-[66px] xl:text-[72px]">
              <span className="block">Deutsche</span>
              <span className="block whitespace-nowrap text-[0.82em] tracking-[-0.075em] sm:text-[0.9em]">
                Fachkundeprüfungen
              </span>
              <span className="block">gezielt bestehen.</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base font-medium leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Lerne deutsche Prüfungsbegriffe, verstehe sie in deiner Sprache und trainiere mit
              Lernkarten, Simulationen und klaren Lernpfaden.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <GoldButton href="/zertifikate">Zertifikat auswählen</GoldButton>
              <DarkButton href="/dashboard">Demo ansehen</DarkButton>
            </div>

            <div className="mt-8 grid max-w-[560px] gap-3 sm:grid-cols-3">
              {[
                ["check", "An offiziellen Themen orientiert"],
                ["cards", "Lernkarten & Wiederholung"],
                ["shield", "Private Lernplattform"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-[#071a30]/75 p-4 text-sm font-bold leading-5 text-slate-200"
                >
                  <SvgIcon name={icon as IconName} className="mb-2 text-yellow-300" />
                  {text}
                </div>
              ))}
            </div>

            <SideStats />
          </div>

          <div className="min-w-0 w-full max-w-[560px] justify-self-center lg:justify-self-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
