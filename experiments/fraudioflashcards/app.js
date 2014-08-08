
var gtaudio_url = "https://translate.google.com/translate_tts?ie=UTF-8&q=TEXT&tl=fr&total=1&idx=0&textlen=TEXTLEN&client=t"

function play(word, meaning) {
  var url = gtaudio_url.replace('TEXT',word).replace('TEXTLEN',word.length);
  var audioElem = $('#player')[0];
  audioElem.setAttribute('autoplay','autoplay');
  audioElem.setAttribute('src',url);
  audioElem.setAttribute('rel','noreferrer');
  $.get();
  audioElem.addEventListener('load',function () {
    audioElem.Play();
  });
}

$(document).ready(function () {

  var word, meaning;

  $('#reveal').click(function () {
    $('#word').text(word); 
    $('#meaning').text(meaning); 
  });

  $('#next').click(function () {
    $('#word').text(""); 
    $('#meaning').text(""); 
    var index = Math.ceil(Math.random() * data.length);
    word = data[index][0];
    meaning = data[index][1];
    play(word, meaning);
  });
});
