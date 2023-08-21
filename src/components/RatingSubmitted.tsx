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
        className="w-[150px] pb-6 pt-2"
      />
      <div className="w-fit rounded-full bg-medium-grey/10 px-4 py-2 text-orange">
        <p>You selected {rating ?? 0} out of 5</p>
      </div>
      <p className="pb-4 pt-7 text-2xl font-bold text-white sm:py-7 sm:text-[1.75rem]">
        Thank you!
      </p>
      <p className="max-w-[340px] text-sm text-white/60 sm:text-base">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default RatingSubmitted;
