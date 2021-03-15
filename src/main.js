let html = document.querySelector('#html')
let style = document.querySelector('#style')
let div1 = document.querySelector('#div1')
let string = `/* 你好，我是一名前端新人
接下来我要加样式了
这是我加的样式：*/

#div1{
    border:1px solid red;
    width:200px;
    height:200px;
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
/*
加两个小球
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);
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
        window.scrollTo(0,9999)
        html.scrollTo(0,9999)
        if(n < string.length -1){
            n += 1
            step()
        }
    },50)
}
step()