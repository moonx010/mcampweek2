import community from './community';
import mystore from './mystore';
import auth from './auth';
export default {
    ...community,
    ...mystore,
    ...auth,
};
