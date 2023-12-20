import { useRouteError } from "react-router-dom";
import "./styles.scss";
const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Ha ocurrido algún error, disculpe las molestias</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default ErrorPage;
