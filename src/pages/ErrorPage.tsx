import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let errorMessage: string;
  let statusCode = 500;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    if (error.status) {
      statusCode = error.status;
    }
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  useEffect(() => {
    const errorInTitle = statusCode === 404 ? "Page Not Found" : errorMessage;

    document.title = `${statusCode ? `${statusCode}: ` : ""}${errorInTitle}`;
  }, [statusCode, errorMessage]);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
