const amqp = require('amqplib');
const db = require('./database/db');

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
            // docker run --name my-postgres -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypass -e POSTGRES_DB=mydb -p 5432:5432 -d postgres

        // import knex from 'knex';
        // create dir and module file for db connection and queries 
        // https://knexjs.org/
        //
        // faire ce qui est à faire 

    // channel.consume(queue, async function(msg) {
    //     const messageContent = msg.content.toString();
    //     console.log(" [x] Received %s", messageContent);
    //     const infoPoids = messageContent.split(" ");
    //     if (infoPoids) {
    //         await db.insertMesuresPoids(infoPoids.poids);
    //     }
    // })


    // code SQL associé : 
    // CREATE TABLE MesuresPoids (
    //     IDMesure SERIAL PRIMARY KEY,
    //     Poids DECIMAL(10, 2) NOT NULL,
    //     DateMesure TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    // );
    
        
  }, {
    noAck: true
  });
}

subscribe().catch(console.error);
