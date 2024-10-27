// document.getElementById('donate-nk').addEventListener('click',function(event){
// event.preventDefault();
// const pre_bal=document.getElementById('donate-amount').innerText;
// const main_bal=document.getElementById('main-amount').innerText;
// const don_bal=document.getElementById('input').value;
// const new_bal=pre_bal+don_bal;
// document.getElementById('donate-amount').innerText=new_bal;
// const present_amount=main_bal-don_bal;
// document.getElementById('main-amount').innerText=present_amount;
// console.log('hiii');

// });
document.getElementById('donate-nk').addEventListener('click',function(event){
    event.preventDefault();
    const pre_bal=gettextfieldbyid('donate-amount');
    const main_bal=gettextfieldbyid('main-amount');
    const don_bal=getinputfieldvaluebyid('input');
    if(don_bal>=0){
        const new_bal=pre_bal+don_bal;
    document.getElementById('donate-amount').innerText=new_bal;
    const present_amount=main_bal-don_bal;
    document.getElementById('main-amount').innerText=present_amount;
    // transaction history
    const date=new Date().toLocaleString()
    const div=document.createElement('div');
    div.classList.add('shadow-md');
    div.innerHTML=`
    <p class="text-2xl  text-center p-5 rounded-md">${don_bal}Taka is Donated for Famine-2024 at Feni,Bangladesh<br>
    date:${date}
    </p>
    
    `
    document.getElementById('transaction-container').appendChild(div);
     
    }
    else{
        alert("Faild Transaction");
    }
    });
    document.getElementById('donate-nk2').addEventListener('click',function(event){
        event.preventDefault();
        const pre_bal2=gettextfieldbyid('donate-amount2');
        const main_bal2=gettextfieldbyid('main-amount');
        const don_bal2=getinputfieldvaluebyid('input2');
        if(don_bal2>=0){
            const new_bal2=pre_bal2+don_bal2;
        document.getElementById('donate-amount2').innerText=new_bal2;
        const present_amount2=main_bal2-don_bal2;
        document.getElementById('main-amount').innerText=present_amount2;
        // transaction history
        const date=new Date().toLocaleString()
        const div=document.createElement('div');
        div.classList.add('shadow-md');
        div.innerHTML=`
        <p class="text-2xl  text-center p-5 rounded-md">${don_bal2}Taka is Donated for Flood relief in Feni,Bangladesh<br>
        date:${date}
        </p>
        
        `
        document.getElementById('transaction-container').appendChild(div);
         
        }
        else{
            alert("Faild Transaction");
        }
    
        });
        document.getElementById('donate-nk3').addEventListener('click',function(event){
            event.preventDefault();
            const pre_bal3=gettextfieldbyid('donate-amount3');
            const main_bal3=gettextfieldbyid('main-amount');
            const don_bal3=getinputfieldvaluebyid('input3');
            if(don_bal3>=0){
                const new_bal3=pre_bal3+don_bal3;
            document.getElementById('donate-amount3').innerText=new_bal3;
            const present_amount3=main_bal3-don_bal3;
            document.getElementById('main-amount').innerText=present_amount3;
            // transaction history
            const date=new Date().toLocaleString()
            const div=document.createElement('div');
            div.classList.add('shadow-md');
            div.innerHTML=`
            <p class="text-2xl  text-center p-5 rounded-md">${don_bal3}Taka is Donated for Aid for Injured for Quota Movement,Bangladesh<br>
            date:${date}
            </p>
            
            `
            document.getElementById('transaction-container').appendChild(div);
             
            }
            else{
                alert("Faild Transaction");
            }
            });
            // 1st
            document.getElementById('donate-nk').addEventListener('click', function(event) {
                event.preventDefault();
                showhiddenfile();  
            });
            // 2nd
            document.getElementById('donate-nk2').addEventListener('click', function(event) {
                event.preventDefault();
                showhiddenfile();  
            });
            // 3rd
            document.getElementById('donate-nk3').addEventListener('click', function(event) {
                event.preventDefault();
                showhiddenfile();  
            });
            // popup
            document.getElementById('success-msg').addEventListener('click', function(event) {
                event.preventDefault();
                hidePopup(); 
            });

            //transaction history
            document.getElementById('show-transaction-history').addEventListener('click',function(event){
               event.preventDefault();
               console.log("History button clicked");
                transactionfile();
            });
            document.getElementById('donate-button').addEventListener('click',function(event){
                event.preventDefault();
                donatefile();
             });


            