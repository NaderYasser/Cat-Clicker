


var cat1_name=  "jessy";



document.getElementById("cat1").innerHTML = cat1_name;





function clicker(imgid ,spanid ) {
    var count = 0
    var image = document.getElementById(imgid);
    image.addEventListener('click', function(){
        count+=1;
    
        document.getElementById(spanid).innerHTML = count;
    }, false);
}

clicker("img1","count1");

