interface IRatingFormProps {
  setRating: (val: number) => void;
  submit: () => void;
  rating: number;
}

const ratings = [1, 2, 3, 4, 5];

const RatingForm = (props: IRatingFormProps) => {
  const { setRating, submit, rating } = props;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submit();
  };

  return (
    <>
      <header>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-medium-grey/10 sm:h-12 sm:w-12">
          <img src="./icon-star.svg" alt="Star" />
        </div>
        <h1 className="py-5 text-xl font-bold text-white sm:pb-4 sm:pt-7 sm:text-2xl sm:text-[1.75rem]">
          How did we do?
        </h1>
      </header>

      <p className="text-sm text-white/60 sm:text-base">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between py-7 leading-none">
          {ratings.map((value) => (
            <label
              className={`${
                value === rating
                  ? "bg-medium-grey text-white"
                  : "bg-medium-grey/10 text-white/60"
              } flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-orange hover:text-white sm:h-12 sm:w-12`}
              key={value}
            >
              <input
                type="radio"
                value={value}
                className="hidden"
                onChange={() => setRating(value)}
                checked={value === rating}
              />
              {value}
            </label>
          ))}
        </div>

        <button
          className="w-full cursor-pointer rounded-full bg-orange px-8 py-3 font-bold tracking-widest text-white"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default RatingForm;
