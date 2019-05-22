const faker = require("faker");
const axios = require("axios");
const uuidv4 = require("uuid/v4");

const config = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 9200,
};

const getTweetUrl = uuid => {
  return `http://${config.host}:${config.port}/twitter/tweet/${uuid}`;
};

const indexTweet = async () => {
  const uuid = uuidv4();
  const repliesLength = faker.random.number(5);
  await axios.post(getTweetUrl(uuid), {
    id: uuid,
    content: faker.random.words(),
    likes: faker.random.number(),
    deleted: faker.random.boolean(),
    created_at: faker.date.past(),
    user: {
      id: uuidv4(),
      name: faker.name.firstName(),
    },
    replies: Array.from({ length: repliesLength }).map(_ => faker.random.words()),
  });
};

const main = async () => {
  try {
    for (let i = 0; i < 100; i++) {
      await indexTweet();
    }
  } catch (e) {
    console.error(e);
  }
};

main();
