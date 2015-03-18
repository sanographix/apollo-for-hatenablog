$(function(){
    // Add target="_blank" when user opens external link
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });

});

function get_social_count_facebook(url, counterId) {
  $.ajax({
    url:'https://graph.facebook.com/',
    dataType:'jsonp',
    data:{
      id:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res.shares || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}
function get_social_count_twitter(url, counterId) {
  $.ajax({
    url:'http://urls.api.twitter.com/1/urls/count.json',
    dataType:'jsonp',
    data:{
      url:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res.count || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}
$(function(){
  get_social_count_facebook( location.href, "socialarea_facebook");
  get_social_count_twitter( location.href, "socialarea_twitter");
});