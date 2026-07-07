/**
 * Injeta o CSS do painel
 */

export function injectStyles() {

    if (document.querySelector("#librastube-style")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "librastube-style";

    style.textContent = `
    
#librastube-panel{

position:fixed;

top:80px;

right:20px;

width:270px;

background:#1e1e1e;

color:white;

border-radius:10px;

padding:15px;

z-index:999999;

font-family:Arial;

box-shadow:0 0 15px rgba(0,0,0,.35);

}

#librastube-header{

font-size:18px;

font-weight:bold;

margin-bottom:15px;

text-align:center;

}

.item{

display:flex;

justify-content:space-between;

margin-bottom:10px;

font-size:14px;

}

#lt-button{

width:100%;

margin-top:10px;

padding:10px;

border:none;

border-radius:6px;

cursor:pointer;

background:#2ea043;

color:white;

font-weight:bold;

}

#lt-button:hover{

opacity:.9;

}

`;

    document.head.appendChild(style);

}