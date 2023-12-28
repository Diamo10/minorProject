import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema(
    {
        fname: String,
        lname: String,
        email: String,
        message : String,
    },
    {
        timestamps: true,
    }
);

const contact = mongoose.models.contact || mongoose.model('Contact', contactSchema);

export default contact;