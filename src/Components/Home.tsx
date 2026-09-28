export default function Home() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100vh-73px)] snap-start snap-always items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.035em] text-[#f4f2f0] sm:text-7xl lg:text-8xl">
          Built in Austin.
          <span className="mt-2 block text-[#b33a00] sm:mt-3">
            Digging toward the future.
          </span>
        </h1>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-[#c4bfbb] sm:mt-12 sm:text-xl sm:leading-9">
          Texas Boring is a student-led engineering team at The University of Texas at Austin working to design and build its first tunnel boring machine for The Boring Company&apos;s Not-a-Boring Competition.
        </p>
      </div>
    </section>
  )
}
