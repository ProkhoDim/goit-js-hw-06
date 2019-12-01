'use strict';
import { users } from './task-object.js';

const getInactiveUsers = users => users.filter(item => !item.isActive);

console.log(getInactiveUsers(users));
