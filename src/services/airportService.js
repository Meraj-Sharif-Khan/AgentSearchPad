import httpServices from "./httpService";
import toast from "react-hot-toast";

const useGetAirportService = () => {
  const getAirportService = async () => {
    try {
      const {data} = await httpServices.post("https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion", {"keyword": "dxb"});
      return data.data;
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return { getAirportService };
};

export default useGetAirportService;


