import get from "axios";
import RandomUserTransformer from "../transformers/RandomUserTransformer";
import { RandomUser, RandomUserResults } from "@/models/RandomUser";

// axios.defaults.withCredentials = true

export default {
  name: "RandomUserService",
  async getRandomUser(currentUsers: RandomUser[]): Promise<any> {
    try {
      return await get("https://api.randomuser.me/").then(
        (response: { data: RandomUserResults }) =>
          RandomUserTransformer.convertUserFrom(
            currentUsers,
            response.data.results,
          ),
      );
    } catch (error) {
      console.log("Error retrieving data: " + error);
      return [];
    }
  },
};
