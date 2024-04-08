export default defineEventHandler(async (event) => {
    const apiKey = useRuntimeConfig(event).sendgridApiKey;
    const mailTo = JSON.parse(await readBody(event));
    const message = {
        personalizations: [
            {
                to: [{ email: "nikitagaluh@kapusin.si" }],
            },
        ],
        from: { email: "nikitagaluh@kapusin.si" },
        reply_to: {
            email: mailTo.email,
            name: "Contact Form",
        },
        subject: "New message from your website",
        content: [{ type: 'text/plain', value: mailTo.message }],
    };
    await sendMail(apiKey, message);
});


async function sendMail(apiKey: string, message: any){
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(message),
    });
}