import { useState } from "react";

const ImageData = [
  {
    image: "",
  },
  {
    image: "",
  },
  {
    image: "",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Length is amount of projects (0=1)
  const length = 4;

  // previous button -1 to go back
  const handlePrevious = () => {
    const newIndex = index - 1;

    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  // next button +1 to go forward
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <p>{index}</p>
      <>
        {ImageData.map((slide, index) => {
          return <img src={slide.image} alt="photo" />;
        })}
      </>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
