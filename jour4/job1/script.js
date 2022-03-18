window.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector('button')

    btn.addEventListener("click", function(){

        fetch('expression.txt')

        .then((response) => response.text())
        .then((response) => {
            let newp = document.createElement('p');
            newp.innerHTML = response;
            btn.after(newp);
        })
        .catch();
        
    })
})

//.then((response) => console.log(response))