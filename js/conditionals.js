const list1 = document.getElementById('list_1');
const list2 = document.getElementById('list_2');

const lists = document.querySelectorAll(".list");
console.log(lists);

// check how many items are in the list

const msg1 = document.getElementById('message_1');
const msg2 = document.getElementById('message_2');

function checkLength(list){
    const msg = list.nextElementSibling;
    // console.log(msg);

    if (list.children.length > 3) {
        msg.innerHTML = "Is longer than 3";
        msg.style.backgroundColor = "green"
    } else {
        msg.innerHTML = "Is shorter than 3";
        msg.style.backgroundColor = "red"
    }
} 

lists.forEach((li) => {
    checkLength(li);
})



