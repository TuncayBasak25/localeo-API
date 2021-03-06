import { fetchApi } from '../api';

export function getMessage(messageId)
{
  return fetchApi(`message/read?messageId=${messageId}`);
}

export function getNewMessages(lastMessageId)
{
  return fetchApi(`message/read/getNewMessages?lastMessageId=${lastMessageId}`);
}

export function getChatRoom(corresponderId, page = 1, max = 20)
{
  return fetchApi(`message/read/getChatRoom?corresponderId=${corresponderId}&page=${page}&max=${max}`);
}

export function getRoomMessages(chatRoomId, page = 1, max = 20)
{
  return fetchApi(`message/read/getRoomMessages?chatRoomId=${chatRoomId}&page=${page}&max=${max}`);
}

const readMessage = {
  getMessage: getMessage,
  getChatRoom: getChatRoom,
  getRoomMessages: getRoomMessages,
  getNewMessages: getNewMessages
}

export default readMessage;
