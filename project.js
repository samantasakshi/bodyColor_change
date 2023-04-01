window.onload = () => {
    main()
}

function main() {
    const text = document.getElementById('text');
    const button = document.getElementById('button');
    const body = document.getElementById('body');

    button.addEventListener('click',function(){
        const inputNumber = prompt('Input a number');

        if(inputNumber % 2 == 0){
           text.value = 'Even Number';
            //let temp = this.classList;
            text.classList.remove('bg-primary');
            text.classList.add('bg-success', 'text-white');
            button.classList.add('bg-success','text-white');
           // body.classList.add('bg-dark', 'text-white');
            changeBg(body);
        }else{
            text.value = 'Odd Number';
            text.classList.remove('bg-success');
            text.classList.add('bg-primary');
            button.classList.remove('bg-success');
            button.classList.add('bg-primary');
            //body.classList.remove('bg-dark', 'text-white');
           // body.classList.add('bg-danger', 'text-white');
            changeBg(body);
        }
    });
}

const bgArry = [
    'bg-primary', 
    'bg-danger', 
    'bg-success',
    'bg-warning',
    'bg-secondary',
    'bg-black',
    'bg-yellow',
    'bg-info',
    'bg-light'];


    //(... mean rest operator)
    function changeBg(body){
        let tempIndex = Math.floor(Math.random() + bgArry.length);
        let bgColor = bgArry[tempIndex];
        bode.classList.remove(...body.classList);
        body.classList.add(bgColor);
    }