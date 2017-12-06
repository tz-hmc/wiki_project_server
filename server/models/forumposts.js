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

    title: {
      type: String,
    },

    author_name: {
      type: String
    },

    text: {
      type: String
    }
});

var forumPost = Mongoose.model('ForumPost', forumSchema);
module.exports = forumPost;

