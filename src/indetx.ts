import config from './utils/MyConfig';
import { fetchTotalContributionss } from './utils/GitHub';
import { notify } from './utils/Slack';

(async () => {
  if (!config.username) throw new Error('Check your environments');
  const res = await fetchTotalContributionss(config.username);
  await notify(
    res.data.data.user.contributionsCollection.contributionCalendar
      .totalContributions
  );
})();
