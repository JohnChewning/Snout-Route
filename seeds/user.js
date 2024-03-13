const db = require('./config/db');

const users = [
    {username: 'user-1', email: 'user-1@example.com'},
    {username: 'user-2', email: 'user-2@example.com'},
];

users.forEach(user => {
    db.addUser(user);
});

console.log('User seeded:', db.users)