

let payment = document.querySelector('#payment'),
 datePayment = document.querySelector('#datePayment'),
  button = document.querySelector('#button') , 
   paymentList = document.querySelector('#payments__list');
   let buttonEdit = document.querySelector('#buttonEdit');
   let expensesContainer = document.querySelector('#expenses');
   let expensesName = document.querySelector('#expensesName');
   let expensesAmount = document.querySelector('#expensesAmount');
   let ulexpenses = document.querySelector('#expenses__form');


let fecha = new Date();
let days = ['Sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday'];

console.log(days[fecha.getDay()]);


    buttonEdit.style.display=" none ";
    expensesContainer.style.display = 'none';
    


button.addEventListener('click' , addPayment);
document.addEventListener('DOMContentLoaded' , showPayment);
//userList.addEventListener('click' , settingsUser);

function addPayment(){
let savePayment;
 if(localStorage.getItem('payment') == null){
   savePayment = [];
    }
     else
      { savePayment = JSON.parse(localStorage.getItem('payment'));}

        let paymentU = {
         
         payment:payment.value,
         paymentDate:new Date(datePayment.value),
         expenses:[{
                expenseName:'empty', 
                expenseAmount:'empty'
         }]             
        };//end of the object user

           
            savePayment.push(paymentU);//push the user to the array
             localStorage.setItem('payment' , JSON.stringify(savePayment))
              cleanList(); //function to clean the userInterface
               showPayment();//function to show the user

}//end of the function addUser


function showPayment(){
let getPayment;
 if(localStorage.getItem('payment') === null)
  {
    getPayment = [];
     }else{
      getPayment = JSON.parse(localStorage.getItem('payment'));
       getPayment.forEach(element => {
        let li = document.createElement('li');
         li.className = 'payment--list';
           li.appendChild(document.createTextNode(`Date:${element.paymentDate}------------  Payment:${element.payment} `));
    
            let link = document.createElement('a');
             link.className = 'remove--payment';
              link.textContent='remove ';
               link.setAttribute('href', '#');
    
                 let link2 = document.createElement('a');
                   link2.className = 'edit-payment';
                    link2.setAttribute('href' , '#');
                     link2.textContent = ' Edit ';

                      let expensesLink = document.createElement('a');
                      expensesLink.className ='expenses--payment';
                      expensesLink.setAttribute('href' , '#');
                      expensesLink.textContent = ' expenses ';
     
     
     li.appendChild(link);
     li.appendChild(link2);
     li.appendChild(expensesLink);
     paymentList.appendChild(li);
   });//end of the else 
}
settingsPayment();//calling setting Users in case the user hits the user´s options

}//end of the function that shows the users


//function to clean the ul list to updte the content

function cleanList(){
 while(paymentList.firstChild)
    { paymentList.removeChild(paymentList.firstChild);}
      }//end of function clean list

//function remove users from the local storge and also the 

function settingsPayment(){
   
    let listItems = document.querySelectorAll('.payment--list');
    
    listItems.forEach((element , index) => {

     element.addEventListener('click' , (e)=> {
      
      if(e.target.classList.contains('remove--payment'))
         {    //function to remove element from the list  
           removeElement(index);
          } 
            
            
            if(e.target.classList.contains('edit-payment')){
             //function to edit element from the list
              editElement(index);
               }

               if(e.target.classList.contains('expenses--payment')){

                              showExpenses(index);

               }
                })//endd of the element event4 listener
                 })//end of the for each
                   }//end of the function



                   function showExpenses(index){
 
                      expensesContainer.style.display = 'block';

                      let payments;

                      if(localStorage.getItem('payment') === null)
                      {
                        payments = [];
                      }
                      else{
                          
                         payments = JSON.parse(localStorage.getItem('payment'))
                        let expensesArray = payments[index].expenses;
                        this. listItems = document.querySelectorAll('.payment--list');
                         console.log(this.listItems);
                        expensesArray.forEach((element , index) => {
                          if(element.expenseName === 'empty' && element.expenseAmount === 'empty'){
                           
                             

                            this.li = document.createElement('li');
                            this.li.className = 'expenses--item';
                            this.li.appendChild(document.createTextNode(`${element.expenseName}`))
                            
                            ulexpenses.appendChild(this.li);
                            
                            
                          }
                          else
                          {
                            console.log(element.expenseName);
                          }
                        })
                         
            
                              
                        }
                   }


                   //function to remove an element of the local storge and also the DOM 
function removeElement(index){
let payment;
 if(localStorage.getItem('payment') === null)
  {payment = [];}
   else
    {
     payment = JSON.parse(localStorage.getItem('payment'));
      payment.forEach((element , position) => {
       if(position == index)
         { payment.splice(position , 1);}
           })//end  of the forEach
             payment = localStorage.setItem('payment' , JSON.stringify(payment));
              cleanList();
               showPayment();
}//end of the else
}//end of the function removeElement 

function editElement(index){
let paymentsEdit;

if(localStorage.getItem('payment') === null)
 {paymentsEdit = [];}
  else
   {
    paymentsEdit = JSON.parse(localStorage.getItem('payment'));
     payment.value = paymentsEdit[index].payment;
      datePayment.value = paymentsEdit[index].paymentDate;

      button.style.display="none";
      buttonEdit.style.display="block";
}//end of the user

buttonEdit.addEventListener('click' , ()=> {
  if(typeof paymentsEdit !== 'undefined'){ 
  paymentsEdit[index].payment = payment.value;
    paymentsEdit[index].datePayment = datePayment.value; 
    paymentsEdit = localStorage.setItem('payment' , JSON.stringify(paymentsEdit));
    button.style.display="block";
    buttonEdit.style.display="none";

    cleanList();
    showPayment();
  }
})

}//end of the function edit element 





