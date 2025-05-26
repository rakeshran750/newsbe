const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
require('dotenv').config();
const app = express();
const newRouter = require('./routes/newsRoute')


// Middleware
app.use(express.json());
app.use(cors());


//insert news news
// (async () => {
//     try {
//         // `https://www.livehindustan.com/bihar/madhubani/news`,
//         // `https://www.jagran.com/bihar/madhubani`,
//       const urls = [
//         `https://www.livehindustan.com/bihar/madhubani/news`
//       ];
  
//       for (const url of urls) {
//         await scrapeNews(url);
//       }
  
//       console.log("News scraping completed.");

//     } catch (error) {
//       console.error('Error generating news:', error.message);
//     }
//   })();

  

// Routes
app.use('/api', newRouter);

// Port setup
const port = process.env.PORT || 3001;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port no: ${port}`);
  });
}).catch((err) => {
  console.error("DB connection failed:", err);
});


// localhost:3000/api/today/data