import { useState } from "react";
import toast from "react-hot-toast";
import httpServices from "../services/httpService";
const useFlightSearch = () => {
  const [loading, setLoading] = useState(false);

  const flightSearch = async (body) => {
    setLoading(true);
    try {
      const { data } = await httpServices.post("api/v1/user/air-search", body);
      return data;
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, flightSearch };
};

export default useFlightSearch;