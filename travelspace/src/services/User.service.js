import http from "../http-commons";

class UserService {
    getAll(){
        return http.get("");
    }

    create (data){
        http.post("/user", data);
    }
}

export default new UserService();