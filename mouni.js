function login(){
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(uname=="Mounika" && pass=="Mouni@6363"){
        location.assign("mouni1.html")
    }
    else{
        window.alert("WHO ARE YOU,WITHOUT KNOWING USERNAME AND PASSWORD HOW CAN U LOGIN")
    }
}