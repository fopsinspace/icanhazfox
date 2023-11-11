import { Link } from "wouter";

interface ErrorProps {
  title: string;
  message: string;
  showBackLink?: boolean;
  details?: string;
}

export default function Error(props: ErrorProps) {
  return (
    <div className="grid flex-grow place-items-center overflow-hidden">
      <div>
        <div className="text-lg">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p>{props.message}</p>

          <div className="mt-6 flex gap-2 ">
            {(props.showBackLink == true ||
              props.showBackLink == undefined) && (
              <>
                <button
                  className="border-b border-dotted hover:border-solid"
                  onClick={() => history.back()}
                >
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
              <summary className="mb-2 max-w-fit border-b border-dotted hover:cursor-pointer hover:border-solid">
                More Details
              </summary>

              <code className="block w-full rounded bg-neutral-800 pb-6 pl-4 pr-6 pt-4">
                {props.details}
              </code>
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

export function AsyncError() {
  return (
    <Error
      title="Router Error"
      message="An error occurred while trying to render that page. Please try again later."
      showBackLink={false}
    />
  );
}
