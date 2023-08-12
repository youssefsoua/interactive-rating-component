interface IRatingFormProps {
  setRating: (val: number) => void;
  submit: () => void;
  rating: number;
}

const ratings = [1, 2, 3, 4, 5];

const RatingForm = (props: IRatingFormProps) => {
  const { setRating, submit, rating } = props;
  return (
    <>
      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-medium-grey/10 sm:h-[54px] sm:w-[54px]">
        <img src="./icon-star.svg" alt="Star" />
      </div>
      <h1 className="py-4 text-2xl font-bold text-white sm:text-[1.75rem]">
        How did we do?
      </h1>
      <p className="text-medium-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex flex-row justify-between py-8 leading-none">
        {ratings.map((e) => (
          <div
            className={`${
              e === rating
                ? "bg-medium-grey text-white"
                : "bg-medium-grey/10 text-medium-grey"
            } flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full hover:bg-orange hover:text-white sm:h-[54px] sm:w-[54px]`}
            key={e}
            onClick={() => setRating(e)}
          >
            {e}
          </div>
        ))}
      </div>
      <a
        className="cursor-pointer rounded-full bg-orange px-8 py-4 text-center align-middle font-bold leading-none tracking-widest text-white"
        onClick={submit}
      >
        SUBMIT
      </a>
    </>
  );
};

export default RatingForm;
