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
(function(){
  var progress=document.createElement('div');
  progress.className='desh-progress';
  progress.setAttribute('aria-hidden','true');
  var top=document.createElement('button');
  top.className='desh-to-top';
  top.type='button';
  top.setAttribute('aria-label','Вернуться наверх');
  document.body.append(progress,top);
  var ticking=false;
  function update(){
    var max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform='scaleX('+(max>0?Math.min(1,Math.max(0,scrollY/max)):0)+')';
    top.classList.toggle('desh-shown',scrollY>innerHeight*.8);
    ticking=false;
  }
  addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});
  addEventListener('resize',update);
  top.addEventListener('click',function(){scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});
  update();
})();
