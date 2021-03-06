import login from './user/login';
import register from './user/register';
import logout from './user/logout';
import updateUser from './user/updateUser';
import getUser from './user/read';

import createAvis from './avis/createAvis';
import deleteAvis from './avis/deleteAvis';
import readAvis, { getAvisFrom, getAvisFor } from './avis/readAvis';
import updateAvis from './avis/updateAvis';

import createMessage from './message/createMessage';
import deleteMessage from './message/deleteMessage';
import readMessage, { getMessage, getNewMessages, getChatRoom, getRoomMessages } from './message/readMessage';
import updateMessage from './message/updateMessage';

import createArticle from './article/createArticle';
import deleteArticle from './article/deleteArticle';
import readArticle, { getArticle, getCategories, getArticleOf, searchArticle } from './article/readArticle';
import updateArticle from './article/updateArticle';

import createImage from './article/image/createImage';
import deleteImage from './article/image/deleteImage';
import readImage, { getImage, getBase64 } from './article/image/readImage';
import updateImage from './article/image/updateImage';

const Api = {
  login: login,
  register: register,
  logout: logout,
  updateUser: updateUser,
  getUser: getUser,

  createAvis: createAvis,
  deleteAvis: deleteAvis,
  readAvis: readAvis,
  updateAvis: updateAvis,
  getAvisFrom: getAvisFrom,
  getAvisFor: getAvisFor,

  createMessage: createMessage,
  deleteMessage: deleteMessage,
  readMessage: readMessage,
  updateMessage: updateMessage,
  getMessage: getMessage,
  getNewMessages: getNewMessages,
  getChatRoom: getChatRoom,
  getRoomMessages: getRoomMessages,

  createArticle: createArticle,
  deleteArticle: deleteArticle,
  readArticle: readArticle,
  updateArticle: updateArticle,
  getArticle: getArticle,
  getCategories: getCategories,
  getArticleOf: getArticleOf,
  searchArticle: searchArticle,

  createImage: createImage,
  deleteImage: deleteImage,
  readImage: readImage,
  updateImage: updateImage,
  getImage: getImage,
  getBase64: getBase64
}

export async function fetchApi(url, options)
{
  try {
    if (Api.sessionToken)
    {
      if (options)
      {
        let cache = JSON.parse(options.body);
        cache.sessionToken = Api.sessionToken;
        options.body = JSON.stringify(cache);
      }
      else if (url.indexOf('?') > 0) url += `&sessionToken=${Api.sessionToken}`;
      else url += `?sessionToken=${Api.sessionToken}`;
    }

    let res = await fetch('https://localeo.herokuapp.com/API/' + url, options);

    let json = await res.text();
    if (json.charAt(0) !== '<') json = JSON.parse(json);
    else
    {
      return { error: json };
    }
    return json;
  } catch (e) {
    console.log(e);
  }
}

export default Api;
