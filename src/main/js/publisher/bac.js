#!/usr/bin/env node

const amqp = require('amqplib');

// générer un poids random
function genPoidsRandom(poidsMax) {
    return Math.random() * poidsMax;
}

async function publishMessage(channel, queue, message) {
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(" [x] Sent %s", message);
}

async function publish() {

    const poidsMax = 1000;
    const interval = 3000; // 5 minutes

    // const id = process.env.ID;

    sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(10000);

    const conn = await amqp.connect(`amqp://${process.env.BROKER_HOST}`); // ou l'URL de votre broker RabbitMQ
    const channel = await conn.createChannel();
  
    const queue = 'myQueue';
    await channel.assertQueue(queue, {
        durable: false
    });

    setInterval(async () => {
        const poidsSim = genPoidsRandom(poidsMax);
        // const message = `{id: '${id}', poids: ${poidsSim.toFixed(2)}}`;
        const message = `{ "poids": ${poidsSim.toFixed(2)}, "id_bac": 1, "times": "${new Date().getTime()}"}`;
        //const message = `{ "poids": ${poidsSim.toFixed(2)}, "id_bac": 1, "times": "15/6/54"}`;

        console.log(message)
        await publishMessage(channel, queue, message);
    }, interval);
}

publish().catch(console.error);
