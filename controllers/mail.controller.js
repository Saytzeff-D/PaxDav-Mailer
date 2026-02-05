const { transporter, mailOption, newMessageMail } = require("../mailer")

const mailUser = (req, res) =>{
    const payload = req.body
    transporter.sendMail(mailOption(payload.fullname, payload.email)).then(info=>{        
        res.status(200).json({message: 'Mail sent successfully'})
    }).catch(err=>{        
        res.status(500).json({message: 'An error occurred while sending mail', error: err})
    })
}

const newMsg = (req, res) =>{
    const payload = req.body    
    transporter.sendMail(newMessageMail(payload.sender, payload.email, payload.text, payload.receiver, payload.title, payload.id ? payload.id : null)).then(info=>{
        res.status(200).json({message: 'Mail sent successfully'})
    }).catch(err=>{
        res.status(500).json({message: 'An error occurred while sending mail', error: err})
    })
}

module.exports = { mailUser, newMsg }