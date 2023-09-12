module.exports = mongoose => {
    const Reservation = mongoose.model(
      "reservation",
      mongoose.Schema(
        {
          idUser: Number,
          idDest: Number,
          heureDepart: Date,
          tpsTrajet: String
        },
        { timestamps: true }
      )
    );
  
    return Reservation;
  };