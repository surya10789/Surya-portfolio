import { Button } from '@/components/ui/button';
import profilePhoto from '../Surya 2.jpeg';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[rgb(var(--background))] text-foreground">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10">
        <nav className="relative z-10 mx-auto flex flex-col gap-5 rounded-full px-8 py-6 md:flex-row md:items-center md:justify-between liquid-glass max-w-7xl">
          <a
            href="#home"
            className="text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Surya V M<sup className="text-xs">®</sup>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#home" className="text-sm text-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
            <Button className="text-sm hover:scale-[1.03]">Begin Journey</Button>
          </div>
        </nav>

        <section id="home" className="relative z-10 grid min-h-[calc(100vh-156px)] gap-16 px-6 pt-32 pb-40 py-[90px] text-center lg:grid-cols-[1.2fr_0.8fr] lg:text-left">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <h1
              className="max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground animate-fade-rise sm:text-7xl md:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where <em className="not-italic text-muted-foreground">dreams</em> rise
              <br className="hidden sm:inline" />
              <em className="not-italic text-muted-foreground">through the silence.</em>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground mt-8 sm:text-lg animate-fade-rise-delay">
              I build clean portfolio experiences and practical machine learning applications with a strong visual style and attention to clarity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl">
              <span className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-muted-foreground">
                Email: vmsurya2007@gmail.com
              </span>
              <span className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-muted-foreground">
                Location: Erode, Tamil Nadu
              </span>
            </div>

            <Button className="mt-12 px-14 py-5 text-base hover:scale-[1.03] animate-fade-rise-delay-2">
              Begin Journey
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl transition-transform duration-300 hover:-translate-y-1 w-full max-w-[460px]">
              <img
                src={profilePhoto}
                alt="Surya V M"
                className="h-[540px] w-full object-cover"
              />
              <div className="px-6 py-5 text-left bg-[#0f1320]">
                <p className="text-lg font-semibold text-white">Surya V M</p>
                <p className="text-sm text-muted-foreground mt-1">AI & ML Engineer</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 pb-24 pt-16 text-center">
          <h2 className="text-4xl font-semibold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            About
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground">
            I focus on making web experiences that look clean and perform well, with AI and machine learning at the center of the work. My portfolio blends polished interface design with practical models and thoughtful digital storytelling.
          </p>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 pb-24 text-center">
          <h2 className="text-4xl font-semibold text-foreground mb-12" style={{ fontFamily: "var(--font-display)" }}>
            Projects
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-foreground mb-4">SignBridge</h3>
              <p className="text-muted-foreground leading-7">
                A sign language solution supporting real-time communication for hearing-impaired users.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-foreground mb-4">SafeWalk</h3>
              <p className="text-muted-foreground leading-7">
                A safety alert system with notification features designed for real-world use.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Paralysis Glove</h3>
              <p className="text-muted-foreground leading-7">
                An assistive technology project built to help users restore gesture-based interaction.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 text-center">
          <h2 className="text-4xl font-semibold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Contact
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground mb-4">
            Reach out via email at <a href="mailto:vmsurya2007@gmail.com" className="text-foreground underline">vmsurya2007@gmail.com</a> for collaborations, portfolio reviews, or AI product work.
          </p>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground">
            I’m based in Erode, Tamil Nadu, and I’m always open to discussing new digital design and AI product opportunities.
          </p>
        </section>

        <footer className="bg-[#080b13] border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
          © 2026 Surya V M. Crafted for bold AI and design-led portfolio experiences.
        </footer>
      </div>
    </main>
  );
}

export default App;
