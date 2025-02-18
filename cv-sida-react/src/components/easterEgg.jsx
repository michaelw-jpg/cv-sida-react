import { useEffect, useState } from "react";

export default function EasterEgg() {
  const [eggInput, setEggInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setEggInput((prev) => {
        const newInput = prev + e.key;
        if (newInput.includes("1337")) {
          alert("Konami Code Activated");
          return "";
        }
        return newInput;
      });
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
