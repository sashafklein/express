
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('posts/index', { title: 'Posts' });
};

exports.new = function(req, res){
  res.render('posts/new', { title: 'New Post' });
};