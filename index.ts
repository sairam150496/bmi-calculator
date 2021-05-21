import { CalculateBMIToTheUsers } from "./src/main";
import { userData } from "./test_data";

const calculateBMIToTheUsers = new CalculateBMIToTheUsers(userData);
calculateBMIToTheUsers.updateBMIInfoToUsers();

console.log(calculateBMIToTheUsers.getOverWeightedPeople());
