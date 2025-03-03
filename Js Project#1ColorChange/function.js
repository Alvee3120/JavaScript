const btns = document.querySelectorAll('.button');
const body = document.querySelector('body')

btns.forEach( (btn) => {

    btn.addEventListener('click', function(e){

        console.log(e.target.id);

        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'pink':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
        
    })

})