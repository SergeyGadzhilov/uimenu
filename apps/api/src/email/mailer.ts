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
        host: "sandbox.smtp.mailtrap.io",
        port: 25,
        auth: {
            user: "a073fc5a0285c5",
            pass: "bc1ce75ee42394"
        }
    });

    try {
        await transport.sendMail(email);
    }
    catch(err) {
        console.error(`fail to send email to ${email.to} due to: ${JSON.stringify(err)}`);
    }
}