export default defineEventHandler(async (event) => {
    const apiKey = useRuntimeConfig(event).sendgridApiKey;
    const mailTo = await readBody(event);
    const message = {
        personalizations: [
            {
                to: [{ email: "nikitakapusin@gmail.com" }],
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
    console.log("sent");
    await sendMail(apiKey, message);
    console.log("sent");
    return {
        statusCode: 200,
        body: "Mail sent",
    };
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
    if(!response.ok){
        throw new Error(await response.text());
    }
}