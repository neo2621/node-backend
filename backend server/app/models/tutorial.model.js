module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          title: String,
          age: Number,
          gender: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );

      return Tutorial;
    };