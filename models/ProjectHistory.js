const mongoose = require("mongoose");
const role = require("../config/role");
const Schema = mongoose.Schema;
const projectHistorySchema = new Schema({
  ProjectTitle: {
    type: String,
    default: "",
  },
  SAPID: {
    type: String,
    default: "",
  },
  LoanNumber: {
    type: String,
    default: "",
  },
  TaskManager: {
    type: String,
    default: "",
  },
  Sector: {
    type: String,
    default: "",
  },
  NoofProject: {
    type: String,
    default: "",
  },
  OperationType: {
    type: String,
    default: "",
  },
  ImpRegion: {
    type: String,
    default: "",
  },
  StatePIU: {
    type: String,
    default: "",
  },
  FederalPIU: {
    type: String,
    default: "",
  },
  TotalPIU: {
    type: String,
    default: "",
  },
  Type: {
    type: String,
    default: "",
  },
  Location: {
    type: String,
    default: "",
  },
  Location2: {
    type: String,
    default: "",
  },
  LoanNumber2: {
    type: String,
    default: "",
  },
  Status: {
    type: String,
    default: "",
  },
  ApprovedUSDM: {
    type: String,
    default: "",
  },
  Disbursednot: {
    type: String,
    default: "",
  },
  Balance: {
    type: String,
    default: "",
  },
  Disbursed: {
    type: String,
    default: "",
  },
  ApprovedDate: {
    type: String,
    default: "",
  },
  Age: {
    type: String,
    default: "",
  },
  Commitmentdate: {
    type: String,
    default: "",
  },
  FinalDisbursedDate: {
    type: String,
    default: "",
  },
  FinishDate: {
    type: String,
    default: "",
  },
  FinancingProduct: {
    type: String,
    default: "",
  },
  FinancingWindow: {
    type: String,
    default: "",
  },
  TotalHi5s: {
    type: String,
    default: "",
  },
  IntegrateAfrica: {
    type: String,
    default: "",
  },
  IndustrializeAfrica: {
    type: String,
    default: "",
  },
  LightUpandPowerAfrica: {
    type: String,
    default: "",
  },
  FeedAfrica: {
    type: String,
    default: "",
  },
  ImproveQualityofLife: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = projectHistoryModel = mongoose.model(
  "projectHistoryMode",
  projectHistorySchema
);
