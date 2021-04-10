import axios from 'axios';

interface MyResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
        };
      };
    };
  };
}

const client = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 3000,
});

const fetchTotalContributionss = async (username: string) => {
  const data = {
    query: `query userInfo($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }`,
    variables: { username },
  };
  return client.post<MyResponse>('/graphql', data, {
    headers: {
      Authorization: `bearer TODO: TOKEN `,
    },
  });
};

export { fetchTotalContributionss };
