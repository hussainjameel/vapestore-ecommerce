import React from "react";
import userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = await userService.register(name, email, password);
      console.log(data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data || "Registration failed", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

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
              <h2 className="card-title text-center mt-2"> REGISTER</h2>
              <p className="card-text text-center">
                Please enter your credentials to register.
              </p>
              <form className="mt-5">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                    className="btn btn-dark my-4"
                    onClick={handleRegister}
                  >
                    {" "}
                    Register
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

export default Register;
