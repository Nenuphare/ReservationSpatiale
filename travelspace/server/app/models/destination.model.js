module.exports = mongoose => {
    const Destination = mongoose.model(
      "destination",
      mongoose.Schema(
        {
          idDest: Number,
          nomDest: String,
          description: String,
          tpsTrajet: String
        },
        { timestamps: true }
      )
    );
  
    return Destination;
  };