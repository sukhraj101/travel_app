import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginFun } from "./../../service";
interface LoginFormInputs {
  email: string;
  password: string;
}

interface ErrorMessage {
  has: boolean;
  type: 'warning' | 'danger' | 'success';
  message: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [error, setErrorMessage] = useState<ErrorMessage>({
    has: false,
    type: 'warning',
    message: ''
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    loginFun(data).then((res) => {
      if (res.status === 1) {
        setErrorMessage({
          has: true,
          type: 'success',
          message: 'Login successfully, redirecting to dashboard....'
        });
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.href = '/admin/dashboard';
      } else {
        setErrorMessage({
          has: true,
          type: 'danger',
          message: res.message
        });
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-full-page-content">
        <div className="loginBody auth-content my-auto">
          <div className="loginHdr text-center">
            <div className="loginLogo text-center">
              <Link to="/" className="d-block auth-logo"></Link>
            </div>
            <h3 className="mb-0">Login</h3>
            <p className="mt-2">
              Please enter your details below to Sign In
            </p>
          </div>
          {error.has && (
            <div className={`alert alert-${error.type}`} role="alert">
              {error.message}
            </div>
          )}
          <div className="loginForm formStyle">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInputIcon mb-4">
                <label htmlFor="email">Email</label>
                <i className="fa fa-user"></i>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter Your Email Address"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="formInputIcon mb-3">
                <label htmlFor="password">Password</label>
                <i className="fa fa-key"></i>
                <input
                  id="password"
                  type="password"
                  placeholder="******"
                  {...register('password', {
                    required: 'Password is required'
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="formBasicCheckbox">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div className="formBtn text-center mt-3">
                <button
                  className="btn btn-primary waves-effect waves-light d-block w-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
