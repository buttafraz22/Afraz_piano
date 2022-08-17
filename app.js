const allKey = document.querySelectorAll('.key')

allKey.forEach((allKey,i) =>{
    let number = i+1 
    let strNum
    if(i < 9){
        //number = i + 1
        strNum = "0"+number
        //console.log(strNum)
    }
    else{
        //number = i + 1
        strNum = number.toString()
    }
    const src = 'notes/key'+strNum+".mp3"
    console.log(src)
    allKey.addEventListener('click',()=>play(src))
})

function play(src){
    new Audio(src).play()
}