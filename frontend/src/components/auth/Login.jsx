import React from "react";
import userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          height: "92vh",
          backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/6384fcd817ae0f4557ae26b2/c60a0f30-fcfe-4587-b238-6d5b54320380/EMBR-Vape-Pen-BG.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="col-md-4 mx-auto my-auto">
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center mt-4"> LOGIN</h2>
              <p className="card-text text-center">
                Please enter your credentials to login.
              </p>
              <form className="my-5">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-dark mt-3"
                    onClick={(e) => {
                      userService
                        .login(email, password)
                        .then((data) => {
                          console.log(data);
                          setTimeout(function () {
                            window.location.reload(true);
                          });
                          navigate("/");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    {" "}
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
