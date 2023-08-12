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
    <div
      className={`flex h-[400px] w-[340px] flex-col rounded-3xl bg-dark-blue/80 p-5 ${
        isSubmitted ? "items-center text-center" : ""
      } sm:h-[415px] sm:w-[420px] sm:px-10 sm:py-8`}
    >
      {isSubmitted ? (
        <RatingSubmitted rating={rating} />
      ) : (
        <RatingForm submit={submit} setRating={setRating} rating={rating} />
      )}
    </div>
  );
};

export default App;
