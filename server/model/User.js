import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: { 
    type: String, // غالبًا clerkId
    required: true 
  },
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ["user", "hotelOwner", "admin"], 
    default: "user" 
  },
  recentSearchCities: [
    {
      type: String
    }
  ],
}, { timestamps: true }); // يضيف createdAt و updatedAt تلقائيًا

export const User = mongoose.model('User', userSchema);
