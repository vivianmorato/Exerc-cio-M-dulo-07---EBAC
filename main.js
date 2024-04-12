    const form = document.getElementById('form-validar')


    form.addEventListener('submit', function(e){
        e.preventDefault()

        validaNumero()


        
    })

    function validaNumero(){

        const numA = document.getElementById('campo-a')
        const numB = document.getElementById('campo-b')
        const success = document.getElementById('success-message')
        const error = document.getElementById('error-message')

        na = Number(numA.value)
        nb = Number(numB.value)

    if(nb > na){
        success.style.display='block'
    } else {
        error.style.display='block'
    }

    numA.addEventListener('input', function () {
        success.style.display = 'none'
        error.style.display = 'none'
    })

    numB.addEventListener('input', function () {
        success.style.display = 'none'
        error.style.display = 'none'

    })
}


