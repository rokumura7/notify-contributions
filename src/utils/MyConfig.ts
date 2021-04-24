import dotenv from 'dotenv';
dotenv.config();

const isProd = process.argv[2] === 'prod';

const config = {
  slackUrl: isProd ? process.argv[3] : process.env.SLACK_URL,
  slackChannel: isProd ? process.argv[4] : process.env.SLACK_CHANNEL,
  githubToken: isProd ? process.argv[5] : process.env.GITHUB_TOKEN,
  username: isProd ? process.argv[6] : process.env.USERNAME,
};

export default config;
