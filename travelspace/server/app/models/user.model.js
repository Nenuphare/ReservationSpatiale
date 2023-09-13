module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
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