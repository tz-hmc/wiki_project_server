// this is a comment
'use strict'

const Mongoose = require('mongoose')

/**
 * Entry schema
 *
 * @type       {<Mongoose.Schema>}
 */

var forumSchema = Mongoose.Schema({
    id: {
      type: String,
    },

    category: {
      type: String,
    },

    title: {
      type: String,
    },

    created_at: {
      type: Date,
    },

    author_name: {
      type: String
    }
});

module.exports = Mongoose.model('Forum Post', forumSchema);
