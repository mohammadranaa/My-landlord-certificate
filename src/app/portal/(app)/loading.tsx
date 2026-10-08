/** Skeleton shown while any portal page loads its data. */
export default function PortalLoading() {
  const block = "animate-pulse bg-[#ecebe5]";
  return (
    <div aria-busy="true" aria-label="Loading">
      <div className={`${block} h-3 w-24`} />
      <div className={`${block} mt-3 h-10 w-80 max-w-full`} />
      <div className={`${block} mt-3 h-4 w-[28rem] max-w-full`} />
      <div className="mt-7 grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="border border-[#dcdfd8] bg-white p-5">
            <div className={`${block} h-3 w-28`} />
            <div className={`${block} mt-4 h-10 w-16`} />
            <div className={`${block} mt-3 h-3 w-32`} />
          </div>
        ))}
      </div>
      <div className="mt-7 border border-[#dcdfd8] bg-white">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 border-b border-[#f0eee7] px-5 py-4 last:border-b-0">
            <div className={`${block} h-7 w-11`} />
            <div className={`${block} h-4 flex-1`} />
            <div className={`${block} h-4 w-24`} />
          </div>
        ))}
      </div>
    </div>
  );
}
