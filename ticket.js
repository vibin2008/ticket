const params = new URLSearchParams(window.location.search);
const orderId = params.get("order_id");
const stat = params.get("order_status");
const amount = params.get("order_amount");
const ref = params.get("reference_id");
const message = params.get("txMsg");

var dis = document.getElementById("front")
var uns = document.getElementById("unsuccessful")

if (stat === "SUCCESS"){
    dis.style.display = "inline-block"
    uns.style.display = "none"
}

else{
    dis.style.display = "none"
    uns.style.display = "inline-block"
}

function open(){
                var a = document.createElement("a")
                a.href = "https://wa.me/?text=https://example.com/ticket/12345"
                div.append(a)
                
            }