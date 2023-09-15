module.exports = mongoose => {
    const Reservation = mongoose.model(
      "reservation",
      mongoose.Schema(
        {
          _id : String,
          name: String,
          firstname: String,
          email: String,
          telephone: String,
          programme: String,
          date: String
        },
        { timestamps: true }
      )
    );
  
    return Reservation;
  };