import { fetchApi } from '../api';

export default function deleteAVis(avisId)
{
  return fetchApi(`avis/delete?avisId=${avisId}`);
}
