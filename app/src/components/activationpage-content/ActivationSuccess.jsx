import { useNavigate } from 'react-router-dom';

const ActivationSuccess = ({ response }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center py-2">
      <p className="text-xl py-2">Your Account has been created successfully!</p>
      <p className="pb-2">{`${response}`}</p>
      <button
        onClick={() => {
          navigate('/login');
        }}
        className="relative w-40 h-[40px] flex justify-center my-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
      >
        Login
      </button>
    </div>
  );
};

export default ActivationSuccess;
