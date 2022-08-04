import { FC } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Route, Router, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux";
import { actions } from "../../../redux/ducks";
import { MAPS_ROUTE } from "../../routes/UserRoutes/routes";
import { Button, Container, Input, InputColumn } from "./styles";
import { FormRes } from "./types";

const LoginForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onSubmit = ({ login, password }: FormRes) => {
    if (login === "" && password === "") {
      alert("Please enter login and password");
    } else {
      if (login === "test@ya.ru" && password === "test") {
        dispatch(actions.auth.signIn({ login, password }));
        navigate(MAPS_ROUTE);
      } else {
        alert("Invalid password");
      }
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Field name="login">
              {({ input, meta }) => (
                <InputColumn>
                  Email
                  <Input {...input} type="text" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </InputColumn>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <InputColumn>
                  Password
                  <Input {...input} type="text" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </InputColumn>
              )}
            </Field>
            <Button
              type="submit"
              // disabled={submitting}
              className="btn mt-4 bg-gradient-primary w-100"
              onClick={handleSubmit}
            >
              Войти
            </Button>
          </form>
        )}
      />
    </Container>
  );
};

export default LoginForm;
