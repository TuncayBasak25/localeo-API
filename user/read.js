import { fetchApi } from '../api';

export default function getUser(userId)
{
  return fetchApi(`user/read?userId=${userId}`);
}
