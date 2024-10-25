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