const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://adpol95:MlWkg1a2F5o8FtCX@cluster0.izr2wlk.mongodb.net/kanban?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
function dbConnection() {
  mongoose.connect(connectionString, options)
    .then(() => console.log('Mongo connection OK'))
    .catch((err) => console.log(err))
}

module.exports = dbConnection;