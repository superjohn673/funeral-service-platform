import { useSelector } from "react-redux";
import { RootState } from "../store";
import { User } from "../types/user";

export const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const hasRole = (roles: string[]) => {
    return auth.user && roles.some((role) => auth.user?.role.includes(role));
  };

  return {
    user: auth.user as User | null,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.loading,
    hasRole,
  };
};
