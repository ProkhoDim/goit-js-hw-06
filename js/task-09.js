'use strict';
import { users } from './task-object.js';

const getNamesSortedByFriendsCount = users => {
  const sortedArray = [...users];

  sortedArray.sort((currItem, anotherItem) => currItem.friends.length - anotherItem.friends.length);
  console.log(sortedArray);
  return sortedArray.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
