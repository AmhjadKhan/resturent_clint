import { useEffect,  useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(4); 
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-blue-300">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold ml-7 mb-6">Login now!</h1>
            <img
              className="h-72 w-96"
              src="https://res.cloudinary.com/tf-lab/image/upload/restaurant/ccb4f650-e783-43f0-981c-d41a9a0e6898/7c069396-9de8-43e3-a849-f7d17ccfe3ac.jpg"
              alt="Login illustration"
            />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                <button
                  type="button"
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
