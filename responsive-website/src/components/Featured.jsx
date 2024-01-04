import taco from '../assets/queso-taco.png';

export function Featured() {
  return (
    <div className="featured">
      <img src={taco} className="featured__img" alt="taco"/>

      <div className="featured__text">
        <h2 className="text__title">Featured Taco</h2>
        <p className="text__description">
          Slim Profile, easy to hold and loaded with cheese.
        </p>

        <p className="text__description">
          This is the one you have been waiting for
        </p>

        <button className="text__button">Learn More</button>
      </div>
    </div>
  );
}
