import * as nodemailer from 'nodemailer';
import * as ejs from "ejs";
import * as path from 'path';

class Email {
    to: string;
    subject: string;
    template: string;
    data: {};
};

export async function SendPasswordResetMail(to: string, resetUrl: string) : Promise<void> {
    await SendEmail({
        to,
        subject: "UIMenu reset password",
        template: "reset_password",
        data: { reset_url: resetUrl }
    });
}

async function SendEmail(email: Email) : Promise<void> {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
        port: parseInt(process.env.EMAIL_PORT) || 25,
        auth: {
            user: process.env.EMAIL_USER || "a073fc5a0285c5",
            pass: process.env.EMAIL_PASS || "bc1ce75ee42394"
        }
    });

    try {
        const template = path.join(__dirname, "..", "assets", "emails", `${email.template}.ejs`);
        const content = await ejs.renderFile(template, email.data);
        await transport.sendMail({
            from: "UIMenu <no-reply@uimenu.com>",
            to: email.to,
            subject: email.subject,
            html: content
        });
    }
    catch(err) {
        console.error(`fail to send email: ${err}`);
        throw err;
    }
}