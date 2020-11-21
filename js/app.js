document.addEventListener('DOMContentLoaded', () => {
        console.log('Javascript has loaded');

        // construct form, make it equal to result from #form
        const form = document.querySelector('#form');
        // add the action of submit to the event listener 
        form.addEventListener('submit', handleFormSubmit)
    })
    // 



const handleFormSubmit = function(event) {
    event.preventDefault();
    console.log(event);
    // const resultParagph = document.querySelector('#form-result');
    const newListItem1 = document.createElement('li');
    newListItem1.textContent = `Superhero Name ${event.target.code_name.value}.`;

    const newListItem2 = document.createElement('li');
    newListItem2.textContent = `Superhero Power ${event.target.superpower.value }.`;
    const newListItem3 = document.createElement('li');
    newListItem3.textContent = `Years of experience ${event.target.experience.value }.`;
    memberList = document.querySelector('#form-result');
    memberList.appendChild(newListItem1);
    memberList.appendChild(newListItem2);
    memberList.appendChild(newListItem3);
};