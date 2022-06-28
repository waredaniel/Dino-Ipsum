import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { DinoIpsum } from './dinos.js'

function clearFields() {
  $('#words').val("");
  $('#paragraphs').val("");
}

$(document).ready(function () {
  $('#submit').click(function () {
    let words = $('#words').val();
    let paragraphs = $('#paragraphs').val();
    clearFields();
    let promise = DinoIpsum.getText(words, paragraphs);
    promise.then(function (response) {
      let body = JSON.parse(response);
      let newOrder = ""
      body.forEach((item, index) => {
        if (index === body.length - 1) {
          newOrder += (item + '.')
        } else {
          newOrder += (item + '<br>')
        }
      })
      let newVariable = /,/gi;
      let finalOrder = newOrder.replace(newVariable, ", ");
      $('#showDinos').append(finalOrder);
    })
  });
});