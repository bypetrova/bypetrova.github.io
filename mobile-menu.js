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

/* A restrained, staggered entrance for the project collage only. */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window))return;
  var ids=['1790082754926000001','1790085462734000029','1790085482163000030','1790084431643000027','1790084531807000028'];
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting)return;
      entry.target.classList.add('desh-card-visible');
      observer.unobserve(entry.target);
    });
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  ids.forEach(function(id,index){
    var img=document.querySelector('#rec4053187401 .tn-elem[data-elem-id="'+id+'"] img');
    if(!img)return;
    img.classList.add('desh-card-motion');
    img.style.transitionDelay=Math.min(index,2)*90+'ms';
    observer.observe(img);
  });
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
