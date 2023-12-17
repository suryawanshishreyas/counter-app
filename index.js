const countValue = document.getElementById('count');

const inc = ()=>{
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

const dec = ()=>{
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}

const reset = () =>{
    countValue.innerText=0;
}
