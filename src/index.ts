import express, {Request,Response} from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
app.post('/register',(req:Request,res:Response)=>{
    const {username,password} = req.body;
    // Logic untuk register user
    res.send("User registered");
})

// Endpoint untuk login user
app.post('/login',(req:Request,res:Response)=>{
    const {username,password} = req.body;
    // Login untuk login user
    res.send("User logged in");
})
// Endpoint untuk menambah product
app.post('/products',(req:Request,res:Response)=>{
    const {name,price} = req.body;
    // Logic untuk menambah product
    res.send("Product Added");
})
// Endpoint untuk mendapatkan semua product
app.get('/products',(req:Request,res:Response)=>{
    // Logic untuk mendapatkan semua product
    res.send("List of products")
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})