/* eslint-disable camelcase */
const messages = [];

messages.create = (username, messages, roomname) => {
  /*
  created at: a new instance of the Date class
  message_ID: prev_message += 1
  roomname: from request
  text from request
  username from request.
  */
  const created_atS = new Date();
  const message_idS = null;
  const room_nameS = null;
  const textS = 'test';
  const usernameS = null;

  return {
    created_at: createdatS,
    message_id: messageidS,
    roomname: room_nameS,
    text: textS,
    username: usernameS
  };

};

exports.messages = messages;

