'use strict';
import { users } from './task-object.js';

const getUsersWithFriend = (users, friendName) =>
  users.reduce(
    (acc, item) => (item.friends.some(indx => indx === friendName) ? [...acc, item.name] : acc),
    [],
  );

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
