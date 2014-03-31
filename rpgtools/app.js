var players = {};

function onYouTubeIframeAPIReady() {
  $(".button").each(function() {
    var player = new YT.Player($(this).prop("name"), {
      height: '10',
      width: '10',
      videoId: $(this).data('video'),
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    players[$(this).prop("name")] = player;
    $(this).addClass("ready");
  });
}

function onPlayerReady(event) {

}

var done = false;
function onPlayerStateChange(event) {

}

function changeVolume(player, level) {
  player.setVolume(level);
}


function playVideo(player) {
  console.log(player);
  player.playVideo()
}

function stopVideo(player) {
  player.stopVideo();
}

function changeVol(elem) {
  var video = $(elem).parent().children(".button").prop("name");
  changeVolume(players[video], elem.value);
}
$(function() {
  $('.button').change(function() {
    if($(this).is(":checked")) {
      playVideo(players[$(this).prop("name")]);
    } else {
      stopVideo(players[$(this).prop("name")]);
    }
  });
});