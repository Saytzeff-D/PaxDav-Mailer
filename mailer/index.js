    const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.SITE_EMAIL,
        pass: process.env.SITE_PASSWORD
    }
})

const mailOption = (fullname, email)=>{
    return {
        from: `PaxDav Technologies ${process.env.SITE_EMAIL}`,
        to: email,
        subject: `Thank You for Requesting a Quote! 🚀`,
        html: `
            <center style='font-size: large; font-family: Poppins, sans-serif;'>
                <div style='flex:0 0 auto; width:66.666666%'>
                    <center style='margin-bottom: 25px; background-color: #000000;'>
                        <img src='https://res.cloudinary.com/ololadedavid15/image/upload/v1742217524/PaxDav/u2fhqulnl3byhmgusehc.png' />
                    </center>
                    <p style="font-family: Poppins, sans-serif; text-align: left;">
                        <b>Dear ${fullname},</b>
                    </p>
                    <p style='text-align: left'>
                        Thank you for reaching out to PaxDav Technologies! We've received your request for a quote, and our team is reviewing the details to provide you with the best possible solution.
                    </p>
                    <p style='text-align: left; font-family: Poppins, sans-serif;'>
                        We'll get back to you shortly with the next steps. In the meantime, feel free to reply to this email if you have any specific questions or additional details to share.
                    </p>
                    <p style='font-family: Poppins, sans-serif; text-align: left;'>
                        Looking forward to working with you!
                    </p>
                    <p style='font-family: Poppins, sans-serif; text-align: left'>
                        Best regards,
                    </p>
                    <p style='font-family: Poppins, sans-serif; text-align: left; color: #01D564'>
                        <b>
                            PaxDav Technologies
                        </b>  
                    </p>                   
                </div>
            </center>
        `
    }
}

const newMessageMail = (sender, email, text, receiver, title, id)=>{
    const admins = ['tech.paxdav@gmail.com']
    const inboxLink = receiver == 'Admin' ? process.env.ADMIN_CHAT : `${process.env.CLIENT_CHAT}/${id}`
    return {
        from: `PaxDav Technologies ${process.env.SITE_EMAIL}`,
        to: email == 'Admin' ? admins : email,
        subject: `You've got new messages from ${sender == 'Admin' ? 'us' : sender}`,
        html: `
            <center style='font-size: large; font-family: Poppins, sans-serif;'>
                <div style='flex:0 0 auto; width:66.666666%'>
                    <center style='margin-bottom: 25px; background-color: #000000;'>
                        <img src='https://res.cloudinary.com/ololadedavid15/image/upload/v1742217524/PaxDav/u2fhqulnl3byhmgusehc.png' />
                    </center>
                    <div style='text-align: left'>
                        <b style="font-family: Poppins, sans-serif;">1 new messages for you</b>
                    </div>
                    <p style='font-family: Poppins, sans-serif; text-align: left'>
                        Hi ${receiver},
                    </p>
                    <p style='font-family: Poppins, sans-serif; text-align: left'>
                        ${sender == 'Admin' ? 'We' : sender} left you messages in regards to the Quote, ${title}:
                    </p>
                    <p style='font-family: Poppins, sans-serif; font-style: italic; text-align: left;'>
                        ${text}
                    </p>
                    <div>
                        <a href='${inboxLink}' style='text-align: left; padding: 10px 20px; color: white; text-decoration: none; border-radius: 5px; background-color: #01D564; border: none;'>
                            Go to your Inbox
                        </a>
                    </div>
                    <p style='font-family: Poppins, sans-serif; text-align: left; color: #01D564'>
                        <b>
                            PaxDav Technologies
                        </b>  
                    </p>                  
                </div>
            </center>
        `
    }
}

module.exports = { transporter, mailOption, newMessageMail }