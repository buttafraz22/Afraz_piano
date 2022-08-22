const allKey = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white-key')
const blackKeys = document.querySelectorAll('.key.black-key')

const WHITE_KEYS=['A','S','D','F','G','H','J','K','L','C','V','B','N','M']
const BLACK_KEYS=['Q','W','E','R','T','Y','U','I','O','P']

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
    console.log(src + "CLICK")
    allKey.addEventListener('click',()=>play(src))
})

function play(src){
    new Audio(src).play()
}
document.addEventListener('keydown',e =>{
    const key = e.key

    let whitekey = WHITE_KEYS.indexOf(key)
    let blackkey = BLACK_KEYS.indexOf(key)

    if(whitekey > -1){
        whitekey += 1
        let strNum = (whitekey + whitekey).toString()
        let src
        if(whitekey <9){
             src = 'notes/key0'+strNum+".mp3" 
        }
        else{
             src = 'notes/key'+strNum+".mp3"
        }
        //console.log(src + "KEY")
        play(src)
    }
    if(blackkey > -1){
        
        blackkey += 1
        let strNum = (blackkey + blackkey).toString()
        let src
        if(blackkey < 9){
             src = 'notes/key0'+strNum+".mp3"   
        }
        else{
            src = 'notes/key'+strNum+".mp3" 
        }
        
        //console.log(src + "KEY")
        play(src)
    }
})