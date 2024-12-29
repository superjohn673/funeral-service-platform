import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const hasRole = (roles: string[]) => {
    return auth.user && roles.some((role) => auth.user?.role.includes(role));
  };

  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.loading,
    hasRole,
  };
};
