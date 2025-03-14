import axios from "axios";
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from "../store/reducers";

export const fetchUserData = (dispatch: any, token: string) => {
  dispatch(fetchUserStart());
  axios
    .get("http://localhost:5000/api/fetch-user-data", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(fetchUserSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchUserFailure(error.message));
    });
};
