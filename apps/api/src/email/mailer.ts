import * as nodemailer from 'nodemailer';
import * as ejs from "ejs";
import * as path from 'path';

class Email {
    from: string;
    to: string;
    subject: string;
    template: string;
    data: {};
};

export async function SendPasswordResetMail(to: string, resetUrl: string) : Promise<void> {
    await SendEmail({
        from: "UIMenu <no-reply@uimenu.com>",
        to,
        subject: "UIMenu reset password",
        template: "reset_password",
        data: { reset_url: resetUrl }
    });
}

async function getEmailContent(email) {
    const template = path.join(__dirname, "..", "assets", "emails", `${email.template}.ejs`);
    return await ejs.renderFile(template, email.data);
}

export async function SendEmail(email: Email) : Promise<void> {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT) || 25,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        const content = await getEmailContent(email);
        await transport.sendMail({
            from: email.from,
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