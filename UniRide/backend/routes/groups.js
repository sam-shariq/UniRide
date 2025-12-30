const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase");

router.post("/create", async (req, res) => {
  const { users, totalFare } = req.body;
  const perPerson = Math.round(totalFare / users.length);

  const doc = await db.collection("groups").add({
    users,
    perPerson,
    createdAt: Date.now(),
  });

  res.json({ groupId: doc.id, perPerson });
});

module.exports = router;
