import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

export class Email {
    from: string;
    to: string;
    subject: string;
    body: string;
};

export async function SendEmail(email: MailOptions) {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
        port: parseInt(process.env.EMAIL_PORT) || 25,
        auth: {
            user: process.env.EMAIL_USER || "a073fc5a0285c5",
            pass: process.env.EMAIL_PASS || "bc1ce75ee42394"
        }
    });

    try {
        await transport.sendMail(email);
    }
    catch(err) {
        console.error(`fail to send email to ${email.to} due to: ${JSON.stringify(err)}`);
    }
}