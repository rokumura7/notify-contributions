import axios from 'axios';
import config from './MyConfig';

const notify = async (totalContributions: number): Promise<void> => {
  if (!config.slackUrl) throw new Error('Not found Slack URL.');
  await axios.post(
    config.slackUrl,
    {
      channel: 'notify',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `The total of it for the last year is ${totalContributions} now.`,
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
