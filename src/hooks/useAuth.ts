import { useContext } from 'react';
import { AuthContext } from '@contexts/AuthContext';
/**
 * Hook to use the AuthContext
 * @returns AuthContext
 */
const useAuth = () => useContext(AuthContext);

export default useAuth;
