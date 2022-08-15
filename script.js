$(document).ready(function(){
   $("#close-btn").hide();
   $("#left-button").click(function(){
     //$("#model_load").attr("visible","false");
     $("#model_load").hide();
     $("#video_box").css("height","100%");
     $("#video_box").html("<div class='test_board'>"+
                            "<div id='info_title'>"+
                                "<h1>English Breakfast Tea</h1>"+
                                "<p>Waking up to this - #</p>"+
                            "</div>"+
                            "<div>"+
                                "<button id='info_btn' class='button-1' role='button' autofocus='true'>Info</button>"+
                                "<button id='benefits_btn' class='button-1' role='button'>Benefits</button>"+
                                "<button id='story_btn' class='button-1' role='button'>Story</button>"+
                                "<button id='origin_btn' class='button-1' role='button'>Origin</button>"+
                            "</div>"+
                            "<div id='info_content'>"+
                                "<h2>Ingredients</h2>"+
                                   "<p>Assam, Ceylon, Kenyan, and Keemun blend</p>"+
                               "<h2>Preference</h2>"+
                                   "<p>Vegan, Gluten-Free, Kosher Parve</p>"+
                               "<h2>Brewing</h2>"+
                                   "<p>Prepare hot water that has reached a full boil.</p>"+
                                   "<p>Put a tea bag in a teacup.</p>"+
                                   "<p>Pour in hot water and there is no need to pull out the tea bag.</p>"+
                                   "<p>(Herbal teas are caffeine-free and can be infused for a longer period of time without getting bitter.)</p>"+
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
                                   "<p>Start your morning with a cup of this ginery treat. One sip and you're ready to soar, take to the sky in a swirl of lemony freshness. </p>"+
                                   "<p>Naturally caffeine free, ethically sourced, organically grown ingredients.</p>"+
                                   "<p>Real riches are within. Life's most precious gifts are right here for you to enjoy; a zesty swirl of the finest lemongrass and the spicy lift of ginger; steep them together and take a sip to uplift and refresh your day.</p>"
                                    );
       });
       $("#story_btn").click(function(){
           $("#info_content").html(  
                                   "<p>Cymbopogon, also known as lemongrass, is a genus of Asian, African, Australian, and tropical island plants in the grass family. Lemongrass and its oil are believed to possess therapeutic properties.</p>"+
                                   "<p>Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.</p>");
       });
       $("#origin_btn").click(function(){
           $("#info_content").html("<p>(An african tea plantation if possible)</p>"+
                                   "<iframe width='300' height='200' src='https://maps.google.com/maps?q=Africa&t=&z=1&ie=UTF8&iwloc=&output=embed'></iframe>"+
                                   "<button id='vr-btn' class='button-2' role='button'>VR View</button>");
           $("#vr-btn").click(function(){
                   $("body").html("<div class='buttons'>"+
                                "<div id='vr-close-btn' class='close-btn'>"+
                    "<span></span> <span></span> </div> </div>"+
                              "<a-scene>"+
                                 "<a-sky src='/assets/test-img.jpg'></a-sky>"+
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
  //$("#model_load").attr("visible","true");
     $(".say-hi-button").show();
     $("#close-btn").hide();
});
  
  $("#mid-button").click(function(){

   //location.replace("https://pjiang-vr-project-demo.glitch.me");
    
   // $("a-scene").removeAttr("arjs");
   // $("a-scene").removeAttr("embedded");
   // $("a-assets").after("<a-sky src='https://cdn.glitch.global/1765ff47-5e85-4c40-9872-99e318a4f9e4/puydesancy.jpg?v=1658353465821'></a-sky>");
  
    /* <a-scene embeded>
      <a-sky src="https://cdn.glitch.global/9c12de11-ce2a-4aa2-b3c1-28f60a79e6e6/puydesancy.jpg?v=1657488334655" rotation="0 -130 0"></a-sky>
    </a-scene>*/
    

    //iphone切换场景之后不能正常运动
    //$("a-scene").removeAttr("arjs");
    //$("a-assets").after("<a-sky src='https://cdn.glitch.global/1765ff47-5e85-4c40-9872-99e318a4f9e4/puydesancy.jpg?v=1658353465821'></a-sky>");
  //$("#model_load").remove();
  //  $("#camera").remove();
    //$("a-scene").load(location.href + "a-scene");
    
  });
  
 
  
  $("#right-button").click(function(){
    /*      <div class="video_menu">
        <h1>Creative Brewing</h1>
        <div class="video_item">
         
          <img src="https://cdn.glitch.global/1765ff47-5e85-4c40-9872-99e318a4f9e4/bubble%20tea.jpg?v=1658633854325" href="https://www.youtube.com/embed/tgbNymZ7vqY">
          <p>ddddddd</p>
      
          
        </div>
        <div class="video_item"></div>
        <div class="video_item"></div>
      </div>*/
     $(".say-hi-button").hide();
      $("#close-btn").show();
     $("#video_box").css("height","100%");
      $("#video_box").html("<div class='video_menu'>"+
                           "<h1>Creative Brewing</h1>"+
                             "<div class='video_item'>"+
                               "<img src='/assets/drink1.png' href='https://www.youtube.com/embed/8kU7d-kk8-g?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com'>"+
                               "<p>Summer Drinks</p>"+
                             "</div>"+
                            "<div class='video_item'>"+
                               "<img src='/assets/drink2.png' href='https://www.youtube.com/embed/8sgtZy0E2Fs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com'>"+
                               "<p>Bubble Tea</p>"+
                             "</div>"+
                           "<div class='video_item'>"+
                               "<img src='/assets/drink3.png' href='https://www.youtube.com/embed/8sgtZy0E2Fs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com'>"+
                               "<p>Tea Cocktail</p>"+
                             "</div>"+
                           "</div>"
                          );
    
     $(".video_item img").click(function(){
   //$("#video_box").css("height","100%");
  // $("#video_box").html("<iframe id='tutor_video' width='420' height='315' src='https://www.youtube.com/embed/tgbNymZ7vqY'><iframe>");
   // $(".say-hi-button").hide();
    // $("#close-btn").show();
    
    //alert($(this).attr("href").toString());
   var videolink= $(this).attr("href").toString();
     $("#video_box").css("height","100%");
     $("#video_box").html("<iframe id='tutor_video' width='420' height='315' src='"+videolink+"'><iframe>");
     $(".say-hi-button").hide();
     $("#close-btn").show();
  });
    
  });
  
  
  
});




