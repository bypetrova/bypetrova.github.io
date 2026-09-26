(function(){
  var toggle=document.querySelector('.desh-menu-toggle');
  var panel=document.querySelector('.desh-menu-panel');
  var backdrop=document.querySelector('.desh-menu-backdrop');
  if(!toggle||!panel||!backdrop)return;
  function setOpen(open){
    document.body.classList.toggle('desh-menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    panel.setAttribute('aria-hidden',String(!open));
    if(open)panel.querySelector('a').focus();
    else toggle.focus();
  }
  toggle.addEventListener('click',function(){setOpen(toggle.getAttribute('aria-expanded')!=='true')});
  backdrop.addEventListener('click',function(){setOpen(false)});
  panel.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')setOpen(false)});
  matchMedia('(min-width:768px)').addEventListener('change',function(e){if(e.matches&&toggle.getAttribute('aria-expanded')==='true')setOpen(false)});
})();
