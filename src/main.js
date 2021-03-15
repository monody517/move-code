let html = document.querySelector('#demo')
let style = document.querySelector('#style')
let div1 = document.querySelector('#div1')
let string = `
/* 你好，我是一名前端新人
接下来我要加样式了
这是我加的样式：*/
body{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
#div1{
    border:1px solid red;
    width:400px;
    height:400px;
}
/*
接下来变成八卦
先变成圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
一黑一白
*/
#div1{
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    content:'1';
    display:block;
    border:1px solid red;
}
#div1::after{
    content:'2';
    display:block;
    border:1px solid red;
}
`
let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => { 
        if(string[n] === '\n'){
            string2 += '<br>' 
        }else if(string[n] === ' '){
            string2 += '&nbsp'
        }else{ 
        string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        if(n < string.length -1){
            n += 1
            step()
        }
    },10)
}
step()