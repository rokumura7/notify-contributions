import axios, { AxiosResponse } from 'axios';
import config from './MyConfig';

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

const fetchTotalContributionss = async (
  username: string
): Promise<AxiosResponse<MyResponse>> => {
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
      Authorization: `bearer ${config.githubToken}`,
    },
  });
};

export { fetchTotalContributionss };
