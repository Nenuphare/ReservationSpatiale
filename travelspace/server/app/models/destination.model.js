module.exports = mongoose => {
    const Destination = mongoose.model(
      "destination",
      mongoose.Schema.methode("toJSON", function() {
        const {__v,_id,...object} = this.toObject(); 
        object.id=_id;
        return object;})(
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