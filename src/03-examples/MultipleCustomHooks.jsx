import { useFetch, useCounter } from "../hooks/index";
import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(0);

  const { data, isLoading, hasError, getFetch } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/5`
  );

  // no podemos desestructurar el author ni el quote desde un null (da error de js)
  // pero podemos hacer lo siguiente, si la data tiene un valor, tomar el de la posision 0
  // el data[0] no seria necesario si me regresara un objeto en vez de un arreglo
  // const { a, b } = false;
  // esto me da a=undefined y b=undefined
  // !null es true, !!null es false, lo mismo con el undefined, y esto al darme true puedo hacer lo del miemro derecho
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
