const mongoose = require('mongoose');
const Schema = mongoose.Schema

const placeSchema = Schema({
    locationName: String,
    activities: [String],
    description: String,
    photo: String,
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    messages: [String]
  });


placeSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    locationName: this.locationName,
    activities: this.activities,
    description: this.description,
    photo: this.photo
  };
}

const Place = mongoose.model('Place', placeSchema);

module.exports = { Place };