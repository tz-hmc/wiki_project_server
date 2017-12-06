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

module.exports = {
  Mongoose.model('Forumpost', forumSchema);
  createPost(p) {
    var post = new Forumpost({id: 1,
                              text: p.text,
                              title: p.title,
                              author_name: p.author_name
                            });
    post.save(function(err, post) {
      if(err) console.log("Could not save forum post.");
    });
  }
}
