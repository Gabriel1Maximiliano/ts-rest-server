const express = require('express');
const diaryRouter = require('./routes/diaries');
const app = express();
app.use(express.json());

const PORT = 3000;
app.get('/ping',(req:any,res:any):any=>{
    console.log('hola desde ping')
res.send('hola desde ping')
})
app.use('/api/diaries',diaryRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))