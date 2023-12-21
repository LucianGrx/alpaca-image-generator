export const handleRandomButtonClick = (alpaca, setters, backgrounds, setBackgroundColor) => {
    const parts = ["accessories", "neck", "ears", "mouth", "hair", "eyes", "leg"];
    for (let i=0; i<parts.length; i++) {
      const part = parts[i];
      const options = Object.keys(alpaca[part]);
      const randomOption = options[Math.floor(Math.random() * options.length)];
      setters[i](alpaca[part][randomOption]);
    }
    const backgroundKeys = Object.keys(backgrounds);
    const randomBackground = backgroundKeys[Math.floor(Math.random() * backgroundKeys.length)];
    setBackgroundColor(backgrounds[randomBackground]);
  }