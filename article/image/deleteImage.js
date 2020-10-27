import { fetchApi } from '../../api';

export default function deleteImage(imageId)
{
  return fetchApi(`article/image/delete?imageId=${imageId}`);
}
