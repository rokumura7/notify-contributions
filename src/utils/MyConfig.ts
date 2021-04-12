import dotenv from 'dotenv';
dotenv.config();

const config = {
  githubToken: process.env.GITHUB_TOKEN,
  slackUrl: process.env.SLACK_URL,
};

export default config;
