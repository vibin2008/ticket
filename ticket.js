window.onload = function(){
    const params = new URLSearchParams(window.location.search)
    const status = params.get('status')
    var tic = document.getElementById("ticket")
    var unsuccess = document.getElementById("unsuccessful")
    if (status == "paid"){
        tic.style.display = "inline-block"
        unsuccess.style.display = "none"
        // const price = params.get('price')
        // const data = params.get('date')
        // console.log(price)
        // console.log(data)
    }
    else{
        tic.style.display = "none"
        unsuccess.style.display = "inline-block"
    }
}

function open(){
                var a = document.createElement("a")
                a.href = "https://wa.me/?text=https://example.com/ticket/12345"
                div.append(a)
                
            }

function data(){

}