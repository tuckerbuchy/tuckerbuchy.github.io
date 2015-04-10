$(document).ready(function(){
  $("#email-link").click(function(){
    console.log("Email clicked");  
    window.location.replace("mailto:tucker.buchy@gmail.com");
  });

  $("#twitter-link").click(function(){
    console.log("twitter clicked");  
    window.location.replace("http://twitter.com/tuckerbuchy");
  });

  $("#facebook-link").click(function(){
    console.log("facebook clicked");  
    window.location.replace("http://www.facebook.com/tucker.buchy");
  });

  $("#github-link").click(function(){
    window.location.replace("https://github.com/tuckerbuchy");
  });

  $("#linkedin-link").click(function(){
    window.location.replace("http://ca.linkedin.com/pub/tucker-buchy/52/ba8/432");
  });

  $("#cheap-vacays").click(function(){
    window.location.replace("http://cheap-vacay.r14.railsrumble.com");
  });

  $("#led-strip").click(function(){
    window.location.replace("https://www.youtube.com/watch?v=6z6rRS_tOmw");
  });

  $("#distributed-services").click(function(){
    window.location.replace("https://github.com/tuckerbuchy/distributed-services");
  });

  $("#sam-math").click(function(){
    window.location.replace("https://github.com/tuckerbuchy/sam-math");
  });

  $("#object-recognition").click(function(){
    window.location.replace("https://github.com/tuckerbuchy/object-recognizer");
  });

  $("#dirty-bytes").click(function(){
    window.location.replace("http://dirtybytesapp.appspot.com/");
  });

  $("#sound_scapes").click(function(){
    window.location.replace("http://www.tuckerbuchy.com/sound_scapes");
  });
});
