import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./profile.css";

const ProfileCard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`card ${theme}`}>
      
      <div className="cover"></div>

      <div className="profile-img">
        <img src="/Id.png" alt="profile" />
        <span className="badge">#OpenToWork</span>
      </div>

      <div className="info">
        <h2>Omkar Kamreddi</h2>
        <p className="role">
          Java Developer | Spring Boot | Microservices | SQL | REST API
        </p>
        <p className="location">Solapur, Maharashtra, India</p>

        <div className="actions">
          <button className="primary">Open to</button>
          <button>Add profile section</button>
          <button>Enhance profile</button>
        </div>
      </div>

      <button className="toggle-btn" onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ProfileCard;