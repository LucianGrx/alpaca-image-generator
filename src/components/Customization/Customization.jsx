import "./Customization.css";
import { useState } from "react";
import ImageFrame from "../ImageFrame/ImageFrame";
import { backgrounds, alpaca } from "../../assets/assets";
import { renderButtons, renderBackgrounds } from "./customizationFunctions";
import { downloadImage } from "./downloadImage";
import { handleRandomButtonClick } from "./randomImage";

const Customization = () => {
  const [currentObject, setCurrentObject] = useState(null);
  const [currentPart, setCurrentPart] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(backgrounds.blue60);
  const [isActive, setIsActive] = useState(false);
  const [neck, setNeck] = useState("/alpaca/neck/default.png");
  const [ears, setEars] = useState("/alpaca/ears/default.png");
  const [accessories, setAccessories] = useState(
    "/alpaca/accessories/headphone.png"
  );
  const [mouth, setMouth] = useState("/alpaca/mouth/default.png");
  const [hair, setHair] = useState("/alpaca/hair/default.png");
  const [eyes, setEyes] = useState("/alpaca/eyes/default.png");
  const [leg, setLeg] = useState("/alpaca/leg/default.png");
  const parts = [
    backgroundColor,
    neck,
    ears,
    alpaca.nose,
    mouth,
    hair,
    accessories,
    eyes,
    leg,
  ];
  const setters = [
    setAccessories,
    setNeck,
    setEars,
    setMouth,
    setHair,
    setEyes,
    setLeg,
  ];

  const isObject = function (val) {
    if (val === null) {
      return false;
    }
    return typeof val === "object";
  };

  const handleButtonClick = (key) => {
    if (isObject(alpaca[key])) {
      setCurrentObject(alpaca[key]);
      setCurrentPart(key);
    }
  };

  const handleSubButtonClick = (key, value) => {
    switch (currentPart) {
      case "accessories":
        setAccessories(value);
        break;
      case "neck":
        setNeck(value);
        break;
      case "ears":
        setEars(value);
        break;
      case "mouth":
        setMouth(value);
        break;
      case "hair":
        setHair(value);
        break;
      case "eyes":
        setEyes(value);
        break;
      case "leg":
        setLeg(value);
        break;
      default:
        break;
    }
  };

  const buttons = renderButtons(alpaca, handleButtonClick);
  const backgroundButtons = renderBackgrounds(backgrounds, setBackgroundColor);
  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="customization__section">
      <h1 className="custom__title">ALPACA GENERATOR</h1>
      <div className="custom__container">
        <div className="custom__image-section">
          <ImageFrame
            background={backgroundColor}
            neck={neck}
            ears={ears}
            accessories={accessories}
            nose={alpaca.nose}
            mouth={mouth}
            hair={hair}
            eyes={eyes}
            leg={leg}
          />
          <div className="custom__image-buttons">
            <button
              className="custom__image-button"
              onClick={() =>
                handleRandomButtonClick(
                  alpaca,
                  setters,
                  backgrounds,
                  setBackgroundColor
                )
              }
            >
              🔀 Random
            </button>
            <button
              className="custom__image-button"
              onClick={() => downloadImage(alpaca, parts)}
            >
              🖼️ Download
            </button>
          </div>
        </div>

        <div className="custom__menu">
          <h2 className="custom__subtitle">ACCESSORIZE THE ALPACA’S</h2>
          <div className="custom__buttons">
            {buttons}
            <button className="custom__button" onClick={toggleButton}>
              Background
            </button>
          </div>

          <h2 className="custom__subtitle">STYLE</h2>
          <div className="custom__buttons">
            {currentObject &&
              Object.entries(currentObject).map(([key, value]) => (
                <button
                  className="custom__button"
                  key={key}
                  onClick={() => handleSubButtonClick(key, value)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}

            {isActive ? backgroundButtons : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
