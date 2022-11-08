import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalSlider from "./components/HorizontalSlider/HorizontalSlider";
import { getPagesNavigation } from "./components/pages";
import useDetectKeyboardOpen from "./utils/keyboardOpen";
import { IconButton } from "@mui/material";

function App() {
  const [scrollTo, setScrollTo] = useState(0);
  const isMobileKeyboardOpen = useDetectKeyboardOpen(false);

  useEffect(() => {
    if (scrollTo > -1) setScrollTo(-1)
  }, [scrollTo])

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <main className={`main-container surface3`}>
        <HorizontalSlider
          pages={getPagesNavigation().map((el) => el.element)}
          style={{ height: "100%" }}
          scrollTo={scrollTo}
        />
      </main>
      <aside className={`iconsWrapper ${isMobileKeyboardOpen ? "hidden" : ""}`}>
        {getPagesNavigation().map(({ icon, color }, key) => (
          <IconButton onClick={() => setScrollTo(key)} key={key}>
            <FontAwesomeIcon color={color} icon={icon} />
          </IconButton>
        ))}
      </aside>
    </div>
  );
}

export default App;
