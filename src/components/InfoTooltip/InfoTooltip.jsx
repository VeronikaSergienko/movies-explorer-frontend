import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose }) {
    const handleCloseIconClick = () => {
        onClose();
    }
  return (
    <div className={`info-too-tip ${isOpen ? "info-too-tip_active" : ""}`}>
      <div className="info-too-tip__conteiner">
        <button className="info-too-tip__close-button" onClick={handleCloseIconClick}></button>  
        <h1 className="info-too-tip__title">Данные профиля успешно обновлены!</h1>
      </div>
    </div>
  );
}

export default InfoTooltip;
