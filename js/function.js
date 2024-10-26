function getinputfieldvaluebyid(id){
    const inputvalue=document.getElementById(id).value;
    const balance=parseFloat(inputvalue);
    return balance;
}

function gettextfieldbyid(id){
    const inputtext=document.getElementById(id).innerText;
    const text=parseFloat(inputtext);
    return text;
}
function showhiddenfile(){
     document.getElementById('success-box').classList.remove('hidden');
     document.getElementById('overlay').classList.remove('hidden');
     
    }
    function hidePopup() {
        document.getElementById('success-box').classList.add('hidden');
        document.getElementById('overlay').classList.add('hidden');
    }

    function transactionfile(){
        document.getElementById('main-section').classList.add('hidden');
        document.getElementById('transaction-section').classList.remove('hidden');
        // document.getElementById('first-box').classList.add('hidden');
        // document.getElementById('second-box').classList.add('hidden');

    }
    function donatefile(){
        document.getElementById('transaction-section').classList.add('hidden');
        document.getElementById('main-section').classList.remove('hidden');
    }
    