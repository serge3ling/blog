function valid_email(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function send_email(e,t,o,a,r,s){$.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"GMfq6HmqFFR4HGCVfIu6Zw",message:{from_email:t,to:[{email:"blog@yegor256.com",name:"Yegor Bugayenko",type:"to"}],text:"Hi,\n\n"+o+"\n\nEmail: "+t+"\n\nThanks\n\n--\nsent through the form",subject:a,auto_html:!0,important:!0}},success:r,error:s})}$(function(){$.getJSON("http://free.sharedcount.com/?apikey=d730c518430eabcabc46ab79528c744067afa17e&url="+encodeURIComponent(document.location.href),function(e){"0"!==e.Facebook.total_count&&$(".count-facebook").html(e.Facebook.total_count).show(),0!==e.Twitter&&$(".count-twitter").html(e.Twitter).show(),0!==e.GooglePlusOne&&$(".count-googleplus").html(e.GooglePlusOne),0!==e.LinkedIn&&$(".count-linkedin").html(e.LinkedIn).show(),0!==e.Reddit&&$(".count-stumbleupon").html(e.Reddit),0!==e.StumbleUpon&&$(".count-stumbleupon").html(e.StumbleUpon),0!==e.Diggs&&$(".count-digg").html(e.Diggs).show()}),$("#search-query").lunrSearch({indexUrl:"/search.json",results:"#search-results",entries:".entries",template:"#search-results-template"}),$(".button").click(function(e){e.preventDefault();var t=$(this);window.open(t.attr("href"),t.attr("title"),"width=640,height=300")}),$("h2").each(function(e,t){var o=$(t),a=o.attr("id");a&&o.append($("<a/>").addClass("link").attr("href","#"+a).html("&#182;"))}),$("#subscribe").click(function(e){$this=$(this),$error=$("#error");var t=$("#email").val(),o=$("#reason").val();t?valid_email(t)?o?($error.text(""),$this.attr("disabled","disabled"),$this.html("Please, wait..."),e.preventDefault(),send_email($this,t,"I'd like to receive monthly updates from yegor256.com, please add me to the list of subscribers.\n\n"+o,"I would like to receive monthly updates",function(){$("#form").html('<p class="green"><b>Many thanks!</b> Your request was sent. I\'ll reply by email to <code>'+t+"</code>.</p>")},function(){$this.attr("disabled",""),$this.html("Oops :( Try again...")})):$error.text("I really want to know who you are"):$error.text("Email address doesn't look correct"):$error.text("No email... What do you mean?")}),$("#unsubscribe").click(function(e){$this=$(this),$error=$("#error");var t=$("#email").val();t?valid_email(t)?($error.text(""),$this.attr("disabled","disabled"),$this.html("Please, wait..."),e.preventDefault(),send_email($this,t,"I'd like to opt-out from your monthly updates from yegor256.com, please remove me from the list of subscribers.","I would like to OPT-OUT from your monthly updates",function(){$("#form").html('<p class="green"><b>Thanks</b>, your request was sent. You will <strong>not</strong> receive any more emails from me to this address: <code>'+t+"</code>.</p>")},function(){$this.attr("disabled",""),$this.html("Oops :( Try again...")})):$error.text("Email address doesn't look correct"):$error.text("No email... Please provide your address")}),$("#email").ready(function(){var e=window.location.search,t=e.match(/email=([^&]+)/);null!==t&&$("#email").val(t[1])})});var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-1963507-32"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://":"http://")+"stats.g.doubleclick.net/dc.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var disqus_shortname="yegor256";!function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//"+disqus_shortname+".disqus.com/count.js",(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)}(),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();