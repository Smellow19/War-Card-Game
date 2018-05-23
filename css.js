let dealDiv = document.getElementById('deal');
let drawDiv = document.getElementById('draw');
let autoplayDiv = document.getElementById('autoplay');

mouseDown = (element) => {
    element.addEventListener('mousedown', () => {
        element.style.backgroundColor = '#C0C0C0';
    });
}

mouseUp = (element) => {
    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = '#ffffff';
    });
}

mouseEnter = (element) => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = '#ffffff';
    });
}

mouseLeave = (element) => {
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = '#D3D3D3';
    });
}



mouseDown(dealDiv);
mouseDown(drawDiv);
mouseDown(autoplayDiv);

mouseUp(dealDiv);
mouseUp(drawDiv);
mouseUp(autoplayDiv);

mouseEnter(dealDiv);
mouseEnter(drawDiv);
mouseEnter(autoplayDiv);

mouseLeave(dealDiv);
mouseLeave(drawDiv);
mouseLeave(autoplayDiv);
