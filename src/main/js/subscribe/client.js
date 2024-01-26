const amqp = require('amqplib');

async function subscribe() {
  const conn = await amqp.connect(`amqp://${process.env.BROKER_HOST}`); // ou l'URL de votre broker RabbitMQ
  const channel = await conn.createChannel();
  
  const queue = 'myQueue';
  await channel.assertQueue(queue, {
    durable: false
  });
  
  console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
  channel.consume(queue, function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
    // TODO insert dans une BDD
        // create sh docker image for postgresql
        // https://hub.docker.com/_/postgres
        // import knex from 'knex';
        // create dir and module file for db connection and queries 
        // https://knexjs.org/
        //
        // faire ce qui est à faire 
  }, {
    noAck: true
  });
}

subscribe().catch(console.error);
