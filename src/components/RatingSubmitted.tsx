interface IRatingSubmittedProps {
  rating: number;
}

const RatingSubmitted = (props: IRatingSubmittedProps) => {
  const { rating } = props;
  return (
    <>
      <img
        src="./illustration-thank-you.svg"
        alt="Thank you!"
        className="py-6"
      />
      <div className="mb-3 w-fit rounded-full bg-medium-grey/10 px-4 py-2 text-orange">
        <p>You selected {rating ?? 0} out of 5</p>
      </div>
      <h1 className="py-4 text-2xl font-bold text-white sm:text-[1.75rem]">
        Thank you!
      </h1>
      <p className="text-medium-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default RatingSubmitted;
