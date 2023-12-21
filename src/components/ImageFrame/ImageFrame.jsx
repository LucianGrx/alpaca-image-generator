import "./ImageFrame.css";
import PropTypes from 'prop-types';

const ImageFrame = ({background, neck, ears, accessories, nose, mouth, hair, eyes, leg}) => {
  return (
    <div className="image__frame">
      <img
        src={background}
        alt="background"
        className="image__layer"
      />
      <img src={neck} alt="neck" className="image__layer" />
      <img src={ears} alt="ears" className="image__layer" />
      
      <img src={nose} alt="nose" className="image__layer" />
      <img src={mouth} alt="mouth" className="image__layer" />
      <img src={hair} alt="hair" className="image__layer" />
      <img
        src={accessories}
        alt="accessories"
        className="image__layer"
      />
      <img src={eyes} alt="eyes" className="image__layer" />
      <img src={leg} alt="leg" className="image__layer" />
    </div>
  );
};

ImageFrame.propTypes = {
  background: PropTypes.string.isRequired,
  neck: PropTypes.string.isRequired,
  ears: PropTypes.string.isRequired,
  accessories: PropTypes.string.isRequired,
  nose: PropTypes.string.isRequired,
  mouth: PropTypes.string.isRequired,
  hair: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired,
  leg: PropTypes.string.isRequired,
}

export default ImageFrame;
