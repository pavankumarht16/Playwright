import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())

let items =[];

app.get('/api/items', (req,res)=>{
    res.json(items)
})

app.post('/api/items',(req,res)=>{
    const item={
        id:Date.now(),
        name:req.body.name,
        price:req.body.price
    }
    items.push(item)
    res.status(201).json(item)
})

app.listen(5000,()=>{
    console.log(`server running on http://localhost:5000`)
})