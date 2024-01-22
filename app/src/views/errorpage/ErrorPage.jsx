import { useRouteError, useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex text-center items-center min-h-screen bg-[#f4f4f4] ">
      <div className="max-w-4xl mx-auto">
        <div spacing={2}>
          <div>
            {error.status === 404 ? (
              <img className="mx-auto object-cover min-h-96 max-w-[70%]" src="/src/assets/404-tranc.png" alt="Error 404" />
            ) : (
              <p color="error">{error.status}</p>
            )}
          </div>
          <div>
            <p className="text-3xl my-1">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl my-1 text-red-500">
              {error.data} is &quot;{error.statusText || error.message}&quot;
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-700 dark:text-white italic rounded-md mt-1 px-4 pt-1 pb-2  text-xl"
              onClick={() => navigate('/')}
            >
              Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
