console.log('hello');
document.addEventListener('DOMContentLoaded', function(){
    console.log('hello2');
    var mainPicture = document.querySelector("h1").offsetTop;
    window.onscroll = function(){
        if(true){
            // var opac = window.pageYOffset/mainPicture;
            var opac = 1;
            console.log(opac);
            // document.body.style.background. = "linear-gradient(rgba(20,20,20,"+opac+"), rgba(20,20,20,"+opac+")), url(./images/back.jpg) no-repeat";
            this.document.body.backgroundImage = "url('../images/back.jpg')";
            document.body.style.backgroundSize = "auto 100%";
        }
    };
})