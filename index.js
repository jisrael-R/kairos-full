const express = require('express');
const bodyParser = require('body-parser');
const nodemailer= require('nodemailer');
const cors = require('cors');
const {google} = require('googleapis');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended:true})));
app.use(cors());

const CLIENT_ID= '460654515572-j0l9p3d98eusv1ond4lcnv4r1ggiduro.apps.googleusercontent.com';
const CLIENT_SECRET='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';
const REDIRECT_URI='https://developers.google.com/oauthplayground';
const REFRESH_TOKEN='1//047BmMbycMZChCgYIARAAGAQSNwF-L9IrM6iYo21mCyIdovkdY3_GT4ZldED-aOOfWStDiZ7QKRdJnJ4lifuE7I0AlqYIrdCJqTM';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
// app.get('/',()=>{
//     resizeBy.send('welcome to my form')
// })

app.post('/api/form',async(req,res)=>{
    const accessToken = await oAuth2Client.getAccessToken()
    let data = req.body;
    
    let smtpTransport = nodemailer.createTransport({
       service:'gmail',
            auth:{
                type:'OAuth2',
                user:'unusualrhythms@gmail.com',
                clientId:CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken: accessToken

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
    

    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            response.send(error)
        }else(response.send(`Success`))
    })
    smtpTransport.close();
})


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server now listening on port ${PORT}`);
})