import { useRouter } from "next/router";
import LoginForm from "../components/molecules/LoginForm";

export default function Home() {
  const router = useRouter();

  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
    router.push("/dashboard");
  };

  return <LoginForm onLogin={handleLogin} />;
}
