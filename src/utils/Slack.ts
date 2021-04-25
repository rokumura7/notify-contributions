import axios from 'axios';
import config from './MyConfig';

const notify = async (totalContributions: number): Promise<void> => {
  if (!config.slackUrl) throw new Error('Not found Slack URL.');
  await axios.post(
    config.slackUrl,
    {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `The total of your GitHub's contributions for this one year is *${totalContributions}* now.`,
          },
        },
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export { notify };
