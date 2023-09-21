import auth from './auth';
import user from './user';
const initRoutes = (app) => {
    
    app.use('/api/v1/auth', auth);
    app.use('/api/v1/user', user);

}
module.exports = initRoutes;