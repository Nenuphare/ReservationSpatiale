module.exports = mongoose => {
    const Reservation = mongoose.model(
      "reservation",
      mongoose.Schema(
        {
          _id : String,
          nom: String,
          prenom: String,
          email: String,
          telephone: String,
          nomDest: String,
          dateDepart: String,
        },
        { timestamps: true }
      )
    );
  
    return Reservation;
  };