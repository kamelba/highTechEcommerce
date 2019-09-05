
//const express = require("express");
//const router = express.Router();

const router = require("express").Router();


// Contact Model
const AnnonceModel = require('../model/annonceModel');


router.get("/allAnnonce", (req, res) => {
  AnnonceModel.find()
    .then(annonce => res.json(annonce))
    .catch(err => res.send("cannot get"));
});
//addAnnonce
router.post("/addAnnonce", (req, res) => {
  const {title,category,description,price,brand,imga,imgb}=req.body
  const newAnnonce = new AnnonceModel({
    title,
    category,
    description, 
    price,
    brand,
    imga,
    imgb
  });

  newAnnonce
    .save()
    .then(annonce => res.json(annonce))
    .catch(err => res.send("cannot post"));
});




router.delete("/:id", (req, res) => {
  AnnonceModel.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

router.put("/:id", (req, res) => {
  const annonce = req.body;
  AnnonceModel.findOneAndUpdate({ _id: req.params.id }, { $set: { ...annonce } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});





module.exports = router;
