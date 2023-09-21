import bodyParser from "body-parser";
import cors from 'cors';
const middleware = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors({ // app dùng hàm use để config và đăng kí middleware như CORS 
        origin: process.env.HOST_NAME, // chỉ cho phép url HOST_NAME truy cập vào app để lấy api - tính năng của CORS
        method: ['GET', 'POST', 'PUT', "DELETE"] // những phương thức cho phép
    }))
}
module.exports = middleware;