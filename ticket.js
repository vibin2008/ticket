const path = window.location.pathname;
var tic = document.getElementById("ticket")
var unsuccess = document.getElementById("unsuccessful")
if (path.endsWith("/success")){
    tic.style.display = "inline-block"
    unsuccess.style.display = "none"
}
else{
    tic.style.display = "none"
    unsuccess.style.display = "inline-block"
}

function open(){
                var a = document.createElement("a")
                a.href = "https://wa.me/?text=https://example.com/ticket/12345"
                div.append(a)
                
            }