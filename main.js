


var cat1_name=  "jessy";

var cat2_name=  "Kiara";


document.getElementById("cat1").innerHTML = cat1_name;
document.getElementById("cat2").innerHTML = cat2_name;




function clicker(imgid ,spanid ) {
    var count = 0
    var image = document.getElementById(imgid);
    image.addEventListener('click', function(){
        count+=1;
    
        document.getElementById(spanid).innerHTML = count;
    }, false);
}

clicker("img1","count1");
clicker("img2","count2");
