let  main = function(){
    let covid = document.getElementById('covid');
    let ropeSkipping = document.getElementById('ropeSkipping');
    let motivation = document.getElementById('motivation');
    let tutorial = document.getElementById('tutorial');
    let benefit = document.getElementById('benefit');
    
    let landingP = document.getElementById('card-text');
    landingP.innerHTML = "The COVID-19 pandemic has affected badly every aspect of our ordinary life. Our daily exercise routines are no exception. Social distancing, wearing masks, work from home, online classes, public health guidelines, capacity limitations of places including fitness facilities and gyms changed the way we used to work to keep ourselves fit and our daily exercise routines.<br><br>Covid-19 was first found on 1 December,2019 in Wuhan, China. The World Health Organization announced the outbreak a Public Health Emergency of International Concern in January 2020.<br><br>The Covid-19 situation made us stay at home and stopped our daily activities. It has become harder for people to take necessary outgoing activities because of lockdown all over the world. As a result, our health has been affected badly. Lack of exercise and outdoor activities made our physique shaky.<br><br>Health officials agree that running is important to physical health and mental well-being at the COVID-19 pandemic could be tempting to miss the exercise at these difficult times. People who are working from home and participating in online classes may find themselves sitting for more extended periods of time.<br><br>Changes in our everyday life could influence eating patterns, which could increase our weight gain. Many people experience fear, anxiety, loneliness, forbearance, financial concerns, tension and boringness. All this may have a detrimental effect on physical and emotional well-being (Herbert et al., 2020).<br><br>Training strengthens the immune system. Health specialists explain that daily workout benefits from immune-enhancing, which can help our body’s battle infection and COVID-19. Exercise on a regular basis can prevent weight gain. It can help us burn extra calories caused by our diet changes.<br><br>Exercise is a proven method of mood-booster. It reduces anxiety, stress, and help us to build emotional resilience. Regular exercise helps us to sleep faster and improve the quality of sleep. Having good sleep helps to boost the immune system.<br>";

    let menu1 = document.getElementById("menu-title1");
    let menu2 = document.getElementById("menu-title2");
    let menu3 = document.getElementById("menu-title3");
    let menu4 = document.getElementById("menu-title4");

    let menu1Text = document.getElementById("menu1Text");
    let menu2Text = document.getElementById("menu2Text");
    let menu3Text = document.getElementById("menu3Text");
    let menu4Text = document.getElementById("menu4Text");

    let extraText = document.getElementById("extraText");

    function makeAllClassEmpty()
    {
        /*Clearing Rope Skipping Part*/ 
        landingP.innerHTML = "";
        menu1.innerHTML = "";
        menu2.innerHTML = "";
        menu3.innerHTML = "";
        menu4.innerHTML = "";
        menu1Text.innerHTML = "";
        menu2Text.innerHTML = "";
        menu3Text.innerHTML = "";
        menu4Text.innerHTML = "";
        extraText.innerHTML = "";

        /*Clearing the side bar selected state*/ 
        ropeSkipping.className = "";
        covid.className = "";
        tutorial.className = "";
        benefit.className = "";
        motivation.className = "";
    }

    covid.addEventListener('click', function(){
        makeAllClassEmpty()
        covid.className = "current";
        
        landingP.innerHTML = "The COVID-19 pandemic has affected badly every aspect of our ordinary life. Our daily exercise routines are no exception. Social distancing, wearing masks, work from home, online classes, public health guidelines, capacity limitations of places including fitness facilities and gyms changed the way we used to work to keep ourselves fit and our daily exercise routines.<br><br>Covid-19 was first found on 1 December,2019 in Wuhan, China. The World Health Organization announced the outbreak a Public Health Emergency of International Concern in January 2020.<br><br>The Covid-19 situation made us stay at home and stopped our daily activities. It has become harder for people to take necessary outgoing activities because of lockdown all over the world. As a result, our health has been affected badly. Lack of exercise and outdoor activities made our physique shaky.<br><br>Health officials agree that running is important to physical health and mental well-being at the COVID-19 pandemic could be tempting to miss the exercise at these difficult times. People who are working from home and participating in online classes may find themselves sitting for more extended periods of time.<br><br>Changes in our everyday life could influence eating patterns, which could increase our weight gain. Many people experience fear, anxiety, loneliness, forbearance, financial concerns, tension and boringness. All this may have a detrimental effect on physical and emotional well-being (Herbert et al., 2020).<br><br>Training strengthens the immune system. Health specialists explain that daily workout benefits from immune-enhancing, which can help our body’s battle infection and COVID-19. Exercise on a regular basis can prevent weight gain. It can help us burn extra calories caused by our diet changes.<br><br>Exercise is a proven method of mood-booster. It reduces anxiety, stress, and help us to build emotional resilience. Regular exercise helps us to sleep faster and improve the quality of sleep. Having good sleep helps to boost the immune system.<br>";
        let test = document.querySelector('.heading');
        test.innerText = "COVID 19 and Health";
        
    })

    ropeSkipping.addEventListener('click', function(){
        makeAllClassEmpty()
        ropeSkipping.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Rope Skipping";
        landingP.innerHTML = "Exercise improves the physical as well as mental health of a person. Regular exercise can reduce depression, anxiety and negative thoughts. Rope skipping or jumping rope is a tool used in the sports of skipping rope where people jump over a rope so that it passes under their feet. There are many techniques which can be used when skipping. These can be used individually, or combined in a series, to create a routine.<br><br>Some techniques of Rope Skipping are given here:";

        menu1.innerHTML = "<br>1. Solo participants";
        menu2.innerHTML = "<br>2. Basic jump or easy jump";
        menu3.innerHTML = "<br>3. Criss-cross";
        menu4.innerHTML = "<br>4. Side Swing";

        menu1Text.innerHTML = "For solo jumping the participant jumps and swings the rope under their feet. The timing of the swing is matched to the jump. This allows them to more successfully jump the rope and establish a rhythm.";
        menu2Text.innerHTML = "Jump with both feet slightly apart over the rope. Beginners usually master this technique first before moving onto more advanced techniques.";
        menu3Text.innerHTML = "Also known as crossover or cross arms. Perform the basic jump whilst crossing arms in front of the body.";
        menu4Text.innerHTML = "The rope is passed by the side of the participant's body, without jumping it.";

        extraText.innerHTML = "<br>Skipping may be used as a cardiovascular workout, similar to jogging or bicycle riding, and has a high MET(Metabolic Equivalent of Task) or intensity level. This exercise has a burn rate of up to 700 to 1200 calories per hour.";
    })

        
    tutorial.addEventListener('click', function(){
        makeAllClassEmpty()
        tutorial.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Tutorial for Rope Skipping";

        landingP.innerHTML = "First, you need to pick a rope that fits you correctly. If your gym offers a few choices, grab one and stand in the middle of it with both feet. Grab a handle in each hand and hold them as high as they go you want the handles to reach to just below your armpits. Any longer, and you'll have too much slack, which will drag against the ground and slow you down. If you go too short, you'll end up catching the rope on your feet or ankles, which doesn't feel good.<br><br>Jumping rope isn't tricky but there are a few details you need to know. Here's a step-by-step guide on how to jump rope like a pro:";
        menu1.innerHTML = "<br>Step 1:";
        menu2.innerHTML = "<br>Step 2:";
        menu3.innerHTML = "<br>Step 3:";
        menu4.innerHTML = "<br>Step 4:";

        menu1Text.innerHTML = "Grab a handle in each hand and start with the rope behind you, so it's right at your heels. To get the rope moving, gently rotate your forearms forward and then your wrists to generate momentum and swing it overhead.";
        menu2Text.innerHTML = "As the rope swings up overhead, bend your knees slightly. Once you see the rope pass your shins, jump by springing from your toes. Start slowly so you can master the timing of it. Once you get a few jumps down, you'll know when to jump naturally.";
        menu3Text.innerHTML = "Once you're at a comfortable speed, your wrists can do all the work. Usually, there are bearings inside the handles that rotate the rope itself. This makes it easy to spin the rope with just your wrists.";
        menu4Text.innerHTML = "As you hop, be sure to stay on the balls of your feet. This keeps you quick and nimble. Because your calves will get tired quickly, feel free to alternate hops. For example, alternate between each foot, hopping on one and then the other, and then both. This lets your calves rest a little longer.";
    })
    
    benefit.addEventListener('click', function(){
        makeAllClassEmpty()
        benefit.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Benefits of Rope Skipping";
        landingP.innerHTML = "In rope skipping, one has to perform rapid reactions and continuous jumps. If one loses focus or does a moment of neglect, it can create an imbalance of the rope. With this point, rapid reaction to needed for continue rope skipping. It helps to increase agility. By performing rope skipping on a regular basis one can improve the functioning of the sympathetic nervous system.<br><br>The longer period of time one performs jumping ropes, the more benefits this person archives. But the peak of power one use for skipping rope or the higher one jumps for skipping rope, the difference between them is not significant. A Study by Lee and Lee in 2019 found the jumping ropes increase one’s peak of power and their capability of jumping higher.<br><br>In 2013 Makaruk, showed that people training for performing higher jumps with common jumping protocols can have batter results using rope skipping. Rope skipping also provides the same increase in vertical jumps.<br><br>Rope skipping enhances one’s power and strength. And rope skipping also requires higher strength and power, it causes muscle protein degradation. This process helps to increase power and muscle size. People with heavy calories problem can be benefited using rope skipping.<br><br>Running at high speed, muscle strength improvement, the performance of jumping can be increased by skipping rope on regular basis. All of these improvements are linked together with two qualities of muscles. First, strong muscular tension prior to the contraction results in a tensile reaction to activate the introvert muscle contraction. The muscle’s reactionary nature helps to save energy during movements. Its and difficult task of determining the effects of these factors.";

    })
    
    
    
    
    
    motivation.addEventListener('click', function(){
        makeAllClassEmpty()
        motivation.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Motivation to keep going.";

        landingP.innerHTML = "Here are some motivational thoughts for keeping your spirit up.<br><br><b>‘The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.’</b><br>-Arnold Schwarzenegger, seven-time Mr. Olympia. <br><br><b>‘Success usually comes to those who are too busy to be looking for it.’</b><br>-Henry David Thoreau, poet and philosopher. <br><br><b>‘All progress takes place outside the comfort zone.’</b> <br>-Michael John Bobak, digital artist.<br><br><b>‘If you think lifting is dangerous, try being weak. Being weak is dangerous.’</b><br>-Bret Contreras, sports scientist.<br><br><b>‘The only place where success comes before work is in the dictionary.’</b><br>-Vidal Sassoon, hairstylist and businessman.<br><br><b>‘The clock is ticking. Are you becoming the person you want to be?’</b>-Greg Plitt, fitness model.<br><br><b>‘Whether you think you can, or you think you can’t, you’re right.’</b><br>-Henry Ford, industrialist.<br><br><b>‘The successful warrior is the average man, with laser-like focus.’</b><br>-Bruce Lee, actor and martial artist.";
        
        
    })
    


}();

