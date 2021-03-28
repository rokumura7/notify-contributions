import axios from 'axios';
import { GitHubActivityCount } from '../../types';

const notify = async (cnt: GitHubActivityCount): Promise<void> => {
  await axios.post(
    'TODO: URL',
    {
      channel: 'notify',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `Your contribute count for yesterday was ${cnt.yesterday}. The total of it for the last year is ${cnt.lastYear} now.`,
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
