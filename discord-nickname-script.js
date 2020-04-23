function MainLoop () {
   setTimeout(function () {
nickname = "YOUR_NICKNAME";  // Enter your nickname here
im_admin = 1;                // 1 == YES,   0 == NO


document.querySelector('.wrapper-1BJsBx.selected-bZ3Lue').dispatchEvent(new MouseEvent('contextmenu', {bubbles:true}))

for (var i in document.querySelectorAll('.label-JWQiNe')){
if (document.querySelectorAll('.label-JWQiNe')[i].innerHTML == 'Изменить никнейм'){
  document.querySelectorAll('.label-JWQiNe')[i].dispatchEvent(new MouseEvent('click', {bubbles:true}));
	break;
};
};

input = document.querySelector('.inputDefault-_djjkz');
lastValue = input.value;
input.value = nickname;
event = new Event('change', {returnValue:true, bubbles:true});
event.simulated = true;
tracker = input._valueTracker;
if (tracker) {
  tracker.setValue(lastValue);
}



input.dispatchEvent(event);
document.querySelectorAll('.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeMedium-1AC_Sl.grow-q77ONN')[im_admin].dispatchEvent(new MouseEvent('click', {bubbles:true}))



      MainLoop();

   }, 3000)
}

MainLoop();
