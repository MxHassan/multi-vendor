import { useNavigate } from 'react-router-dom';

const ActivationError = ({ response }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center py-2">
      <p className="text-2xl py-2">Your token is invalid</p>
      <p className="pb-2">{`${response}`}</p>
      <button
        onClick={() => {
          navigate('/sign-up');
        }}
        className="relative w-40 h-[40px] flex justify-center my-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
      >
        Sign Up
      </button>
    </div>
  );
};

export default ActivationError;
