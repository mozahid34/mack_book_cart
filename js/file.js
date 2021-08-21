// Selected Button
function selected(btn, type, charge) {
    document.getElementById(btn).style.backgroundColor = 'white';
    const typed = document.getElementById(type);
    typed.innerText = charge;
}


//update-Total Price
function updateTotal() {
    const totalPrice = parseInt(meomory.innerText) + parseInt(storage.innerText) + parseInt(delivery.innerText) + 1200 ;

    document.getElementById('total').innerText = totalPrice;
    document.getElementById('dis').innerText = totalPrice;

    
}



//Meomory
//Clicked 8GB 
document.getElementById('btn1').addEventListener('click', function () {
    selected('btn1','meomory',0);
    updateTotal();
    
})
//clicked 16GB
document.getElementById('btn2').addEventListener('click',function() {
    selected('btn2','meomory',180);
    updateTotal();

})


//STORAGE   
//clicked storage 256GB SSD
document.getElementById('btn3').addEventListener('click',function() {
    
    selected('btn3','storage',0);
    updateTotal();
    
})
//clicked 512GB
document.getElementById('btn4').addEventListener('click',function() {
    
    selected('btn4','storage',100);
    updateTotal();
    
})
//clicked 1TB
document.getElementById('btn5').addEventListener('click',function() {
    
    selected('btn5','storage',180);
    updateTotal();
   
})
 

//Delivery Option
//clicked free
document.getElementById('btn6').addEventListener('click', function() {
    
    selected('btn6','delivery',0);
    updateTotal();
    
})
//clicked special
document.getElementById('btn7').addEventListener('click', function() {
    
    selected('btn7','delivery',20);
    updateTotal();
    
})


//Discount Copon
document.getElementById('apply').addEventListener('click', function(){
    const pomoCode = document.getElementById('pomo');
    const grandTotal = document.getElementById('dis').innerText;
    const dis = document.getElementById('dis'); 
    const total = parseInt(grandTotal);
    const disAmount = total * 0.2;
    const payAmount = total - disAmount;

    //console.log(disAmount);
    
    

    if (pomoCode.value == 'stevekaku') {
         dis.innerText = payAmount;   
       
       
    }
    pomoCode.value = "";
    document.getElementById('apply').setAttribute('disabled',true);
    
})




