/* eslint-disable promise/no-nesting */
/* eslint-disable no-console */
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { signin, signout } from './helper/IndexAuth';
import backendIpc from './BackendIPC';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          toast.info('Please wait login process', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          signin(email, password)
            .then((res: any) => {
              if (res.error) {
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
              backendIpc
                .invoke('send:authentication', res)
                .then((res: any) => {
                  console.log('res in login', res);
                  return window.location.reload();
                  // setpatientList(res)
                })
                .catch((error: any) => {
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
              return null;
            })
            .catch((err: any) => {
              return console.log('error', err);
            });
        },
        logout: async () => {
          try {
            backendIpc
              .invoke('receive:authentication')
              .then((res: any) => {
                if (
                  res?.token.length > 10 &&
                  Object.keys(res?.user).length > 10
                ) {
                  const data = {
                    token: null,
                    user: null,
                  };
                  backendIpc
                    .invoke('send:authentication', data)
                    .then((res1: any) => {
                      signout();
                      // console.log('res in login', res1);
                      return window.location.reload();
                      // setpatientList(res)
                    })
                    .catch((error: any) => {
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
                }
                return res;
                // setpatientList(res)
              })
              .catch((error: any) => {
                console.log(error);
              });
            // window.location.reload();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
