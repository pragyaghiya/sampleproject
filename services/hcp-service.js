import { myAxios } from "./helper";

export const searchHcp = (querry) => {

    return myAxios
        .get(`/hcpData/${querry}`)
        .then((response) => {

            // console.log(response);
            return response.data

        })
        .catch((error) => {
            console.log(error.response.data);
            return error.response.data;
        }
        )
}
