const app = require('./app');

const port =  8080 ;


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});