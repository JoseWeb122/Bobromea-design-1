import { useEffect } from "react";
import { EstimateProvider } from "./lib/estimate";
import { RouterProvider, useRouter } from "./lib/router";
import { Header } from "./components/Header";
import { Footer, BackToTop } from "./components/Footer";
import { EstimateDialog } from "./components/EstimateDialog";
import { Button, Container } from "./components/ui";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Bob Romea Roofing";
  }, []);
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="bg-grid h-full w-full" />
      </div>
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="eyebrow text-orange">404 · Page not found</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02]">
            This roof doesn't have a page.
          </h1>
          <p className="mt-5 max-w-lg text-[14px] leading-[1.8] text-white/60">
            The page you are looking for may have moved. Return to the homepage or explore the
            roofing services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/" arrow>Back to Home</Button>
            <Button to="/roofing-services" variant="ghost">Roofing Services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Page() {
  const { path } = useRouter();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.96) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [path]);

  let content;
  if (path === "/" || path === "") content = <Home />;
  else if (path === "/residential-roofing") content = <ServiceDetail slug="residential-roofing" />;
  else if (path === "/commercial-roofing") content = <ServiceDetail slug="commercial-roofing" />;
  else if (path === "/roofing-services" || path === "/services") content = <Services />;
  else if (path.startsWith("/services/")) content = <ServiceDetail slug={path.replace("/services/", "")} />;
  else if (path === "/our-work") content = <OurWork />;
  else if (path === "/about") content = <About />;
  else if (path === "/contact") content = <Contact />;
  else if (path === "/privacy-policy") content = <Legal kind="privacy" />;
  else if (path === "/terms") content = <Legal kind="terms" />;
  else content = <NotFound />;

  return (
    <>
      <Header />
      <main id="main-content" key={path}>
        {content}
      </main>
      <Footer />
      <BackToTop />
      <EstimateDialog />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <EstimateProvider>
        <div className="min-h-screen bg-warm">
          <Page />
        </div>
      </EstimateProvider>
    </RouterProvider>
  );
}
