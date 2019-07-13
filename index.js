'use strict'
var fl = 'white';
var bd =  'black';
var lww ;
var fm = 'serif';
var fs;
var ss = 'normal';

var shape = '';
fill.onchange = () => {
    fl = fill.value;
    switch (shape) {
        case 'circle':
            circle.onclick();
            break;

        case 'square':
            square.onclick();
            break;

        case 'text':
            text.onclick();
            break;

    }
}


bord.onchange = () => {
    bd = bord.value;
    switch (shape) {
        case 'circle':
            circle.onclick();
            break;

        case 'square':
            square.onclick();
            break;

        case 'text':
            text.onclick();
            break;

        case 'line':
            line.onclick();
            break;

    }
}


lw.onchange = () => {
    lww = lw.value;
    switch (shape) {
        case 'circle':
            circle.onclick();
            break;

        case 'square':
            square.onclick();
            break;

        case 'text':
            text.onclick();
            break;

        case 'line':
            line.onclick();
            break;

    }
}

fc.onchange = () => {
   fm = fc.value;
   txt.onclick();
}

sz.onchange = () => { 
   fs = sz.value;
   txt.onclick();
}

st.onchange = () => {
    ss = st.value;
   txt.onclick();
}

bord.onclick = () => strokeStyle = bord.value;

newd.addEventListener('click', create);

function create() {
    insert.style.display = 'block';
    wid.value = 700;
    het.value = 500;
    canc.onclick = () => insert.style.display = 'none';
    ok.onclick = () => {
        if (wid.value <= 1000 && wid.value > 0 && het.value <= 600 && het.value > 0) {

            var w = wid.value;
            var h = het.value;
            insert.style.display = 'none';
            myCanva.style.display = 'block';
            myCanva.setAttribute('width', w);
            myCanva.setAttribute('height', h);
            // myCanva.style.cursor = 'row-resize';
            (h <= 500 && w) ? myCanva.style.margin = '5% auto' : myCanva.style.marginTop = 0;


            myCanva.onmousein =() => {
                witt.value = event.offsetX;
                hitt.value = event.offsetY;
            }
            myCanva.onmousemove = () => {
                witt.value = event.offsetX;
                hitt.value = event.offsetY;

            }

            myCanva.onmouseout = () => {
                witt.value = "";
                hitt.value = "";
            }

            
        } else { alert(`Kindly insert valid values, Consider the following steps: \n \n Width and height value must be inserted. \n  Width and height values must be less than 1000px and 600px respectively.`) }
    }
}


line.onclick = () => {
    shape = 'line';
    myCanva.style.cursor = 'crosshair';
    var ctx = myCanva.getContext('2d');
    var x;
    var y;

    ctx.strokeStyle = bd;
    ctx.lineWidth = lww;

   
    myCanva.onmousedown = () => {
        x = event.offsetX;
        y = event.offsetY;
        ctx.beginPath();
        ctx.moveTo(x, y);

    }

    myCanva.onmouseup = () => {
        x = event.offsetX;
        y = event.offsetY;
        ctx.lineTo(x, y);

        ctx.stroke();
    }


}

square.onclick = () => {
    myCanva.style.cursor = 'crosshair';
    shape = 'square';

    var ctx = myCanva.getContext('2d');
    var x = 0;
    var y = 0;

    var xx = 0;
    var xy = 0;

    ctx.strokeStyle = bd;
    ctx.fillStyle = fl;
    ctx.lineWidth = lww;

    myCanva.onmousedown = () => {
        x = event.offsetX;
        y = event.offsetY;
        ctx.beginPath();


    }

    myCanva.onmouseup = () => {
        xx = event.offsetX;
        xy = event.offsetY;


        ctx.rect(x, y, xx - x, xy - y);
        ctx.stroke();
        ctx.fill();


    }


}


circle.onclick = () => {

    myCanva.style.cursor = 'crosshair';
    shape = 'circle';
    var ctx = myCanva.getContext('2d');
    var x;
    var y;

    var xx;
    var xy;

    ctx.strokeStyle = bd;
    ctx.fillStyle = fl;
    ctx.lineWidth = lww;
    myCanva.onmousedown = () => {
        ctx.beginPath();
        x = event.offsetX;
        y = event.offsetY;

    }

    myCanva.onmouseup = () => {
        xx = event.offsetX;
        xy = event.offsetY;
        ctx.arc(x, y, xy - y, 0 * Math.PI, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
       

    }

}


txt.onclick = () => {
   
    myCanva.style.cursor = 'text';
    shape = 'text';
    var ctx = myCanva.getContext('2d');
    var x;
    var y;
    fnt.style.display = 'block';
    ctx.font = `${ss} ${fs}px ${fm}`;
    myCanva.onmousedown = () => {
       
        ctx.beginPath();
        x = event.offsetX;
        y = event.offsetY;
        ctx.strokeStyle = bd;
        ctx.fillStyle = fl;
        ctx.lineWidth = lww;
       
        var tx = prompt('insert text here');
        if (tx) {
            ctx.fillText(tx, x, y);
            ctx.strokeText(tx, x, y);
            ctx.fill();
        }
        

    }
}






