import axios from "axios";
import { BASE_URL } from "./base";

export const getItemFunc = (
  setDataState,
  setErrorMessage,
  endPoint,
  dataArray
) => {
  const fleetTypesApi = `${BASE_URL}${endPoint}`;
  let newFleetMakesData = [];
    axios
      .get(fleetTypesApi)
      .then((response) => {
        const apiData = response.data[dataArray];
          // console.log(response);
        apiData?.map((item) => {
          newFleetMakesData.push({
            id: item._id,
            ...item,
          });
        });
        setDataState((prev) => {
          return {
            data: newFleetMakesData,
            isDataNeeded: prev.isDataNeeded,
          };
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(error.message);
        }
      });
};