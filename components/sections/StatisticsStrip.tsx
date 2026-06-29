export function StatisticsStrip() {
  const stats = [
    { value: "1847", label: "Year Founded" },
    { value: "177+", label: "Years of Excellence" },
    { value: "100%", label: "Pass Rate" },
    { value: "50+", label: "Dedicated Faculty" },
  ]

  return (
    <section className="bg-maroon py-12 border-y-[6px] border-y-gold">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x border-gold/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center space-y-2 md:border-gold/20 md:border-l first:border-l-0">
              <span className="text-4xl md:text-5xl font-display text-gold drop-shadow-md">
                {stat.value}
              </span>
              <span className="text-[11px] md:text-xs font-body text-parchment uppercase tracking-[0.15em] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}