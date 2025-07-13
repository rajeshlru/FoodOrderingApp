import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oopss!....</h1>
      <h2>You are out of us!..</h2>
      <h4>
        {error.status}:{error.statusText}
      </h4>
    </div>
  );
};
export default Error;
