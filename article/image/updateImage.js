import { fetchApi } from '../../api';

export default function updateImage(newImage)
{
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newImage: newImage })
  }

  return fetchApi('article/image/update', options);
}
