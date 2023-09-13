module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema.methode("toJSON", function() {
        const {__v,_id,...object} = this.toObject(); 
        object.id = _id;
        return object;})(
        {
          _id: String,
          nom: String,
          prenom: String,
          telephone: String,
          email: String,
          texte: String,
          mdp:String
        },
        { timestamps: true }
      )
    );
  
    return User;
  };