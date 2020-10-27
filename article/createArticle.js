import { fetchApi } from '../api';

export default function createArticle(article)
{
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ article: article })
  }

  return fetchApi('article/create', options);
}
