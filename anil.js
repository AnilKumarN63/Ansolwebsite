function login(){
  var uname=document.getElementById("UserName").value;
  var pass=document.getElementById("Password").value;
  if(uname=="Aishu" && pass=="Sis@123"){
    location.assign("html1.html")
  }
  else{
    window.alert("Hello Type Correct Password otherwise i will kill u")
  }
}