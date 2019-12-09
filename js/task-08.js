'use strict';
import { users } from './task-object.js';

const getUsersWithFriend = (users, friendName) =>
  users.reduce((acc, item) => {
    if (item.friends.some(indx => indx === friendName)) {
      acc.push(item.name);
      return acc;
    }
    return acc;
  }, []);
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
