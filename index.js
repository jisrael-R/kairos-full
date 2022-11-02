const express = require('express');
const bodyParser = require('body-parser');
const nodemailer= require('nodemailer');
const cors = require('cors');
const path = require('path')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended:true})));
app.use(cors());
app.use(express.static(path.join(__dirname +"/client/build")));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname +"/client/build","index.html"));
})

app.get('/send',(req,res)=>{
    res.send('hello,Kairos-App')
})
app.get("http://kairostechservices.com/.well-known/acme-challenge/8an2sktr8rE5iFk2Y5EOrk2_xCY1cwL3b_KQDcsSOW8",(req,res)=>{
    res.send('8an2sktr8rE5iFk2Y5EOrk2_xCY1cwL3b_KQDcsSOW8.ifzS3BGCFgjXtTS_-Glx2ZMaMjIIpoK59AziiJlY-gk')
})
app.post('/api/form',(req,res)=>{
    
    let data = req.body;
    
    let smtpTransport = nodemailer.createTransport({
       host:'send.smtp.mailtrap.io',
       port:'587',
       auth:{
        user:'api',
        pass:'52f56eb4949471456876fb809991016d'
       }
       
    })

    
     
    let mailOptions = {
        from:`${data.name} ${data.lastname}<mailtrap@kairostechservices.com>`,
        to:'Info@kairostechservices.com',
        subject:`[${data.name} ${data.lastname}] - ${data.service}`,
        html:`
             <div class="message">
                 <h2>${data.name} ${data.lastname}</h2>
                 <ul>
                 <li>Email: <strong>${data.email}</strong></li>
                 <li>Phone: <strong>${data.phone}</strong></li>
                 <li>Service: <strong>${data.service}</strong></li>
                 </ul>
                
                 <br/>

                 <h3>Message:</h3>
                <p>${data.message}!!</p>
                </div>
               `
    };
    
    smtpTransport.verify(function(error, success) {
  if (error) {
        console.log(error);
  } else {
        console.log('Server is ready to take our messages');
  }
});
    smtpTransport.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(error);
        } console.log('Message sent: %s', info.messageId);
    })
    smtpTransport.close();
})


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server now listening on port ${PORT}`);
})