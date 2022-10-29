/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {
    //arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
//act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');

    inputEl.value = 'This is an amazing message';

    buttonEl.click();
//assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is an amazing message');
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
//act
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hidebuttonEl = document.querySelector('#hide-message-button');
    hidebuttonEl.click();
//assert
    expect(document.querySelector('#message')).toBeNull();
  })
});