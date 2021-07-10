const projectRotuer = require("express").Router();
const projectHistoryModel = require("../models/ProjectHistory");
const projectModel = require("../models/Project");

// project route
projectRotuer.post("/uploadxl", (req, res) => {
  req.body.data.map((el) => {
    new projectModel({
      ProjectTitle: el["Project Title"],
      SAPID: el["SAP ID"],
      CITY: el.CITY,
      lat: el.lat,
      lng: el.lng,
      country: el.country,
      iso: el.iso,
      STATE: el.STATE,
      capital: el.capital,
      population: el.population,
      population_proper: el.population_proper,
      Type: el.Type,
      MissionDelivery: el[""],
      TypeofMission: el["Type of Mission"],
      MissionStartDate: el["Mission Start Date"],
      MissionEndDate: el["Mission End Date"],
      Status: el.Status,
      TeamLeader: el["Team Leader"],
      Team: el["Team Member"],
      MissionNotification: el["Mission Notification"],
      AideMemoire: el["Aide Memoire"],
      TOR: el.TOR,
      BTOR: el.BTOR,
    })
      .save()
      .then((resp) => {
        console.log("data saved");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  res.json({ message: "Data is beingsaving " });
});

projectRotuer.get("/getprojectdata", (req, res) => {
  console.log("relese data");
  projectModel.find().then((doc) => {
    res.json(doc);
  });
});
// projectRotuer.post("/uploadxl", (req, res) => {
//   console.log("r", req.body);
// });

module.exports = projectRotuer;
