import http from "../http-commons";

class ReservationService {
    getAll(){
        return http.get("/reservation");
    }

    create (data){
        http.post("/reservation", data);
    }
}

export default new ReservationService();