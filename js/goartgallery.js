var imgArray = new Array();
        imgArray[0] = "images/light/light.png";

 
        function showImage() {
            var imgNum = Math.round(Math.random()*2);
            var objImg = document.getElementById("light1");
            objImg.src = imgArray[imgNum];
            setTimeout("showImage()", 1000);
        }
var imgArray = new Array();
        imgArray[0] = "images/light/light1.png";

 
        function showImage() {
            var imgNum = Math.round(Math.random()*2);
            var objImg = document.getElementById("light2");
            objImg.src = imgArray[imgNum];
            setTimeout("showImage()", 1000);
        }