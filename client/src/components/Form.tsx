import { ChangeEvent, useState } from "react";
import { FormData } from "../interfaces/types";
import landscape from "../assets/login.svg";
import { useAuthStore } from "../store/AuthStore";
import { loginApi, profileApi } from "../api/auth";

const initialState: FormData = {
  email: "",
  password: "",
};

export const Form = () => {
  const [form, setForm] = useState<FormData>(initialState);
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmit = async () => {
    const { token } = await loginApi(form);
    setToken(token);

    const { email } = await profileApi(token);
    setProfile(email);
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
              style={{ height: "30em" }}
            />
            <form>
              <div className="card-body">
                <h5 className="card-title">Login de usuario</h5>
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
                    Iniciar sesión
                  </button>
                </div>
                <p className="card-text">
                  <small className="text-muted">
                    Inicie sesión para ingresar al Home
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
