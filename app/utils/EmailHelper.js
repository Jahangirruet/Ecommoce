/*
import  nodemailer  from "nodemailer";

export const EmailSend = async(EmailTo,EmailText,EmailSubject)=>{
   let transport =  nodemailer.createTestAccount( {
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })

    let mailOption = {
        from: "MERN ECOMMERCE SOLUTION <info@teamrabbil.com>",
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    }

    return await transport.sendMail(mailOption)
}
*/

import  nodemailer  from "nodemailer";


let transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
    tls:{rejectUnauthorized:false}
});

export const EmailSend = async(EmailTo,EmailText,EmailSubject)=>{
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: "MERN ECOMMERCE SOLUTION <info@teamrabbil.com>",
              to: EmailTo,
              subject: EmailSubject,
              text: EmailText
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      main().catch(console.error);
}


// async..await is not allowed in global scope, must use a wrapper


//main().catch(console.error);


