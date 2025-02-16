import React from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from './AuthProvider';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import backendIpc from './BackendIPC';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import IntroductionPage from './pages/IntroductionPage';
import RiskManagerPage from './pages/RiskManagerPage';
import ExpenseManagerPage from './pages/ExpenseManagerPage';
import GrowthManagerPage from './pages/GrowthManagerPage';
import AdvisoryManagerPage from './pages/AdvisoryManagerPage';
import LiabilityManagerPage from './pages/LiabilityManagerPage';
import UserInterestTrackerPage from './pages/UserInterestTrackerPage';
import CalculatorsPage from './pages/CalculatorsPage';
import InvestmentOptions from './pages/InvestmentOptions';

const IndexRoutes = () => {
  const [introductionLoading, setIntroductionLoading] = React.useState(true);
  const { user, setUser } = React.useContext(AuthContext);

  const isAuthenticated = () => {
    setIntroductionLoading(true);
    backendIpc
      .invoke('receive:authentication')
      .then((res: any) => {
        setIntroductionLoading(false);
        if (res?.token.length > 10 && Object.keys(res?.user).length > 10) {
          return setUser(res);
        }
        return false;
        // setpatientList(res)
      })
      .catch((error: any) => {
        setIntroductionLoading(false);
        toast.error(error, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  React.useEffect(() => {
    return isAuthenticated(); // unsubscribe on unmount
  }, []);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        theme="dark"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <IntroductionPage /> */}
      {user ? (
        <Routes>
          <Route path="/login" element={<Navigate replace to="/" />} />
          <Route path="/signup" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/riskmanager" element={<RiskManagerPage />} />
          <Route path="/expensemanager" element={<ExpenseManagerPage />} />
          <Route path="/growthmanager" element={<GrowthManagerPage />} />
          <Route path="/advisorymanager" element={<AdvisoryManagerPage />} />
          <Route path="/liabilitymanager" element={<LiabilityManagerPage />} />
          <Route
            path="/userinteresttracker"
            element={<UserInterestTrackerPage />}
          />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="investmentoptions" element={<InvestmentOptions />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
        </Routes>
      )}
    </Router>
  );
};

export default IndexRoutes;
