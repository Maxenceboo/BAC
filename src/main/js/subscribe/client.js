const amqp = require('amqplib');
const insertMesuresPoids = require('../database/model/insertMesuresPoids');

async function subscribe() {


  
  sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(20000);



  const conn = await amqp.connect(`amqp://${process.env.BROKER_HOST}`); // ou l'URL de votre broker RabbitMQ
  const channel = await conn.createChannel();
  
  const queue = 'myQueue';
  await channel.assertQueue(queue, {
    durable: false
  });
  
  console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
  channel.consume(queue, async function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
    console.log(" [x] Received %s", msg.content);
    let _msg = JSON.parse(msg.content.toString());
    let poids = _msg.poids;
    let id_bac = _msg.id_bac;
    let times = new Date(parseInt(_msg.times));
    try {
       await insertMesuresPoids.insertMesuresPoids(poids, id_bac, times);
    } catch (error) {
        console.error(error);
    }finally {
      console.log('Message traité');
    }       
  }, {
    noAck: true
  });
}

subscribe().catch(console.error);
