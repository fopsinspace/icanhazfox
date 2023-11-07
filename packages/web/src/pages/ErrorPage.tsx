import { useAsyncError, Link } from 'react-router-dom';

interface ErrorProps {
  title: string;
  message: string;
  showBackLink?: boolean;
  details?: string;
}

export default function ErrorPage(props: ErrorProps) {
  return (
    <div className="w-screen h-screen overflow-hidden grid place-items-center">
      <div>
        <div className="text-lg">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="w-2/3">{props.message}</p>

          <div className="flex gap-2 mt-6 ">
            {(props.showBackLink == true || props.showBackLink == undefined) && (
              <>
                <button className="border-b border-dotted hover:border-solid" onClick={() => history.back()}>
                  Go Back
                </button>

                <span>or</span>
              </>
            )}

            <Link to="/" className="border-b border-dotted hover:border-solid">
              Go Home
            </Link>
          </div>
        </div>

        {props.details && (
          <div className="w-full">
            <details className="mt-16">
              <summary className="mb-2 hover:cursor-pointer border-b border-dotted hover:border-solid max-w-fit">
                More Details
              </summary>

              <code className="bg-neutral-800 pl-4 pr-6 pt-4 pb-6 rounded w-full block">{props.details}</code>
              <p className="text-xs">
                <a
                  className="border-b border-dotted hover:border-solid"
                  href="https://github.com/anythinglabs/icanhazfox/issues"
                >
                  Report Issue
                </a>
              </p>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}

export function RouterErrorPage() {
  const error = useAsyncError();

  return (
    <ErrorPage
      title="Router Error"
      message="An error occurred while trying to render that page. Please try again later."
      showBackLink={false}
      details={String(error)}
    />
  );
}
