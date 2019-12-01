'use strict';
import { users } from './task-object.js';

const getUserWithEmail = (users, email) => users.find(item => item.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
