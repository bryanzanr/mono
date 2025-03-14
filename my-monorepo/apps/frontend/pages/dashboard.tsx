import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../apis/userApi";
import { RootState } from "../store/store";
import { Typography, Button, CircularProgress } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUserData(dispatch, token);
  }, [dispatch]);

  return (
    <div>
      {user.loading ? <CircularProgress /> : user.data ? <Typography>{`Hello, ${user.data.name}`}</Typography> : <Typography>No data</Typography>}
      <Button onClick={() => fetchUserData(dispatch, localStorage.getItem("token")!)}>Refresh</Button>
    </div>
  );
};

export default Dashboard;
