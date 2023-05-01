const cors = require("cors");
module.exports = function(app) {
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type',
  //   );
  //   if (req.method === 'OPTION') {
  //     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  //     return res.status(200).json({});
  //   }
  //   next();
  // });

  app.use(cors({
    origin: "https://todolistv2-adpol95.b4a.run",
    allowedHeaders: ['Origin, X-Requested-With, Content-Type'],
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }))
}
