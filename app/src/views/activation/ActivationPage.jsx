import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import ActivationError from '../../components/activationpage-content/ActivationError';
import ActivationSuccess from '../../components/activationpage-content/ActivationSuccess';

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    if (activationToken) {
      const activationEmail = async () => {
        await axios
          .post(`${BASE_URL}/users/activation`, { activationToken }, { headers: { 'Content-Type': 'application/json' } })
          .then((res) => {
            toast.success(res.data.message);
            setResponse(res.data.message);
            setError(false);
          })
          .catch((err) => {
            setError(true);
            toast.error(err.response.data.message);
            setResponse(err.response.data.message);
          });
      };
      activationEmail();
    }
  }, [activationToken]);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {error === true && <ActivationError response={response} />}
      {error === false && <ActivationSuccess response={response} />}
    </div>
  );
};

export default ActivationPage;
