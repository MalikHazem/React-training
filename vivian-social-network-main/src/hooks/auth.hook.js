import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/providers/UserProvider.component';

const useAuth = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user;
};

export default useAuth;