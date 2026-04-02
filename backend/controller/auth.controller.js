const signup = async (req, res) => {
  try {
    res.send({ message: "signup ok" });
  } catch (error) {
    res.send({ message: "Error" });
  }
};

module.exports = signup;
