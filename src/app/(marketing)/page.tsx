export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero section placeholder */}
      <section className="bg-brand-blue text-brand-warm-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          UK Property Compliance, Made Simple
        </h1>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Gas safety certificates, EPCs, EICRs and more — booked online,
          delivered fast by qualified engineers.
        </p>
        <a
          href="/book"
          className="inline-block bg-brand-green text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-green-dark transition-colors"
        >
          Book a Certificate
        </a>
      </section>
    </div>
  );
}
