import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import landscape from "../assets/login.svg";
import { FormData } from "../interfaces/types";
import { Route } from "../router/routes";

interface RegisterData extends FormData {
  name: string;
}

const initialState: RegisterData = {
  name: "",
  email: "",
  password: "",
};

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterData>(initialState);

  const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmit = async () => {
    console.log("Datos del registro: ", JSON.stringify(form));

    navigate(Route.auth);
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className=" col-sx-11  col-md-6 col-md-4 ">
          <div className="card mb-3 mt-2 ">
            <img
              src={landscape}
              className="card-img-top"
              alt="landscape"
              style={{ height: "25em" }}
            />
            <form>
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name"
                    name="name"
                    onChange={handlerChange}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handlerChange}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="*********"
                    name="password"
                    onChange={handlerChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-3 mb-5"
                    onClick={onSubmit}
                  >
                    Enviar Datos
                  </button>
                </div>
                <p className="card-text">
                  <small className="text-muted">
                    Registrese para continuar
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
