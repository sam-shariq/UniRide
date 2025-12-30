const express = require("express");
const router = express.Router();
const { admin, db } = require("../config/firebase");

router.post("/verify", async (req, res) => {
  const { token } = req.body;
  const decoded = await admin.auth().verifyIdToken(token);

  await db.collection("users").doc(decoded.uid).set({
    uid: decoded.uid,
    email: decoded.email,
    name: decoded.name,
    rating: 5,
  }, { merge: true });

  res.json({ success: true });
});

module.exports = router;
