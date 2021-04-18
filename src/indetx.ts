import config from './utils/MyConfig';
import { fetchTotalContributionss } from './utils/GitHub';
import { notify } from './utils/Slack';

(async () => {
  const res = await fetchTotalContributionss(config.username);
  await notify(
    res.data.data.user.contributionsCollection.contributionCalendar
      .totalContributions
  );
})();
