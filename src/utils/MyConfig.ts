import dotenv from 'dotenv';
dotenv.config();

const config = {
  githubToken: process.env.GITHUB_TOKEN,
  slackUrl: process.env.SLACK_URL,
  username: process.argv[2],
};

export default config;
