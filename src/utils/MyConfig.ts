import dotenv from 'dotenv';
dotenv.config();

const config = {
  slackUrl: process.env.SLACK_URL,
  githubToken: process.env.TOKEN,
  username: process.env.USERNAME,
};

export default config;
