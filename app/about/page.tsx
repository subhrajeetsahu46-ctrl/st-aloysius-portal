export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Our Identity */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-red-900">About St. Aloysius</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            St. Aloysius Anglo Indian High School is the oldest Roman Catholic institution in Visakhapatnam. 
            Established in 1847 and recognized by the Government in 1860, the institution was placed under 
            the patronage of St. Aloysius in 1864. Today, it is managed by the Missionaries of St. Francis 
            de Sales (M.S.F.S.) and caters to the educational needs of all sections of society.
          </p>
        </section>

        {/* New Detailed Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-4">Admissions & Fees</h2>
            <p className="text-gray-700">
              Information regarding admission procedures, academic criteria, and fee structures is 
              available to ensure transparency for all parents.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-red-900 mb-4">Rules & Conduct</h2>
            <p className="text-gray-700">
              We uphold the values of 'Virtute et Labore' (Virtue and Labour). All students are expected 
              to adhere to the school's code of conduct to maintain a disciplined and nurturing environment.
            </p>
          </section>
        </div>

        {/* Syllabus Section */}
        <section className="bg-red-900 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Academic Curriculum</h2>
          <p className="text-red-100 mb-6">
            Our curriculum focuses on academic excellence, character formation, and the all-round development 
            of every student, preparing them for the challenges of competitive times.
          </p>
          <a href="/academics" className="bg-gold text-red-900 px-6 py-2 rounded font-bold hover:bg-yellow-400">
            View Full Syllabus
          </a>
        </section>

      </div>
    </main>
  );
}