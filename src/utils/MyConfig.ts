import dotenv from 'dotenv';
dotenv.config();

const config = {
  slackUrl: process.env.SLACK_URL,
  slackChannel: process.env.SLACK_CHANNEL,
  githubToken: process.env.GITHUB_TOKEN,
  username: process.env.USERNAME,
};

export default config;
