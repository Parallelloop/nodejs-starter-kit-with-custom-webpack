const nodemailer = require('nodemailer');

export const sendEmail = async (email, userName, subject, bodyPart) => {
  let transporter = nodemailer.createTransport({
    host: "your host name goes here",
    secureConnection: false,
    port: 587,
    requiresAuth: true,
    auth: {
      user: "your host email goes here", // generated ethereal user
      pass:  "you host password goes here"// generated ethereal password
    },
    // debug: true,
    // logger: true,
  });

  let info = await transporter.sendMail({
    from: 'name@example.com', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: bodyPart, // html body
  });

  // console.log(info);
}
