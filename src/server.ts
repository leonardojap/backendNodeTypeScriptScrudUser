//import global app express instance
import app from "./app";

//router aplication, define all routes in our app, and redirect to respective controller
import router from './routes/router';

//port to run in server
const PORT = 3000;

//base url and call router to map
app.use("/api", router)

// start server
app.listen(PORT, () => {
    console.log(`API REST running in port ${PORT}`);
})