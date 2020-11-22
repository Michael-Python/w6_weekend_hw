document.addEventListener('DOMContentLoaded', () => {
        console.log('Javascript has loaded');

        // construct form, make it equal to result from #form
        const form = document.querySelector('#form');
        // add the action of submit to the event listener 
        form.addEventListener('submit', handleFormSubmit)
        const button = document.querySelector('#dButton')
        button.addEventListener('click', handleButtonClick);
    })
    // 



const handleFormSubmit = function(event) {
    event.preventDefault();
    const memberListItem = createMemberListItem(event.target)
    const memberList = document.querySelector('#form-result');
    memberList.appendChild(memberListItem);
}

const createMemberListItem = function(form) {
    const memberListItem = document.createElement('li');
    memberListItem.classList.add('member-list-item')

    const newListItem1 = document.createElement('h2');
    newListItem1.textContent = `Superhero Name: ${form.code_name.value}.`;
    memberListItem.appendChild(newListItem1);
    const newListItem2 = document.createElement('h3');
    newListItem2.textContent = `Superhero Power: ${form.superpower.value }.`;
    memberListItem.appendChild(newListItem2);
    const newListItem3 = document.createElement('p');
    newListItem3.textContent = `Years of experience: ${form.experience.value }.`;
    memberListItem.appendChild(newListItem3);
    // const newListItem4 = document.createElement('img');
    // img src = `images/${form.logo.value}`
    //     // because the actual list item stuff is being done in another function, you have to return the construct, or else memberList has nothing to append.
    return memberListItem;
};

const handleButtonClick = function(event) {
    // getElementById looks in the html page for that id and then the part for remove removes that id.
    const dButton = document.getElementById('form-result');
    console.log('Delete button clicked');
    dButton.remove();
}