import { getUserAuthentication } from "../common/helped";
export default {
    getLoginUser: (user) => {
        return getUserAuthentication(user);
    }
}