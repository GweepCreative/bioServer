import mongoose from "mongoose";
import type { User } from "../../types/User";

const UserSchema = new mongoose.Schema<User>({
  userid: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
  isBanned: { type: Boolean, required: true, default: false },
  banReason: { type: String },
  role: { type: String, required: true, default: "user" },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  profile: {
    username: { type: String, required: true },
    email: { type: String, required: true },
    displayName: { type: String, required: true },
    avatar: { type: String },
    banner: { type: String },
    description: { type: String },
  },
  socials: {
    twitter: { type: String },
    instagram: { type: String },
    github: { type: String },
    website: { type: String },
  },
});

export default mongoose.model<User>("User", UserSchema);
