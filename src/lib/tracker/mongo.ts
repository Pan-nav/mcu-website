import mongoose from "mongoose"
import {MONGO_TRACKING_URI} from "$env/dynamic/private";

// @ts-ignore
mongoose.connect(MONGO_TRACKING_URI)
export const trackerCollection = mongoose.connection.useDb("mc-utils").collection("tracker")