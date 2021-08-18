function updateNumber(product,price,isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productQuantity = productInput.value;
    
    if (isIncreasing == true) {
        productQuantity = parseInt(productQuantity) + 1 ;
    }
    else if(productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1; 
    }
    productInput.value = productQuantity;
    // update  total
    const  productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productQuantity * price ;
//calculate total
    calculateTotal();
};
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue ('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // update 
    document.getElementById('sub-total').innerText = subTotal;
    const tax = subTotal / 10 ;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = subTotal + tax;

};
// phone event hadalar
document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone',1219,false);
    
});

// case event hadalar
document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1 ;
    updateNumber('case',59,true);

});
document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateNumber('case',59,false);
});

