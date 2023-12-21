import "./Hero.css";

const Hero = () => {
  return <div className="container__hero">
    <div className="hero__title">
        <img src="./hero-images/Frame.svg" alt="title-logo" />
        <h1 className="hero__h1-title">Create your own interactive character</h1>
    </div>
    <div className="hero__images"></div>
  </div>;
};

export default Hero;
