import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <ThemeProvider>
      <ProfileCard />
    </ThemeProvider>
  );
}

export default App;