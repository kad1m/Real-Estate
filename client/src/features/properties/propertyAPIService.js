import axios from "axios";

const getProperties = async () => {
  const respose = await axios.get("/api/v1/properties/all/")
    return respose.data
}


const propertyAPIService = {getProperties}
export default propertyAPIService