const User = require('./User');
const Article = require('./Articles');
const Comment = require('./Comment');

User.hasMany(Article, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Article.belongsTo(User, {
  foreignKey: 'user_id'
});

Article.hasMany(Comment,{
  foreignKey: 'article_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Article, Comment };