import { AuthProvider } from './AuthProvider';
import IndexRoutes from './IndexRoutes';

const Providers = () => {
  return (
    <AuthProvider>
      <IndexRoutes />
    </AuthProvider>
  );
};

export default Providers;
