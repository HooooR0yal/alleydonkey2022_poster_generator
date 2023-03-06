//disable scrolling start------------------------------------------------------------------------------------------
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {38: 1, 40: 1, 32: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  
  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}
  
  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  
  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
//disable scrolling end------------------------------------------------------------------------------------------

var key = [];
var minsize = 15;
var maxsize = 35;
//define image description-------------------------------------------------------------------------------------------
var describe = [
    ["A-clamp","A-clamp","LA Angels","Grass illustration","Curiotype illustration"],
    ["Typography decoration","NYC Metro line B","\"Behind\" symbol","Chinese character"],
    ["C-shaped jade dragon","Vitamin C sources","Vitamin C pill bottle"],
    ["Gothic Detroit D", "Compact Disc logo","Toilet seat measurement"],
    ["E-shaped shelf","Early internet browser","Environment design layout","Good shopping site","E-tree"],
    ["Thermal map on eye movements","Fast car race","Fast car race","F-clamp","F-clamp"],
    ["Mercedes AMG G series","G-clamp","Early Google G"],
    ["Hospital sign","Hospital sign"],
    ["Information sign","Allen wrench","iPhone 4 side","Spiritual supply","Tall tree","ME-1 lamp","Bike air pump"],
    ["Fish hook","M16 hook bolt","Water tap"],
    ["OK gesture","Supermarket","Street Fighter"],
    ["Motorcycle designed by Raymond Loewy","Hydraulic e-brake lever","L gesture","Allen tool","Left-turen only sign","90 degree tube connector","L-shaped steel","Park Tool PCS 10.2 repair stand"],
    ["Candy guy","Cloth size tag","Fast food tycoon", "Shanghai Metro"],
    ["Unknown road sign","Online streaming service","Direction","Japan Bicycle Promotion Association"],
    ["Bicycle tire","Carbon disc wheel","Carbon disc wheel","Campy Shamal front wheel","Chainring","Fixed gear cog","Gorilla tape"],
    ["No parking sign","Parking sign","Digital playground","Paragraph sign"],
    ["Q-tip","Online communication tool"],
    ["Sanitizer gun","Boys' dream","Rockstar Games","Recycle sign", "Expensive cars"],
    ["Park Tool AWS-10","Mountain road","Red 6-panel cap", "A game logo","Stop sign","Social Security Department"],
    ["T wrench","5Nm torque hex tool","Skateboard tool","T wrench","Air breaker"],
    ["U-turn sign","Magnet","Unreliable postal service","Package service with cool uniforms"],
    ["Victory gesture","V For Vendetta"],
    ["Digital world access","Folding tool"],
    ["Chrome piler","Bike cog repair tool"],
    ["Wood slingshot","Mosaic decoration"],
    ["Sleepy illustration","Sleepy Emoji"],
    ["Please use hand sanitiser","Donkey","Motor"],
    ["Stopwatch","Small egg"],
    ["6-in-1 screwdriver","Modelo beer","Traffic light","Orange cone"],
    ["Kung-fu stick","Kung-fu stick","Cr-mo track fork"],
    ["Construction sign","Countdown sign","Digital playground","Triangle","Japanese gardening rake"],
    ["Spinergy 4-spoke carbon wheel","Math problem"],
    ["National broadcast channel"],
    ["Westcoast amusement park"],
    ["Coffee grinder"],
    ["Good luck","Figure-8 knot"],
    ["All show but no go car","Classic hits radio"]
  ];
  var many = [5,4,3,3,5,5,3,2,7,3,3,8,4,4,7,4,2,5,6,5,4,2,2,2,2,2,3,2,4,3,5,2,1,1,1,2,2];
  //.........[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,_,0,1,2,3,4,5,6,7,8,9]
  
//get letter index function-------------------------------------------------------------------------------------------
function getindex(letter)
{
    let alphabet_small = "abcdefghijklmnopqrstuvwxyz_0123456789";
    let alphabet_large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789";
    if (alphabet_small.indexOf(letter)==-1)
    {
        return alphabet_large.indexOf(letter);
    } else {
        return alphabet_small.indexOf(letter);
    }  
}
//get letter index function----------------------------------------------------------------------------------------
function show2digit(index)
{
    if(index<10){
        return("0"+index);
    }else{
        return(index);
    }
}
//random function-------------------------------------------------------------------------------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//function of checking if collision-------------------------------------------------------------------------------------------
function collision( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top+10 || d1_offset.top > d2_distance_from_top+10 || d1_distance_from_left < d2_offset.left+10 || d1_offset.left > d2_distance_from_left-10 );
//    if (not_colliding){
//        console.log( "d1_offset.top = " + d1_offset.top + "//d1_offset.left = " + d1_offset.left + "//d1_distance_from_top = " + d1_distance_from_top + "//d1_distance_from_left = " + d1_distance_from_left);
//        console.log( "d2_offset.top = " + d2_offset.top + "//d2_offset.left = " + d2_offset.left + "//d2_distance_from_top = " + d2_distance_from_top + "//d2_distance_from_left = " + d2_distance_from_left);
//    }
//    console.log(d1_height + "+" + d2_height + "//" + d1_width + "+" + d2_width);
	// Return whether it IS colliding
	return ! not_colliding;
};

