/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaLock, FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import LoginImage from '../images/992339939.jpeg';
import {
  forgetPassword,
  forgetPasswordOtp,
  forgetPasswordReset,
} from '../helper/IndexAuth';
import '../css/LoginPage.css';

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    otp: '',
    otp_id: '',
    loading: false,
    email_send_success: false,
    otp_check_success: false,
    otp_resend_time: false,
    check_emailInputChange: false,
    check_passwordInputChange: false,
    check_otpInputChange: false,
    secureTextEntry: false,
    secureTextPassword: false,
  });

  const emailInputChange = (e: any) => {
    const reg =
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

  const otpInputChange = (e: any) => {
    if (e.target.value.trim().length === 6) {
      setData({
        ...data,
        otp: e.target.value,
        check_otpInputChange: true,
      });
    } else {
      setData({
        ...data,
        otp: e.target.value,
        check_otpInputChange: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateSecureTextEntryPassword = () => {
    setData({
      ...data,
      secureTextPassword: !data.secureTextPassword,
    });
  };

  const handleSubmit = () => {
    setData({
      ...data,
      loading: true,
    });
    forgetPassword(data.email)
      .then((res) => {
        if (res.error) {
          setData({
            ...data,
            loading: false,
          });
          return toast.error(res.error, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setData({
          ...data,
          loading: false,
          otp_id: res.user_otp_id,
          email_send_success: true,
        });
        // appointmentModalClose();
        return toast.success('OTP Send Successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          loading: false,
        });
        return toast.error(error, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          theme: 'dark',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleSubmitOtp = () => {
    setData({
      ...data,
      loading: true,
    });
    forgetPasswordOtp(data.email, data.otp, data.otp_id)
      .then((res) => {
        if (res.error) {
          setData({
            ...data,
            loading: false,
          });
          return toast.error(res.error, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setData({
          ...data,
          loading: false,
          email_send_success: true,
          otp_check_success: true,
        });
        // appointmentModalClose();
        return toast.success('OTP Verify Successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          loading: false,
        });
        return toast.error(error, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          theme: 'dark',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleSubmitPassword = () => {
    setData({
      ...data,
      loading: true,
    });
    forgetPasswordReset(data.email, data.otp, data.otp_id, data.password)
      .then((res) => {
        if (res.error) {
          setData({
            ...data,
            loading: false,
          });
          return toast.error(res.error, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setData({
          ...data,
          loading: false,
        });
        // appointmentModalClose();
        toast.success('Password changed Successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return setTimeout(() => {
          return navigate('/');
        }, 2500);
      })
      .catch((error: any) => {
        setData({
          ...data,
          loading: false,
        });
        return toast.error(error, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          theme: 'dark',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  React.useEffect(() => {
    setData({
      ...data,
      email: '',
      password: '',
      otp: '',
      otp_id: '',
      loading: false,
      email_send_success: false,
      otp_check_success: false,
      otp_resend_time: false,
      check_emailInputChange: false,
      check_passwordInputChange: false,
      check_otpInputChange: false,
      secureTextEntry: false,
      secureTextPassword: false,
    });
  }, []);

  return (
    <div className="">
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
                  <h3 className="login-head mt-3">Forget Password</h3>
                  {data.email_send_success && !data.otp_check_success && (
                    <div className="alert alert-success" role="alert">
                      <p>
                        We've emailed you instructions for setting your
                        password, if an account exists with the email you
                        entered. You should receive them shortly.
                      </p>
                      <p>
                        If you don't receive an email, please make sure you've
                        entered the address you registered with, and check your
                        spam folder.
                      </p>
                    </div>
                  )}
                  <div className="form-outline mb-4 mt-5">
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      disabled={data.email_send_success}
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
                  {data.email_send_success && (
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example18">
                        OTP
                      </label>
                      <input
                        type={data.secureTextEntry ? 'text' : 'password'}
                        id="user-otp"
                        className={
                          data.check_otpInputChange
                            ? 'form-control is-valid'
                            : 'form-control is-invalid'
                        }
                        value={data.otp}
                        onChange={(text) => otpInputChange(text)}
                        disabled={data.otp_check_success}
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
                      {!data.check_otpInputChange && (
                        <div
                          id="validationServerNameFeedback"
                          className="invalid-feedback"
                        >
                          OTP must not be blank.
                        </div>
                      )}
                    </div>
                  )}
                  {data.email_send_success && data.otp_check_success && (
                    <div className="form-outline mb-4">
                      <label
                        className="form-label bold"
                        htmlFor="form2Example28"
                      >
                        Password
                      </label>
                      <input
                        type={data.secureTextPassword ? 'text' : 'password'}
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
                          onClick={updateSecureTextEntryPassword}
                          className="field-icon"
                        />
                      ) : (
                        <AiFillEyeInvisible
                          size={25}
                          className="field-icon"
                          onClick={updateSecureTextEntryPassword}
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
                  )}
                  {data.loading ? (
                    <div className="pt-1 mb-4">
                      <button
                        type="button"
                        className="btn btn-info btn-lg btn-block"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        &nbsp;Loading...
                      </button>
                    </div>
                  ) : (
                    <div className="pt-1 mb-4">
                      {!data.email_send_success && (
                        <button
                          type="button"
                          onClick={() => handleSubmit()}
                          className="btn btn-info btn-lg btn-block"
                          disabled={!data.check_emailInputChange}
                        >
                          SUBMIT
                        </button>
                      )}
                      {data.email_send_success && !data.otp_check_success && (
                        <button
                          type="button"
                          onClick={() => handleSubmitOtp()}
                          className="btn btn-info btn-lg btn-block"
                          disabled={!data.check_emailInputChange}
                        >
                          SUBMIT OTP
                        </button>
                      )}
                      {data.email_send_success && data.otp_check_success && (
                        <button
                          type="button"
                          onClick={() => handleSubmitPassword()}
                          className="btn btn-info btn-lg btn-block"
                          disabled={!data.check_emailInputChange}
                        >
                          SUBMIT Password
                        </button>
                      )}
                    </div>
                  )}
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

export default ForgetPasswordPage;
