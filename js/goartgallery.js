var imgArray1 = new Array();
        imgArray1[0] = "images/light/light.png";

        function showImage() {
            var objImg1 = document.getElementById("light1");
            objImg1.src = imgArray1[0];
        }

        window.setTimeout(showImage(), 10000);

var imgArray2 = new Array();
        imgArray2[0] = "images/light/light1.png";
 
        function showImage2() {
            var objImg2 = document.getElementById("light2");
            objImg2.src = imgArray2[0];
        }

        window.setTimeout(showImage2(), 10000);