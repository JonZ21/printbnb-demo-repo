import { Schema, model } from "mongoose";

const PropertySchema = new Schema({
    propertyName: String,
    filaments: [String],
    location: String,
    availability: Boolean,
    price: Number,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

export default model('Property', PropertySchema);