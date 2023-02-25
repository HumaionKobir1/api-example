const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data));
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    const nameTag = document.getElementById('name');
    genderTag.innerHTML = user.results[0].gender; 

   const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
   nameTag.innerHTML = name;
}

loadUser();