//function of checking if collision-------------------------------------------------------------------------------------------
function goout( $div1, $div2 ) {
	// inner data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// outer data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var goouting = ( d1_offset.top <= d2_offset.top || d1_distance_from_top >= d2_distance_from_top ||  d1_offset.left <= d2_offset.left || d1_distance_from_left >= d2_distance_from_left );
//    if (!goouting){
//        console.log( "d1_offset.top = " + d1_offset.top + "//d1_offset.left = " + d1_offset.left + "//d1_distance_from_top = " + d1_distance_from_top + "//d1_distance_from_left = " + d1_distance_from_left);
//        console.log( "d2_offset.top = " + d2_offset.top + "//d2_offset.left = " + d2_offset.left + "//d2_distance_from_top = " + d2_distance_from_top + "//d2_distance_from_left = " + d2_distance_from_left);
//    }
//    console.log(d1_height + "+" + d2_height + "//" + d1_width + "+" + d2_width);    
    
	return goouting;
};
//function of layout img-------------------------------------------------------------------------------------------
function layout(index) {
        var outline = document.getElementById('outter_boundary');
        //set img container property
        var current_img_container = document.getElementById('key' + index + '_container');
        var previous_img_container = document.getElementById('key' + (index-1) + '_container');

        current_img_container.style.position = 'absolute';
        current_img_container.style.width = getRndInteger(minsize,maxsize)+'%';
        current_img_container.style.height = current_img_container.offsetWidth*1.1 +'px';

        
        if(index==0){
            current_img_container.style.left = getRndInteger(0,15)+ '%';
            current_img_container.style.top = getRndInteger(20,35)+ '%';
        }else if((outline.offsetLeft+outline.offsetWidth)-(previous_img_container.offsetLeft+previous_img_container.offsetWidth)<(current_img_container.offsetWidth)){
            current_img_container.style.left = getRndInteger(0,20)+ '%';
            current_img_container.style.top = (previous_img_container.offsetTop + getRndInteger(previous_img_container.offsetHeight*0.5,previous_img_container.offsetHeight*1.5))+"px";
        }else{
            current_img_container.style.left = (previous_img_container.offsetLeft + getRndInteger((previous_img_container.offsetWidth*1),(previous_img_container.offsetWidth*1.2)))+"px";
            current_img_container.style.top = (previous_img_container.offsetTop + getRndInteger(-(previous_img_container.offsetHeight*1),(previous_img_container.offsetHeight*0.7)))+"px";
            //console.log(previous_img_container.offsetLeft+"+"+current_img_container.offsetLeft);
        }
        //current_img_container.style.border = '3px solid rgb(250, 250, 0)';
        


        //set img property
        var current_img = document.getElementById('key' + index);
        //current_img.style.position = 'relative';
        current_img.style.maxWidth = '100%';
        current_img.style.maxHeight = '100%';
        current_img.style.objectFit = 'contain';
        current_img.style.width = '100%';
        current_img.style.height = '100%';
        current_img.style.transform = 'rotate('+ getRndInteger(-30,30) + 'deg)';
        //current_img.style.border = '3px solid rgb(0, 250, 250)';
}

//function of scaleup img-------------------------------------------------------------------------------------------
function scaleup(who)
{
    var now_img_container = document.getElementById('key' + who + '_container');
    now_img_container.style.width = (now_img_container.offsetWidth + 1) + 'px';
    now_img_container.style.height = now_img_container.offsetWidth * 1.1 +'px';
    console.log(who+'+up+'+now_img_container.offsetWidth);
}
//function of scaledown img-------------------------------------------------------------------------------------------
function scaledown(who)
{
    var now_img_container = document.getElementById('key' + who + '_container');
    now_img_container.style.width = (now_img_container.offsetWidth - 1) + 'px';
    now_img_container.style.height = now_img_container.offsetWidth * 1.1 +'px';
}
//function of show img description-------------------------------------------------------------------------------------------
function showfig(index,pick)
{
    document.getElementById('index').innerHTML += "<div id='index_" + index + "'>" + show2digit(index+1) + ".</div>";
    document.getElementById('description').innerHTML += "<div id='describ_" + index + "'>" + describe[getindex(key[index])][pick-1] + "</div>";
    
    //set figure number
    var current_figure = document.getElementById('index_' + index);
    current_figure.style.position = 'absolute';
    current_figure.style.top = (10+index*1.51) + '%';
    current_figure.style.left = '21.4%';
    current_figure.style.fontFamily = 'joefont';
    current_figure.style.fontSize = '185%';
    current_figure.style.color = 'rgb(102, 102, 102)';

    //set figure descripttiion
    var current_describ = document.getElementById('describ_' + index);
    current_describ.style.position = 'absolute';
    current_describ.style.top = (10+index*1.51) + '%';
    current_describ.style.left = '40.7%';
    current_describ.style.fontFamily = 'joefont';
    current_describ.style.fontSize = '185%';
    current_describ.style.color = 'rgb(102, 102, 102)';

    //drawline
    var line = document.getElementById('svg_container');
    line.style.top = (12.3+index*1.51) + '%';
    //console.log("fuck");
}

