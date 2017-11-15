'use strict'

const Mongoose = require('mongoose')

/**
 * Entry schema
 *
 * @type       {<Mongoose.Schema>}
 */

var forumSchema = Mongoose.Schema({
    id: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    created_at: {
      type: Date,
      required: true
    },

    author_name: {
      type: String
      required: true
    }
});

module.exports = Mongoose.model('Forum Post', forumSchema);
