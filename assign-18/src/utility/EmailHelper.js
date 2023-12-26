const nodemailer = require('nodemailer')

const EmailSend = async (EmailTo , EmailText , EmailSubject  ) =>{

   let Transport =  nodemailer.createTransport(
        {
            host:"mail.teamrabbil.com",
            port: 25,
            secure: false ,
            auth:{user:"info@teamrabbil.com" , pass:"~sR4[bhaC[Qs"},
            tls:{rejectUnauthorized:false}
        }
    )

    let mailOption={
        from : 'MERN Ecommerce Web <info@teamrabbil.com>',
        to:EmailTo ,
        subject: EmailSubject ,
        text:EmailText
    }

    return await Transport.sendMail(mailOption);
}

module.exports = EmailSend