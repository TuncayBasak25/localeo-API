import { fetchApi } from '../api';

export default function createMessage(message)
{
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: message })
  }

  return fetchApi('message/create', options);
}
