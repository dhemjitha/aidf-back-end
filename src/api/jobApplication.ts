import express from "express";
import { createJobApplication, getJobApplications, getJobApplicationById, deleteJobApplication } from "../application/jobApplication";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import AuthorizationMiddleware from "./middleware/authorization-middleware";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/").post(createJobApplication).get(ClerkExpressRequireAuth({}), AuthorizationMiddleware, getJobApplications);
jobApplicationRouter.route("/:id")
  .get(ClerkExpressRequireAuth({}), AuthorizationMiddleware, getJobApplicationById).delete(ClerkExpressRequireAuth({}), AuthorizationMiddleware, deleteJobApplication);

export default jobApplicationRouter;