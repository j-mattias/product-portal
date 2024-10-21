import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <button className={`scroll-to-top box-shadow ${scrolled ? "show-to-top" : ""}`} onClick={handleScrollTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
