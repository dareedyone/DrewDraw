'use strict'
var fl = 'white';
var bd =  'black';
var lww = 1;
var fm = 'serif';
var fs ='25px';
var ss = 'normal';


lw.onkeypress = (evt) => {
    evt.preventDefault();
}

sz.onkeypress = (evt) => {
    evt.preventDefault();
}

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
    wid.value = '';
    het.value = '';
    canc.onclick = () => insert.style.display = 'none';
    ok.onclick = () => {
        if (wid.value <= 1000 && wid.value > 0 && het.value <= 600 && het.value > 0) {

            var w = wid.value;
            var h = het.value;
            insert.style.display = 'none';
            myCanva.style.display = 'block';
            myCanva.setAttribute('width', w);
            myCanva.setAttribute('height', h);
           
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
    fnt.style.display = 'none';
    fnt.style.display = 'none';
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
    fnt.style.display = 'none';
  

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
        ctx.save();


    }


}


circle.onclick = () => {

    myCanva.style.cursor = 'crosshair';
    shape = 'circle';
    var ctx = myCanva.getContext('2d');
    fnt.style.display = 'none';
    var x;
    var y;

    var xx;
    var xy;

    ctx.strokeStyle = bd;
    ctx.fillStyle = fl;
    
    myCanva.onmousedown = () => {
        ctx.lineWidth = lww;
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
    fnt.style.display = 'none';

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
           
        }
        

    }
  
}



sav.onclick = () => {
    if (myCanva.getAttribute('width') > 0) {
 
    var d=myCanva.toDataURL("image/png");
    var w=window.open('about:blank','image from canvas');
    w.document.write("<img src='"+d+"' alt='from canvas'/>  <b>Right click on the image to save your work</b>");
   
}
}


opn.onclick = () => {
    fnt.style.display = 'none';
    if (myCanva.getAttribute('width') > 0) {
    alert('click the position you want the image on the canvas');
    myCanva.style.cursor = 'default';
}
    var x;
    var y;

    // var xx;
    // var xy;
     // mgw.onchange = () => { 
    //     xx = mgw.value;     
    // }
    // mgh.onchange = () => { 
    //     xy = mgh.value;
    // }
    // if (xx >0 && xy > 0 ) {
    //     alert('halleluyaaaaaah');
      // imgg.style.display = 'block';
    // }else(alert('nil'));
    myCanva.onmousedown = () => {

        x = event.offsetX;
        y = event.offsetY;
        fle.style.display = 'block';
      
       
    }

fle.onchange = () => {
    var ctx = myCanva.getContext('2d');
const img = new Image();
      img.src = fle.value.replace('C:\\fakepath\\', 'images/');
      img.onload = () => {
        ctx.drawImage(img, x, y);
      };

      fle.style.display = 'none';
     
}
}






