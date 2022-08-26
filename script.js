$(document).ready(function(){
   $("#close-btn").hide();
   $("#left-button").click(function(){
     $("#model_load").hide();
     $("#video_box").css("height","100%");
     $("#video_box").html("<div class='test_board'>"+
                            "<div id='info_title'>"+
                                "<h1>English Breakfast Tea</h1>"+
                                "<p>Waking up to this - #371</p>"+
                            "</div>"+
                            "<div>"+
                                "<button id='info_btn' class='button-1' role='button' autofocus='true'>Info</button>"+
                                "<button id='benefits_btn' class='button-1' role='button'>Benefits</button>"+
                                "<button id='story_btn' class='button-1' role='button'>Story</button>"+
                                "<button id='origin_btn' class='button-1' role='button'>Origin</button>"+
                            "</div>"+
                            "<div id='info_content'>"+
                                "<h2>Ingredients</h2>"+
                                   "<p>Assam, Ceylon, Keemun blend</p>"+
                               "<h2>Preference</h2>"+
                                   "<p>Vegan, Gluten-Free, Kosher Parve</p>"+
                               "<h2>Brewing</h2>"+
                                   "<p>Bring water to between 96 and 100 degrees.</p>"+
                                   "<p>Pour the hot water into a teacup.</p>"+
                                   "<p>Steep the tea bag for 3 to 5 minutes.</p>"+
                                   "<p>Remove the tea bag and add sweetener, milk, or lemon as desired.</p>"+
                          "</div>"
                         );
       $("#info_btn").click(); 
       $("#info_btn").click(function(){
           $("#info_content").html(  "<h2>Ingredients</h2>"+
                                   "<p>Assam, Ceylon, Kenyan, and Keemun blend</p>"+
                               "<h2>Preference</h2>"+
                                   "<p>Vegan, Gluten-Free, Kosher Parve</p>"+
                               "<h2>Brewing</h2>"+
                                   "<p>Prepare hot water that has reached a full boil.</p>"+
                                   "<p>Put a tea bag in a teacup.</p>"+
                                   "<p>Pour in hot water and there is no need to pull out the tea bag.</p>"+
                                   "<p>(Herbal teas are caffeine-free and can be infused for a longer period of time without getting bitter.)</p>"
                     );
       });
       $("#benefits_btn").click(function(){
           $("#info_content").html(  
                                   "<p>Need a little more focus in the morning? A cup of English Breakfast with a touch of milk could be ideal.</p>"+
                                   "<p>English Breakfast tea has the ability to detoxify the body. It is naturally rich in flavonoids, thearubigins, and theaflavins.</p>"
                                  );
       });
       $("#story_btn").click(function(){
           $("#info_content").html(  
                                   "<p>English breakfast tea or simply breakfast tea is a traditional blend of black teas originating from Assam, Ceylon and Kenya.It is one of the most popular blended teas, common in British and Irish tea culture.</p>"+
                                   "<p>English breakfast tea is a black tea blend usually described as full-bodied, robust, rich and blended to go well with milk and sugar, in a style traditionally associated with a hearty English breakfast.</p>"
                                   );
       });
       $("#origin_btn").click(function(){
           $("#info_content").html("<h3>Africa</h3>"+
                                   "<iframe width='300' height='200' src='https://maps.google.com/maps?q=Africa&t=&z=1&ie=UTF8&iwloc=&output=embed'></iframe>"+
                                   "<button id='vr-btn' class='button-2' role='button'>VR View</button>");
           $("#vr-btn").click(function(){
                   $("body").html("<div class='buttons'>"+
                                "<div id='vr-close-btn' class='close-btn'>"+
                    "<span></span> <span></span> </div> </div>"+
                              "<a-scene>"+
                                 "<a-sky src='https://cdn.glitch.global/1765ff47-5e85-4c40-9872-99e318a4f9e4/puydesancy.jpg?v=1658353465821'></a-sky>"+
                              "</a-scene>");
 
                    $("#vr-close-btn").click(function(){
                       location.reload(true);
    });
           });
       });

      $(".say-hi-button").hide();
      $("#close-btn").show();
  });
  

$("#close-btn").click(function(){
     $("#video_box").empty();
     $("#video_box").css("height","0");
     $("#model_load").show();
     $(".say-hi-button").show();
     $("#close-btn").hide();
});
  
  $("#mid-button").click(function(){
    window.open("https://threesips.glitch.me");
  });
  
   
  $("#mid-button2").click(function(){
          $(".say-hi-button").hide();
      $("#close-btn").show();
     $("#video_box").css("height","100%");
      $("#video_box").html("<div class='video_menu'>"+
                           "<iframe width='340' height='500' src='https://3sips-gashapon-game.glitch.me' allowfullscreen='true' ></iframe>"+
                           "</div>"
                          );
  });
  
  $("#right-button").click(function(){
     $(".say-hi-button").hide();
      $("#close-btn").show();
     $("#video_box").css("height","100%");
      $("#video_box").html("<div class='video_menu'>"+
                           "<h1>Creative Brewing</h1>"+
                             "<div class='video_item'>"+
                               "<img src='./assets/drink1.png' href='https://www.youtube.com/embed/8kU7d-kk8-g?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com' alt='video-item-img'>"+
                               "<p>Summer Drinks</p>"+
                             "</div>"+
                            "<div class='video_item'>"+
                               "<img src='./assets/drink2.png' href='https://www.youtube.com/embed/nD2k199_HBM?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com' alt='video-item-img'>"+
                               "<p>Bubble Tea</p>"+
                             "</div>"+
                           "<div class='video_item'>"+
                               "<img src='./assets/drink3.png' href='https://www.youtube.com/embed/8sgtZy0E2Fs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com' alt='video-item-img'>"+
                               "<p>Tea Cocktail</p>"+
                             "</div>"+
                           "</div>"
                          );
    
     $(".video_item img").click(function(){
         var videolink= $(this).attr("href").toString();
           $("#video_box").css("height","100%");
           $("#video_box").html("<iframe id='tutor_video' width='420' height='315' src='"+videolink+"'><iframe>");
           $(".say-hi-button").hide();
           $("#close-btn").show();
  });
    
  });
  
  
  
});




