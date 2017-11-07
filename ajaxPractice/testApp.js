/**
 * Created by joshuaclark on 11/2/17.
 */
function showUser(str) {
    if (str == "") {
        // document.getElementById("txtHint").innerHTML = "";
        console.log("empty string");
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getuser.php?q="+str,true);
        //xmlhttp.send();

        console.log("hello");
    }
}
