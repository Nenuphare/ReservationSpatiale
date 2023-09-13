module.exports = mongoose => {
    const Reservation = mongoose.model(
      "reservation",
      mongoose.Schema(
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