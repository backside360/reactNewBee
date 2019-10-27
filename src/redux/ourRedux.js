const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Publisher {
  constructor(reducer) {
    this.subscribers = [];
    this.state = {};

    // Уведомляет подписчиков об изменении
    this.publish = payload => {
      this.state = reducer(this.state, payload);
      this.subscribers.forEach(subscriber => subscriber(payload));
    };

    // Добавляет в коллекцию подписчиков
    this.subscribe = update => {
      this.subscribers.push(update);
    };

    // Удаляем из коллекции подписчиков
    this.unsubcribe = index => {
      this.subscribers = this.subscribers.filter((_, i) => i !== index);
    };

    this.getState = () => this.state;
  }
}

const publicator = new Publisher();

rl.question('What do you think of Node.js? ', answer => {
  publicator.publish(answer);
  rl.close();
});

publicator.subscribe(payload =>
  payload !== 'bad' ? console.log(`Hello: ${payload}`) : null
);

publicator.subscribe(payload =>
  payload === 'getImage' ? console.log(`Hello: ${payload}`) : null
);
