import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: this.text,
    id: uuid.v4(),
    votes: 0
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: this.id,
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id: this.id,
    text: this.text
  }
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: this.id,
    votes: +1
  }
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: this.id,
    votes: -1
  }
}
