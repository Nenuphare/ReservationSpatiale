import http from "../http-commons";

class DestinationService {
    getAll(){
        return http.get("/destination");
    }

    create (data){
        http.post("/destination", data);
    }
}

export default new DestinationService();