module.exports = mongoose => {
    const Reservation = mongoose.model(
      "reservation",
      mongoose.Schema.methode("toJSON", function() {
        const {__v,_id,...object} = this.toObject(); 
        object.id=_id;
        return object;})
        (
        {
          _id : String,
          idUser: String,
          idDest: String,
          heureDepart: Date,
        },
        { timestamps: true }
      )
    );
  
    return Reservation;
  };