import express, { json, urlencoded } from 'express';
import razorpay from 'razorpay';
import cors from 'cors';
import crypto from 'crypto';

const port = 3005


const app = express();
app.use(json())
app.use(urlencoded({extended:false}));
app.use(cors());

app.get("/",(req, res) => {
    res.send('server running')
})


app.post("/order", async (req, res) => {try {const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
    });if(!req.body){
    return res.status(400).send("Bad Request");}
    const options = req.body;const order = await razorpay.orders.create(options);if(!order){
    return res.status(400).send("Bad Request");
    }res.json(order);
    } catch (error) {
    console.log(error);
    res.status(500).send(error);
    }
    })


    app.post("/validate", async (req, res) => {
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body
   

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);

    sha.update(`${razorpay_order_id} | ${razorpay_payment_id}`)

    const digest = sha.digest("hex")

    if(digest!== razorpay_signature) {
        return res.status(400).json({msg:"transition is not legit"})
    }
    res.json({msg: 'transition is legit', orderId: razorpay_order_id, paymentId: razorpay_payment_id})
 })
app.listen(port, () => {
    console.log(`running ${port}`);
    
})