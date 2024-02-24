const nodeMailer = require("nodemailer");

const sendEmail = async(subject, message, send_to, sent_from, reply_to) => {
    // Set up transporter
    const transporter = nodeMailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: '587',
        secure: false,
        logger: true,
        debug: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        // Not required, but makes security lax to avoid HTTPS requirement errors
        tls: {
            rejectUnauthorized: false,
        }
    });

    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message
    };

    // Send email
    transporter.sendMail(options, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
};

module.exports = sendEmail;