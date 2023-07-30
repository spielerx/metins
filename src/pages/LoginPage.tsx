import LoginForm from "modules/auth/components/LoginForm";

export default function LoginPage() {
  const handleSubmit = () => {
    alert("form submit");
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
