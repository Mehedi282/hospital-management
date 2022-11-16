const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cors(), express.json());
app.use(cookieParser());


const adminRoute = require('./Routes/admin');
const DoctorRoute = require('./Routes/doctor');
const AppointmentRoute = require('./Routes/appointment');
const servicesRoute = require('./Routes/services');
const RoomRoute = require('./Routes/room');
const wardRoute = require('./Routes/ward');
const medichinedtlsRoute = require('./Routes/medichinedtls');







const port = process.env.PORT || 5000;

mongoose.connect(`mongodb://localhost:27017/hospitalManagemnet`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Succesfully')
})

app.use('/api', adminRoute);
app.use('/api', DoctorRoute);
app.use('/api', AppointmentRoute);
app.use('/api', servicesRoute);
app.use('/api', RoomRoute);
app.use('/api', wardRoute);
app.use('/api', medichinedtlsRoute);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})