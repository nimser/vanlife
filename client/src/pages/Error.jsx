import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <>
      <h1>An error occured</h1>
      <h2>{error.message}</h2>
    </>
  );
}
