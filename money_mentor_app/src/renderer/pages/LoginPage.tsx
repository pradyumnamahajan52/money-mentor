/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LoginImage from '../images/992339939.jpeg';
import '../css/LoginPage.css';
import { AuthContext } from '../AuthProvider';

const LoginPage = () => {
  const { login } = React.useContext(AuthContext);
  const [data, setData] = React.useState({
    first_name: '',
    last_name: '',
    mobile_no: '',
    email: '',
    password: '',
    loading: false,
    secureTextEntry: false,
    check_firstNameInputChange: false,
    check_lastNameInputChange: false,
    check_mobileNoInputChange: false,
    check_emailInputChange: false,
    check_passwordInputChange: false,
  });

  const emailInputChange = (e: any) => {
    const reg: any =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.trim().length >= 3 && reg.test(e.target.value)) {
      setData({
        ...data,
        email: e.target.value,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: e.target.value,
        check_emailInputChange: false,
      });
    }
  };

  const passwordInputChange = (e: any) => {
    if (e.target.value.trim().length >= 3) {
      setData({
        ...data,
        password: e.target.value,
        check_passwordInputChange: true,
      });
    } else {
      setData({
        ...data,
        password: e.target.value,
        check_passwordInputChange: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  React.useEffect(() => {
    setData({
      ...data,
      email: '',
      password: '',
    });
  }, []);

  return (
    <div className="">
      <div className="login-page mt-5 d-block">
        <div className="login-heading">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
          <span className="brand-name text-center">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <FaArrowLeft />
            </Link>{' '}
            Money Mentor
          </span>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form>
                  <h3 className="login-head mt-3">Login</h3>
                  <div className="form-outline mb-4 mt-5">
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      className={
                        data.check_emailInputChange
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      }
                      value={data.email}
                      onChange={(text) => emailInputChange(text)}
                    />
                    {!data.check_emailInputChange && (
                      <div
                        id="validationServerNameFeedback"
                        className="invalid-feedback"
                      >
                        Please enter a valid email address.
                      </div>
                    )}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label bold" htmlFor="form2Example28">
                      Password
                    </label>
                    <input
                      type={data.secureTextEntry ? 'text' : 'password'}
                      id="user-password"
                      className={
                        data.check_passwordInputChange
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      }
                      value={data.password}
                      onChange={(text) => passwordInputChange(text)}
                    />
                    {data.secureTextEntry ? (
                      <AiFillEye
                        size={25}
                        onClick={updateSecureTextEntry}
                        className="field-icon"
                      />
                    ) : (
                      <AiFillEyeInvisible
                        size={25}
                        className="field-icon"
                        onClick={updateSecureTextEntry}
                      />
                    )}
                    {!data.check_passwordInputChange && (
                      <div
                        id="validationServerNameFeedback"
                        className="invalid-feedback"
                      >
                        Password must be 3 characters long.
                      </div>
                    )}
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={() => login(data.email, data.password)}
                      disabled={
                        !data.check_emailInputChange ||
                        !data.check_passwordInputChange
                      }
                    >
                      Login
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <Link className="text-muted" to="/forgetpassword">
                      Forgot password?
                    </Link>
                  </p>
                  <p>
                    Don't have an account?{' '}
                    <Link to="/signup" className="link-info">
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={LoginImage} alt="Login" className="login-img-height" />
            </div>
          </div>
        </div>
      </div>
      <div className="login-bottom-strip"></div>
    </div>
  );
};

export default LoginPage;