//main function of createimage-------------------------------------------------------------------------------------------
function createimage()
{
    //read text from input box-------------------------------------------------------------------------------------------
    var words = document.getElementById('words').value.replace(/\s/g, ''); // remove space
    var len = words.length;
    document.getElementById('words').value='';
    if(len<4 || len>12){
        alert("限制字符数4-12（不含空格）")
    } else {

    if(len<7){
        minsize = 24;
        maxsize = 42;
    } else if(len<8) {
        minsize = 22;
        maxsize = 40;
    } else if(len<9) {
        minsize = 19;
        maxsize = 39;
    } else if(len>11){
        minsize = 13;
        maxsize = 35;
    } else {
        minsize = 15;
        maxsize = 39;
    }
    for(let i = 0; i<len; i++){

        key[i] = words.substr(i,1);
    }
    //reset everytim press Generate button-------------------------------------------------------------------------------------------
    document.getElementById('overlay_key').innerHTML = " ";
    document.getElementById('index').innerHTML = " ";
    document.getElementById('description').innerHTML = " ";

    //generate img-------------------------------------------------------------------------------------------
    for(let i = 0; i<len; i++)
    {
        if(getindex(key[i])==-1)
        {
            key[i] = "_";
        }
            var r = Math.floor(Math.random()*many[getindex(key[i])])+1;
            //create img container
            document.getElementById('overlay_key').innerHTML += "<figure><div id='key" + i + "_container'></div>";           

            //load img
            if(getindex(key[i])==-1)
            {
                //load img for special character
                document.getElementById('key' + i + '_container').innerHTML += "<img id='key" + i + "' src='images/"+ "_" + "/" + r +".png'><figcaption>Fig." + show2digit(i+1) + "</figcaption></figure>";
            } else 
            {
                //load img for letter
                document.getElementById('key' + i + '_container').innerHTML += "<img id='key" + i + "' src='images/"+ key[i] + "/" + r +".png'><figcaption>Fig." + show2digit(i+1) + "</figcaption></figure>";
            }
            showfig(i,r);
    }

    //layout img-------------------------------------------------------------------------------------------
    for(let i = 0; i<len; i++)
    {
        var count=0;
        layout(i);

        if (goout($('#key' + i + '_container'),$('#outter_boundary')))
            {
                layout(i);
            }
        if(i!=0){
        for(let j = 0; j<i; j++)
        {
            //document.getElementById('progress').innerHTML = i + "+" + j + "//" + collision($('#key'+i + '_container'),$('#key'+j + '_container')) + "//" + goout($('#key'+i + '_container'),$('#outter_boundary'));
            console.log(i + "+" + j + "//" + collision($('#key'+i + '_container'),$('#key'+j + '_container')) + "//" + goout($('#key'+i + '_container'),$('#outter_boundary')));
            //console.log(i + "+" + j + "//" + collision($('#key'+i),$('#key'+j)) + "//" + goout($('#key'+i),$('#outter_boundary')));
            if (collision($('#key'+i + '_container'),$('#key'+j + '_container')) || goout($('#key'+i + '_container'),$('#outter_boundary')))
            {
                layout(i);
                j=-1;
                count++;

            }
            
            //count++;
            if(count>50)
            {
                i = -1;
                break;
            }
        }
    }
    }

    //scaleup img-------------------------------------------------------------------------------------------
    for(let x = 1; x<len;)
    {

        scaleup(x);

        for(let y = 0; y<len; y++)
        {
            if (collision($('#key' + x + '_container'),$('#key' + y + '_container')) || goout($('#key' + x + '_container'),$('#outter_boundary')))
            {
                scaledown(x);
                x = x + 1;
                console.log("fxxxx +"+y);
                y=0;
                break;
            }
        }

        //x = x - 1;
    }

    //alert("打印成功（Could be Worse)");
    window.print();//print!!!!
}// this from the beginning if (len<4 or len>12)

}

