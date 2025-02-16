/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import LoginImage from '../images/992339939.jpeg';
import { signup } from '../helper/IndexAuth';
import '../css/LoginPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
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

  const firstNameInputChange = (e: any) => {
    if (e.target.value.trim().length >= 2) {
      setData({
        ...data,
        first_name: e.target.value,
        check_firstNameInputChange: true,
      });
    } else {
      setData({
        ...data,
        first_name: e.target.value,
        check_firstNameInputChange: false,
      });
    }
  };

  const lastNameInputChange = (e: any) => {
    if (e.target.value.trim().length >= 2) {
      setData({
        ...data,
        last_name: e.target.value,
        check_lastNameInputChange: true,
      });
    } else {
      setData({
        ...data,
        last_name: e.target.value,
        check_lastNameInputChange: false,
      });
    }
  };

  const mobilenoInputChange = (e: any) => {
    if (e.target.value.trim().length === 10) {
      setData({
        ...data,
        mobile_no: e.target.value,
        check_mobileNoInputChange: true,
      });
    } else {
      setData({
        ...data,
        mobile_no: e.target.value,
        check_mobileNoInputChange: false,
      });
    }
  };

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

  const handleSubmit = () => {
    setData({ ...data, loading: true });
    signup(data)
      .then((res) => {
        setData({ ...data, loading: false });
        if (res.email !== data.email) {
          for (const emailerror of res.email) {
            toast.error(emailerror, {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              theme: 'dark',
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          return null;
        }
        if (res.error) {
          // console.log(res);
          return toast.error(res.error, {
            position: 'top-right',
            autoClose: 3000,
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
          first_name: '',
          last_name: '',
          mobile_no: '',
          email: '',
          password: '',
          loading: false,
          check_firstNameInputChange: false,
          check_lastNameInputChange: false,
          check_mobileNoInputChange: false,
          check_emailInputChange: false,
          check_passwordInputChange: false,
        });
        toast.success(
          'Registration done successfully. Please Login with email',
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        setTimeout(() => {
          return navigate('/login');
        }, 3000);
        return res;
        // if (typeof window !== undefined) {
        //   localStorage.setItem("authenticationData", JSON.stringify(res));
        //   return window.location.reload();
        // }
      })
      .catch((err) => {
        setData({ ...data, loading: false });
        if (err.message === 'Failed to fetch') {
          return toast.error(
            'Check Your Internet connection or Server is not working.',
            {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              theme: 'dark',
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
        return toast.error(err.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          theme: 'dark',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
      first_name: '',
      last_name: '',
      mobile_no: '',
      email: '',
      password: '',
      loading: false,
      check_firstNameInputChange: false,
      check_lastNameInputChange: false,
      check_mobileNoInputChange: false,
      check_emailInputChange: false,
      check_passwordInputChange: false,
    });
  }, []);

  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        theme="light"
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
              {/* <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
                <span className="brand-name text-center">Money Mentor</span>
              </div> */}

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form>
                  <h3 className="login-head mt-3">Register</h3>

                  <div className="form-outline mb-2 mt-3">
                    <label className="form-label" htmlFor="label-first-name">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className={
                        data.check_firstNameInputChange
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      }
                      value={data.first_name}
                      onChange={(text) => firstNameInputChange(text)}
                    />
                    {!data.check_firstNameInputChange && (
                      <div
                        id="validationServerNameFeedback"
                        className="invalid-feedback"
                      >
                        First name must not be blank.
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="label-last-name">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className={
                        data.check_lastNameInputChange
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      }
                      value={data.last_name}
                      onChange={(text) => lastNameInputChange(text)}
                    />
                    {!data.check_lastNameInputChange && (
                      <div
                        id="validationServerNameFeedback"
                        className="invalid-feedback"
                      >
                        Last name must not be blank.
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="user-mobile-no"
                      className={
                        data.check_mobileNoInputChange
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      }
                      value={data.mobile_no}
                      onChange={(text) => mobilenoInputChange(text)}
                    />
                    {!data.check_mobileNoInputChange && (
                      <div
                        id="validationServerNameFeedback"
                        className="invalid-feedback"
                      >
                        Mobile No must be 10 characters long.
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-4">
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
                    {data.loading ? (
                      <button
                        className="btn btn-info btn-lg btn-block"
                        type="button"
                        disabled
                      >
                        <Spinner size="sm" animation="border" /> Registering....
                      </button>
                    ) : (
                      <button
                        className="btn btn-info btn-lg btn-block"
                        type="button"
                        onClick={handleSubmit}
                        disabled={
                          !data.check_firstNameInputChange ||
                          !data.check_lastNameInputChange ||
                          !data.check_mobileNoInputChange ||
                          !data.check_emailInputChange ||
                          !data.check_passwordInputChange
                        }
                      >
                        Register
                      </button>
                    )}
                  </div>
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

export default RegisterPage;
