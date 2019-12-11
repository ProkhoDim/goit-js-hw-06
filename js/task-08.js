'use strict';
import { users } from './task-object.js';

const getUsersWithFriend = (users, friendName) =>
  users.filter(item => item.friends.some(indx => indx === friendName)).map(item => item.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
