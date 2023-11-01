

/*const input = document.querySelector('#type')
const add = document.querySelector('#add');
const task = document.querySelector('#task');
const middle = document.querySelector('#middle')
const remove = document.querySelector(".remove");
const btnx = document.querySelector("#btnx");
const removeall = document.querySelector('#removeAll');

removeall.addEventListener('click', ()=>{
    
        task.removeChild(input)
    
})

function addTask(){
    if(input.value === ''){
        input.setAttribute('placeholder', "No empty spaces")
        input.style.backgroundColor = 'red';

    } else{
        //let li = document.createElement('li')
        //ul.appendChild(li)
        //li.innerText = input.value;

        let div = document.createElement('div');
        middle.appendChild(div);
        div.classList.add('task');
        let box = document.createElement('input');
        div.appendChild(box);
        box.setAttribute('type', 'checkbox');
        
        let h4 = document.createElement('h4');
        div.appendChild(h4);
        h4.innerText = input.value;
        let btn = document.createElement('button');
        div.appendChild(btn);
        btn.classList.add('remove');
        let img = document.createElement('img');
        btn.appendChild(img);
        img.setAttribute('src', 'public/images/closeXtranspartent.png')
        

        
        
    }
    
}
add.addEventListener('click',addTask);

btnx.addEventListener('click', ()=>{
    
        input.toggleAttribute('checkbox')
   
    
})

*/
// list 


const ul = document.querySelector('.mytodolist')
const noitems = document.querySelector('.noitems')
const total = document.querySelector('.totaltasks')
const add = document.querySelector('#type')


$("#add").click(additems)

function additems(){
    if($("#type").val()  === ''){
        
        $('#type').css('border', '2px solid red')
    } else{
       const li = document.createElement('li');
       ul.appendChild(li)
       li.innerText = $('#type').val()
       li.classList.add('items')
       let span = document.createElement('span');
       li.appendChild(span)
       span.classList.add('theX')
       span.innerHTML = "\u00d7"  
    }
    add.value = '';
}



// the "Mark as done" button checkes all tasks functionality

$('#selectAll').click(function(){
    if($('.mytodolist li').hasClass('checked')){
        $('.mytodolist li').removeClass('checked')
    } else {
        $('.mytodolist li').addClass('checked');
    }
})

// mark as done, individual tasks

$('.mytodolist').click(function(e){
    if($(e.target).hasClass('checked')){
        $(e.target).removeClass('checked')
        
    } else{
        $(e.target).addClass('checked')
    }
    
    
  
})
additems()


// add tasks by pressing the Enter 

$('#type').keypress(function(e){
    if(e.key === 'Enter'){
        additems();  
    }
})


// the "remove all" button , removes all the tasks
$('#removeAll').click(function(e){
    if(e.type === "click" ){
        $(".mytodolist li").remove()
    }
})

// remove individual elements
$('.mytodolist').click(function(e){
    if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove()
    }
})
