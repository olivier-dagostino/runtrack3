window.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector('button')

    btn.addEventListener("click", function(){

        fetch('expression.txt')
        .then((response) =>  
            response.text())
        .then((response) => 
            console.log(response)
        )
    })
})