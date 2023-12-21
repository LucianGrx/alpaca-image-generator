import { backgrounds } from "../../assets/assets";

export const renderButtons = (alpaca, handleButtonClick) => {
  return Object.keys(alpaca).map((key) => {
    if (key === "nose") return;
    return (
      <button className="custom__button" key={key} onClick={() => handleButtonClick(key)}>
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </button>
    );
  });
};

export const handleSelectedBackground = (e, setBackgroundColor) => {
  const background = backgrounds[e.target.innerText.toLowerCase()];
  setBackgroundColor(background);
};

export const renderBackgrounds = (backgrounds, setBackgroundColor) => {
  return Object.keys(backgrounds).map((key) => {
    return (
      <button
        className="custom__button"
        key={key}
        onClick={(e) => handleSelectedBackground(e, setBackgroundColor)}
        >
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </button>
    );
  });
};
