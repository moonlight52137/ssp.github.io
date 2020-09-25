document.querySelector('h2').onclick = function() {
    alert('点击事件');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/text.jpg') {
      myImage.setAttribute('src', 'images/text2.jpg');
    } else {
      myImage.setAttribute('src', 'images/text.jpg');
    }
}


