'use strict';
import { users } from './task-object.js';

const calculateTotalBalance = users => users.reduce((acc, item) => acc + item.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
