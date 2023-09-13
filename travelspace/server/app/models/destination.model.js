module.exports = mongoose => {
    const Destination = mongoose.model(
      "destination",
      mongoose.Schema(
        {
          _id: String,
          idDest: String,
          nomDest: String,
          description: String,
          tpsTrajet: String
        },
        { timestamps: true }
      )
    );
  
    return Destination;
  };