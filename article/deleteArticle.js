import { fetchApi } from '../api';

export default function deleteArticle(articleId)
{
  return fetchApi(`article/delete?articleId=${articleId}`);
}
