const express = require('express');
const bodyParser = require('body-parser');
const nodemailer= require('nodemailer');
const cors = require('cors');
const path = require('path')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended:true})));
app.use(cors());
app.use(express.static(path.join(__dirname +"/public")))


// const { MailtrapClient } = require("mailtrap");

// const TOKEN = "52f56eb4949471456876fb809991016d";
// const ENDPOINT = "https://send.api.mailtrap.io/";

// const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

// const sender = {
//   email: "jorman.iisrael@me.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "mailtrap@kairostechservices.com",
//   }
// ];

// client
//   .send({
//     from:  sender,
//     to:recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
app.post('/api/form',(req,res)=>{
    
    let data = req.body;
    
    let smtpTransport = nodemailer.createTransport({
       host:'smtp.mailtrap.io',
       port:'587',
       auth:{
        user:'493d105f2859ae',
        pass:'66e9f0e12e0fb0'
    

       }
       
    })

    
     
    let mailOptions = {
          from:data.email,
        to:'unusualrhythms@gmail.com',
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