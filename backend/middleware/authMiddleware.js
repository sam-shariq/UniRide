module.exports = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      req.user = await admin.auth().verifyIdToken(token);
      next();
    } catch {
      res.status(401).json({ error: "Unauthorized" });
    }
  };
  