import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/store";
import { useLoginMutation } from "modules/auth/authApi";
import { setCredentials } from "modules/auth/authSlice";
import LoginForm, { LoginInput } from "modules/auth/components/LoginForm";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (values: LoginInput) => {
    const userData = await login(values).unwrap();
    dispatch(setCredentials(userData));
    navigate("/");
  };

  return (
    <div>
      <LoginForm
        loading={isLoading}
        error={error as Error}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
