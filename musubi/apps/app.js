function MusuWriter(app) {
  this.appContext = app;
}

var musu;
Musubi.ready(function(context) {
    musu = new MusuWriter(context);

	$("#post_button").click(function(e) {
    	var text1 = "Started a Nose Goes. Here is the message - "
    	var text = $("#text_area").val();
    	var text2 = " - Hurry and join in if you don't want to lose!"
    	var html = text1 + text + text2;
    	var content = { "__html" : html, "text" : text};
      	var obj = new SocialKit.Obj({type : "game_start", json: content})
      	musu.appContext.feed.post(obj);
    });
});	