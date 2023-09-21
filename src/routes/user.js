import  express  from 'express';
import userController from '../controllers/user'
const router = express.Router();

router.get('/', userController.getKakashi);

module.exports = router //export deffault 