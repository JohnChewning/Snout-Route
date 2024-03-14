const db = require('./db');

const comments = [
    {text: 'Comment 1', author: 'user-1'},
    {text: 'Comment 2', author: 'user-2'}
];

comments.forEach(comment => {
    db.addComment(comment);
});

console.log('Comments seeded:', db.comments);