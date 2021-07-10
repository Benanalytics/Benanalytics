const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema({
  ProjectTitle: {
    type: String,
    default: "",
  },
  SAPID: {
    type: String,
    default: "",
  },
  CITY: {
    type: String,
    default: "",
  },
  lat: {
    type: String,
    default: "",
  },
  lng: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  iso: {
    type: String,
    default: "",
  },
  STATE: {
    type: String,
    default: "",
  },
  capital: {
    type: String,
    default: "",
  },
  population: {
    type: String,
    default: "",
  },
  population_proper: {
    type: String,
    default: "",
  },
  Type: {
    type: String,
    default: "",
  },
  MissionDelivery: {
    type: String,
    default: "",
  },
  TypeofMission: {
    type: String,
    default: "",
  },
  MissionStartDate: {
    type: String,
    default: "",
  },
  MissionEndDate: {
    type: String,
    default: "",
  },
  Status: {
    type: String,
    default: "",
  },
  TeamLeader: {
    type: String,
    default: "",
  },
  Team: {
    type: String,
    default: "",
  },
  MissionNotification: {
    type: String,
    default: "",
  },
  Aide: {
    type: String,
    default: "",
  },
  TOR: {
    type: String,
    default: "",
  },
  BTOR: {
    type: String,
    default: "",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = projectModel = mongoose.model("projectModel", projectSchema);
