const nodemailer = require('nodemailer');


const sendEmail = async (donorEmail, requesterEmail, itemName) => {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    
        // Email content for donor
        const mailToDonor = {
            from: "Helping Hands <helping.hands@example.com>",
            to: donorEmail,
            subject: `Your donation of ${itemName} is ready for next step!`,
            text: `You have accepted the request for ${itemName}. Please contact the requester at ${requesterEmail} to arrange the pickup or delivery. Thank you for your generosity!`,
        };
    
        // Email content for requester
        const mailToRequester = {
            from: "Helping Hands <helping.hands@example.com>",
            to: requesterEmail,
            subject: `Good news! Your request for ${itemName} has been accepted!`,
            text: `Your request for ${itemName} has been accepted by the donor. Please contact the donor at ${donorEmail} to arrange the pickup or delivery. Thank you for using Helping Hands!`,
        }
    
        const infoMessage = await promises.all([
            transporter.sendMail(mailToDonor),
            transporter.sendMail(mailToRequester)
        ]);

        console.log("Emails sent: ", infoMessage[0].messageId);
        return true;
    } catch (error) {
        console.error("Error sending emails: ", error);
        return false;
    }
};

module.exports = {
    sendEmail,
};
    

