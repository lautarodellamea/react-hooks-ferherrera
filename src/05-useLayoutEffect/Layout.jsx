import { useFetch, useCounter } from "../hooks/index";
import { LoadingQuote, Quote } from "../03-examples/index";

export const Layout = () => {
  const { counter, increment } = useCounter(0);

  const { data, isLoading, hasError, getFetch } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/5`
  );

  const { author, quote } = !!data && data[counter];

  return (
    <>
      <h1>BreakimgBad Quotes</h1>

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        onClick={getFetch}
        disabled={isLoading}
        className="btn btn-success"
      >
        Next quote
      </button>
    </>
  );
};
