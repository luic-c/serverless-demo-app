import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";
//const isLocal = false;

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({dsn: 
"https://a503cb52f3c54ce6a98b6497c859ebfb@o389533.ingest.sentry.io/5227824"});
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(error, errorInfo);

  alert(message);
}
