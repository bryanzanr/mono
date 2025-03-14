import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Button, TextField, Box } from "@mui/material";

const LoginForm = ({ onLogin }: { onLogin: (token: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      onLogin(token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default LoginForm;
