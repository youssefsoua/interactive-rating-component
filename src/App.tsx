import { useCallback, useState } from "react";
import RatingSubmitted from "./components/RatingSubmitted";
import RatingForm from "./components/RatingForm";

const App = () => {
  const [rating, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setRating = (val: number) => {
    setScore(val);
  };

  const submit = useCallback(() => {
    if (rating) setIsSubmitted(true);
  }, [rating]);

  return (
    <article
      className={`flex h-[360px] w-[325px] flex-col rounded-[2rem] bg-dark-blue/80 p-6 ${
        isSubmitted ? "items-center text-center" : ""
      } sm:h-[413px] sm:w-[413px] sm:px-10 sm:py-8`}
    >
      {isSubmitted ? (
        <RatingSubmitted rating={rating} />
      ) : (
        <RatingForm submit={submit} setRating={setRating} rating={rating} />
      )}
    </article>
  );
};

export default App;
