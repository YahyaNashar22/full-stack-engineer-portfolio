import { useEffect } from "react";
import "./App.css";
import Intro from "./components/pageOne/Intro";

const App = () => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        // Prevent default vertical scroll behavior
        event.preventDefault();
        // Scroll horizontally based on the wheel delta
        const scrollAmount = event.deltaY > 0 ? 1 : -1;
        document.querySelector(".main-container")?.scrollBy({
          left: scrollAmount * window.innerWidth, // Scroll by full viewport width
          behavior: "smooth", // Smooth scrolling
        });
      }
    };

    const mainContainer = document.querySelector(".main-container");
    if (mainContainer) {
      // Type casting the event listener to expect a WheelEvent
      mainContainer.addEventListener("wheel", handleWheel as EventListener, {
        passive: false,
      });
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener(
          "wheel",
          handleWheel as EventListener
        );
      }
    };
  }, []);

  return (
    <>
      <main className="main-container">
        <Intro />
        <section className="page" id="two"></section>
        <section className="page" id="three"></section>
        <section className="page" id="four"></section>
      </main>
    </>
  );
};

export default App;
