// TODO écouter le flux et si poids supérieur à x envoyer un email

// https://sendgrid.com/en-us

// api key : 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


const amqp = require('amqplib');
const db = require('./database/db');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

async function subscribe() {


    
    sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(8000);

    

    const conn = await amqp.connect(`amqp://${process.env.BROKER_HOST}`); // ou l'URL de votre broker RabbitMQ
    const channel = await conn.createChannel();

    const queue = 'myQueue';
    await channel.assertQueue(queue, {
        durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function (msg) {
        console.log(" [x] Received %s", msg.content.toString());

        const poidsMax = 1000;
        const seuilPoids = poidsMax * 0.75;
        if (msg.content.poids >= seuilPoids) {
            const msg = {
                to: 'medinateo64@gmail.com',
                from: 'bacpluskatre@gmail.com',
                subject: '[BAC ALERTE] Seuil atteint',
                text: 'Le bac à déchets a franchi le seuil des 75% de remplissage, -|BacBac|- over.',
            }
            sgMail
            .send(msg)
            .then(() => {
                console.log('Alerte BAC envoyée par email.')
            })
            .catch((error) => {
                console.error(error)
            })
        }


    }, {
        noAck: true
    });
}


