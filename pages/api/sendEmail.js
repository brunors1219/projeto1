import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
});

try {
	const message = await client.sendAsync({
		text: 'Bem Vindo',
		from: 'bww963w@gmail.com',
		to: 'brunors1219@gmail.com',
		subject: 'teste',
	});
	console.log(message);
} catch (err) {
	console.error(err);
}
    res.status(200).json({ mesange: 'send email'});
  }