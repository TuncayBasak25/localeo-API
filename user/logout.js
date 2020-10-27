import { fetchApi } from '../api';

export default function logout()
{
  return fetchApi('user/logout');
}
