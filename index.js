import app from './src/app/app.js';
import {PORT} from './src/config/config.js';

app.use((req, res, next) => {
    return res.status(200).json("Welcome to StudyBuddy");
  });
  

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

