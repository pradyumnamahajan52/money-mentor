/* eslint-disable promise/no-nesting */
/* eslint-disable @typescript-eslint/naming-convention */
import API from '../Backend';
import backendIpc from '../BackendIPC';

export const signin = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await fetch(`${API}user/login/`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const signup = async (user: any) => {
  const { first_name, last_name, email, password, mobile_no } = user;

  const formData = new FormData();
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('mobile_no', mobile_no);
  formData.append('email', email);
  formData.append('password', password);

  const response = await fetch(`${API}user/register/`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

// export const authenticate = (data) => {
//   if (typeof window !== undefined) {
//     localStorage.setItem('authenticationData', JSON.stringify(data));
//   }
// };

export const isAuthenticated = () => {
  return backendIpc
    .invoke('receive:authentication')
    .then((res: any) => {
      if (res?.token.length > 10 && Object.keys(res?.user).length > 10) {
        return true;
      }
      return false;
      // setpatientList(res)
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const signout = () => {
  return fetch(`${API}user/logout/`, {
    method: 'GET',
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const forgetPassword = async (email: string) => {
  const formData = new FormData();
  formData.append('email', email);

  const response = await fetch(`${API}user/forget-password/`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const forgetPasswordOtp = async (
  email: string,
  otp: string,
  user_otp_id: string
) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('user_otp_id', user_otp_id);
  formData.append('otp', otp);

  const response = await fetch(`${API}user/forget-password/verify/`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const forgetPasswordReset = async (
  email: string,
  otp: string,
  user_otp_id: string,
  password: string
) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('user_otp_id', user_otp_id);
  formData.append('otp', otp);
  formData.append('password', password);

  const response = await fetch(`${API}user/forget-password/reset/`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const deleteUserHelper = async (token: string, id: number) => {
  try {
    const response = await fetch(`${API}user/register/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${token}`,
      },
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};
