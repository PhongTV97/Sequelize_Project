import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const syncData = (database) => {
// Create all the table defined using 
// sequelize in Database
  
// Sync all models that are not
// already in the database
database.sync() 
  
// Force sync all models
// It will drop the table first 
// and re-create it afterwards

// database.sync({force:true});

}

export const sendMail = (toEmail, description, subject) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD_EMAIL
        }
      });

      let mailOptions = {
        from: process.env.EMAIL,
        to: toEmail,
        subject: subject,
        text: description
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}