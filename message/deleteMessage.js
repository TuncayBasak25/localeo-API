import { fetchApi } from '../api';

export default function deleteMessage(messageId)
{
  return fetchApi(`message/delete?messageId=${messageId}`);
}
