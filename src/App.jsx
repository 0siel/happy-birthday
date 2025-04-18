// App.jsx
import { useState, useEffect } from "react";
import CandleScene from "./components/CandleScene";
import GiftOpening from "./components/GiftOpening";
import GiftCard from "./components/GiftCard";
import song from "./assets/happy-birthday-song.mp3";

function App() {
  const [stage, setStage] = useState("candles");
  const [isMuted, setIsMuted] = useState(false);
  const audio = new Audio(song);

  // Activate audio alerts
  // when the user clicks the button
  // to mute/unmute the song

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;
    if (!isMuted) audio.play();

    return () => {
      audio.pause();
    };
  }, [isMuted]);

  const nextStage = () => {
    setStage((prev) => {
      if (prev === "candles") return "gift";
      if (prev === "gift") return "card";
      return prev;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <button
        className="absolute top-4 right-4 bg-purple-200 px-3 py-1 rounded-lg shadow-md text-purple-700"
        onClick={() => setIsMuted(!isMuted)}
      >
        Activa el audio ➡️{isMuted ? "🔇" : "🔊"}
      </button>

      {stage === "candles" && <CandleScene next={nextStage} />}
      {stage === "gift" && <GiftOpening next={nextStage} />}
      {stage === "card" && <GiftCard />}
    </div>
  );
}

export default App;
