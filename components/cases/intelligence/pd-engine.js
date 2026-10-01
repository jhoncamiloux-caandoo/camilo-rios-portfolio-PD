// @ts-nocheck
/* Demo do produto guiada pelo scroll. Portada do site Clínicas (github.com/jhoncamiloux-caandoo/Clinicas).
   Recebe o nó raiz e os textos do idioma; devolve a função de limpeza. */
export function initPd(root, L){
  var track=root.querySelector('.pd-track'),stage=root.querySelector('.pd-stage'),app=root.querySelector('.pd-app');
  var stepsEl=root.querySelector('.pd-steps'),lis=[].slice.call(stepsEl.querySelectorAll('li')),bar=stepsEl.querySelector('.pd-bar span');
  var header=document.querySelector('header');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var STEP_VH=75;
  var AV='/cases/clint/intelligence/crm/';

  function ic(d,sz,stroke){return '<svg width="'+(sz||18)+'" height="'+(sz||18)+'" viewBox="0 0 24 24" fill="none" stroke="'+(stroke||'currentColor')+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="'+d+'"/></svg>';}
  var I={home:'M5 12l-2 0l9 -9l9 9l-2 0 M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7',kan:'M4 4l6 0l0 16l-6 0z M14 4l6 0l0 10l-6 0z',chat:'M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1',
    cal:'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z M16 3v4 M8 3v4 M4 11h16',kpi:'M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z',
    spark:'M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z',
    phone:'M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2',wa:'M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9 M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1',
    ok:'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M9 12l2 2l4 -4',clock:'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 7v5l3 3',x:'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M10 10l4 4m0 -4l-4 4',back:'M9 14l-4 -4l4 -4 M5 10h11a4 4 0 1 1 0 8h-1',
    flt:'M4 4h16v2.2a2 2 0 0 1 -.6 1.4l-4.4 4.4v7l-6 2v-8.5l-4.5 -4.9a2 2 0 0 1 -.5 -1.3v-2.3z'};
  function foot(tasks,days,cls){return '<div class="pd-hr"></div><div class="pd-foot"><img src="'+AV+'p8.webp" alt="">'+ic(I.phone,12)+ic(I.wa,12,cls||'currentColor')+'<span class="sp"></span>'+ic(I.ok,11)+'<span class="'+(cls?'pd-slot-t':'')+'">'+tasks+'</span>'+ic(I.clock,11)+'<span>'+days+'</span></div>';}
  function card(tag,tb,tf,extra,name,ph,tasks,days){return '<div class="pd-card"><div class="pd-card-t"><div><div class="pd-tags"><span class="pd-tag" style="background:'+tb+';color:'+tf+'">'+tag+'</span><span class="pd-x">'+extra+'</span></div><span class="pd-name">'+name+'</span></div><img class="pd-ph" src="'+AV+ph+'.webp" alt=""></div>'+foot(tasks,days)+'</div>';}
  var T={ig:['#FCE7F3','#BE185D'],site:['#EAEEFF','#4B5563'],ag:['#F4F1FF','#6C19DE'],ok:['#E7F9EE','#15803D'],ret:['#FDE8DF','#C2410C'],re:['#EAEEFF','#4B5563']};
  var COLS=[
    [L.cols[0],42,[[L.tags.instagram,T.ig,'+3','Rafael Nunes','p1','1/4','1d'],[L.tags.site,T.site,'+1','Juliana Prado','p8','0/4','2d']]],
    [L.cols[1],81,[[L.tags.mon,T.ag,'+5','Carlos Mendes','p2','3/4','4d'],[L.tags.tue,T.ag,'+4','Paulo Siqueira','p4','3/4','6d']]],
    [L.cols[2],67,[[L.tags.confirmed,T.ok,'+6','Marcos Costa','p3','4/4','9d'],[L.tags.confirmed,T.ok,'+5','Lucas Ferraz','p5','4/4','7d']]],
    [L.cols[3],34,[[L.tags.ret15,T.ret,'+7','Bruno Alves','p6','2/3','15d'],[L.tags.ret30,T.ret,'+4','Diego Rocha','p7','1/3','28d']]],
    [L.cols[4],63,[[L.tags.m8,T.re,'+2','Otávio Lima','p1','0/2','240d'],[L.tags.y1,T.re,'+3','Heitor Duarte','p5','0/2','365d']]]];
  var CONVO=[
    [1.00,'in',L.convo[0][0],L.convo[0][1]],
    [1.30,'in',L.convo[1][0],L.convo[1][1]],
    [2.00,'out',L.convo[2][0],L.convo[2][1]],
    [2.35,'out',L.convo[3][0],L.convo[3][1]],
    [3.00,'in',L.convo[4][0],L.convo[4][1]],
    [3.40,'out',L.convo[5][0],L.convo[5][1]],
    [4.00,'in',L.convo[6][0],L.convo[6][1]],
    [4.30,'out',L.convo[7][0],L.convo[7][1]],
    [4.60,'in',L.convo[8][0],L.convo[8][1]]];

  /* ---------- monta a interface ---------- */
  var h='<div class="pd-side"><div class="pd-logo">c</div><div class="pd-nav">'+ic(I.home)+'</div><div class="pd-nav on">'+ic(I.kan)+'</div><div class="pd-nav n-chat">'+ic(I.chat)+'</div><div class="pd-nav">'+ic(I.cal)+'</div><div class="pd-nav n-kpi">'+ic(I.kpi)+'</div><div class="pd-aura">'+ic(I.spark,15)+'</div></div>';
  h+='<div class="pd-main"><div class="pd-top"><div class="pd-crumb">'+L.clinic+'<i>→</i>'+L.crumb+'</div><span class="pd-total"><b>287</b> '+L.patients+'</span><div class="pd-btn">'+L.addPatient+'</div></div><div class="pd-kanban">';
  COLS.forEach(function(c,i){
    h+='<div class="pd-col"><div class="pd-col-h"><span>'+c[0]+'</span><span class="pd-cnt">'+c[1]+'</span></div>';
    if(i<2){
      h+='<div class="pd-slot"><div class="pd-card"><div class="pd-card-t"><div><div class="pd-tags"><span class="pd-tag" style="background:#E7F9EE;color:#15803D">WhatsApp</span><span class="pd-x">+2</span></div><span class="pd-name">Ana Beatriz Lima</span></div><img class="pd-ph" src="'+AV+'p9.webp" alt=""></div>';
      if(i===0)h+='<div class="pd-task"><div><i></i><span>'+L.task+'</span></div></div>';
      else h+='<div class="pd-sched vis"><div>'+ic(I.cal,13)+'<span>'+L.sched+'</span></div></div>';
      h+=foot('0/4','0d','#16A34A')+'</div></div>';
    }
    c[2].forEach(function(k){h+=card(k[0],k[1][0],k[1][1],k[2],k[3],k[4],k[5],k[6]);});
    h+='</div>';
  });
  h+='</div></div>';
  /* indicadores */
  var kp=[[L.kpis[0][0],'213',L.kpis[0][1],'var(--pmut)',I.cal],[L.kpis[1][0],'186',L.kpis[1][1],'#15803D',I.ok],[L.kpis[2][0],'21',L.kpis[2][1],'#15803D',I.x],[L.kpis[3][0],'23',L.kpis[3][1],'var(--pmut)',I.back]];
  h+='<div class="pd-dash"><div class="pd-dash-top"><b>'+L.dash+'</b><span class="pd-chip">'+L.dashChip+'</span><div class="pd-flt">'+ic(I.cal,13,'#6C19DE')+L.thisMonth+'</div><div class="pd-flt">'+ic(I.flt,13,'#6C19DE')+L.allPros+'</div></div><div class="pd-dash-b"><div class="pd-kpis">';
  kp.forEach(function(k){h+='<div class="pd-kpi"><div class="pd-kpi-h"><span class="pd-ico">'+ic(k[4],14)+'</span>'+k[0]+'</div><strong>'+k[1]+'</strong><small style="color:'+k[3]+'">'+k[2]+'</small></div>';});
  h+='</div><div class="pd-g2"><div class="pd-box"><div class="pd-box-h">'+L.chart1+'<span class="pd-leg"><i style="background:var(--p200)"></i>'+L.scheduled+'</span><span class="pd-leg"><i style="background:var(--p600)"></i>'+L.done+'</span></div><div class="pd-bars">';
  var days=[1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25],ag=[11,12,10,13,9,12,11,14,10,12,11,13,10,12,11,9,12,11,10],fal=[1,2,1,1,0,2,1,1,1,2,1,1,1,1,2,1,1,1];
  days.forEach(function(d,i){var last=i===days.length-1,a=ag[i],real=last?4:a-fal[i];h+='<div'+(last?' class="pd-today"':'')+'><em>'+(last?L.today:'')+'</em><b style="height:'+Math.round(a/15*100)+'%"><i style="height:'+Math.round(real/a*100)+'%"></i></b></div>';});
  h+='</div><div class="pd-xl">';
  days.forEach(function(d,i){h+='<span>'+((i%3===0||i===days.length-1)?String(d).padStart(2,'0'):'')+'</span>';});
  h+='</div></div><div class="pd-box"><div class="pd-box-h">'+L.chart2+'</div>';
  [['WhatsApp','W','#16A34A',118],['Instagram','I','#DB2777',54],[L.referral,'In','#6C19DE',27],['Site','S','#597EFF',14]].forEach(function(c){h+='<div class="pd-ch"><span style="background:'+c[2]+'">'+c[1]+'</span><div><div class="pd-ch-t">'+c[0]+'<small>'+c[3]+' '+L.patients+'</small></div><div class="pd-ch-b"><i style="width:'+Math.round(c[3]/118*100)+'%"></i></div></div></div>';});
  h+='</div></div><div class="pd-g2"><div class="pd-box"><div class="pd-box-h">'+L.chart3+'<span class="pd-leg">'+L.less+' <i style="background:#F1EFFF;width:10px;height:10px"></i><i style="background:#D1BBFF;width:10px;height:10px"></i><i style="background:#9C6DFF;width:10px;height:10px"></i><i style="background:#6C19DE;width:10px;height:10px"></i> '+L.more+'</span></div><div class="pd-heat"><span></span>';
  ['08h','10h','12h','14h','16h','18h'].forEach(function(x){h+='<span class="hh">'+x+'</span>';});
  var ramp=['#F8F7FF','#F1EFFF','#E8E1FF','#D1BBFF','#9C6DFF','#6C19DE'];
  [[L.days[0],[4,7,3,6,8,5]],[L.days[1],[6,9,4,7,10,6]],[L.days[2],[5,8,3,9,12,7]],[L.days[3],[6,10,4,8,11,6]],[L.days[4],[7,9,5,6,8,4]],[L.days[5],[8,6,2,0,0,0]]].forEach(function(r){
    h+='<span class="l">'+r[0]+'</span>';
    r[1].forEach(function(v){var l=Math.min(5,Math.ceil(v/12*5));h+='<span style="background:'+ramp[l]+';color:'+(l>=4?'#fff':'var(--pfg)')+'">'+(v||'')+'</span>';});
  });
  h+='</div></div><div class="pd-box pd-gauge"><div class="pd-box-h">'+L.chart4+'</div><div class="g"><svg width="150" height="84" viewBox="0 0 150 84"><path d="M12 78 A63 63 0 0 1 138 78" fill="none" stroke="#F1EFFF" stroke-width="14" stroke-linecap="round"/><path d="M12 78 A63 63 0 0 1 138 78" fill="none" stroke="#6C19DE" stroke-width="14" stroke-linecap="round" stroke-dasharray="178 198"/></svg><strong>90%</strong></div><small>'+L.gaugeSub+'</small><span class="meta">'+L.gaugeMeta+'</span></div></div></div></div>';
  h+='<div class="pd-cur"><span></span><svg width="20" height="20" viewBox="0 0 24 24" style="position:relative;display:block"><path d="M4 3l16 7l-7 2.5l-2.5 7z" fill="#2F2C5D" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg></div>';
  h+='<div class="pd-chat"><div class="pd-chat-h"><img src="'+AV+'p9.webp" alt=""><div><b>Ana Beatriz Lima</b><small>'+ic(I.chat,11)+'WhatsApp</small></div></div><div class="pd-msgs">';
  CONVO.forEach(function(m){h+='<div class="pd-m '+m[1]+'"><div>'+m[2]+'<small>'+m[3]+'</small></div></div>';});
  h+='<div class="pd-typing"><div><i></i><i></i><i></i></div></div></div><div class="pd-chat-f"><div>'+L.input+'</div></div></div>';
  app.innerHTML=h;

  var q=function(s){return app.querySelector(s);},qa=function(s){return [].slice.call(app.querySelectorAll(s));};
  var cols=qa('.pd-col'),cnts=qa('.pd-cnt'),slots=qa('.pd-slot'),task=q('.pd-task'),slotT=qa('.pd-slot-t'),kanban=q('.pd-kanban'),dash=q('.pd-dash'),cur=q('.pd-cur'),chat=q('.pd-chat');
  var msgs=qa('.pd-m'),typing=q('.pd-typing'),total=q('.pd-total b'),nChat=q('.n-chat'),nKpi=q('.n-kpi'),kpi0=q('.pd-kpi'),today=q('.pd-today');
  var cap=root.querySelector('.pd-cap'),capN=cap.querySelector('.pd-cap-n'),capT=cap.querySelector('.pd-cap-t'),capD=cap.querySelector('.pd-cap-d'),dots=[].slice.call(cap.querySelectorAll('.pd-dots span')),hintT=cap.querySelector('.pd-hint-t');
  var STEPS=lis.map(function(li){return [li.querySelector('.pd-st-h span:last-child').textContent,li.querySelector('p').textContent];});

  /* ---------- estado por progresso ---------- */
  var mob=false,scale=1,W=0,H=0;
  function render(p){
    var s=Math.min(5,Math.floor(p*6)),sp=Math.max(0,p*6-s),inNovo=s===2||s===3,inAg=s>=4,up=s===5&&sp>=.5;
    bar.style.height=Math.round(p*100)+'%';
    stepsEl.classList.toggle('started',s>0);
    lis.forEach(function(li,i){li.classList.toggle('on',s===i+1);li.classList.toggle('done',s>i+1);});
    total.textContent=s>=2?'288':'287';
    kanban.classList.toggle('dim',s===1);
    cols.forEach(function(c,i){
      var focus=(inNovo&&i===0)||(s===4&&i===1),changed=(i===0&&inNovo)||(i===1&&inAg);
      c.classList.toggle('focus',focus);c.classList.toggle('changed',changed);
      c.classList.toggle('dim',s>=2&&s<=4&&!focus);
      cnts[i].textContent=COLS[i][1]+(changed?1:0);
    });
    slots[0].classList.toggle('vis',inNovo);slots[1].classList.toggle('vis',inAg);
    task.classList.toggle('vis',s>=3);
    slotT.forEach(function(t){t.textContent=s>=4?'2/4':(s>=3?'1/4':'0/4');});
    dash.classList.toggle('vis',s===5&&sp>=.22);
    cur.classList.toggle('vis',s===5&&sp<.4);cur.classList.toggle('click',s===5&&sp>.14&&sp<.4);
    chat.classList.toggle('vis',s>=1&&s<=4);
    nChat.classList.toggle('on',s===1);nKpi.classList.toggle('on',s===5);
    kpi0.classList.toggle('hi',up);kpi0.querySelector('strong').textContent=up?'214':'213';
    var sm=kpi0.querySelector('small');sm.textContent=up?L.kpiUp:L.kpis[0][1];sm.style.color=up?'var(--p600)':'var(--pmut)';
    today.classList.toggle('hi',up);today.querySelector('b').style.height=Math.round((10+(up?1:0))/15*100)+'%';
    var next=null;
    msgs.forEach(function(m,i){var on=p>=CONVO[i][0]/6;m.classList.toggle('vis',on);if(!on&&!next)next=CONVO[i];});
    typing.classList.toggle('vis',!!(s>=1&&s<=4&&next&&next[1]==='in'&&p>next[0]/6-.06));
    if(mob){
      dots.forEach(function(d,i){d.classList.toggle('on',s>=i+1);});
      capN.textContent=s?String(s):'·';
      hintT.textContent=L.stepOf.replace('{n}',s);root.classList.toggle('is-end',s===5);
      capT.textContent=s?STEPS[s-1][0]:L.capTitle;
      capD.textContent=s?STEPS[s-1][1]:L.capDesc;
      /* câmera: aproxima a região que importa em cada passo */
      var chatR={x:688,y:190,w:312,h:490},colR={x:70,y:40,w:380,h:420},dashR={x:0,y:0,w:500,h:440};
      var R=s===0?{x:0,y:0,w:1000,h:680}:s===1?chatR:(s===2||s===3)?colR:s===4?(sp<.5?chatR:colR):dashR;
      var z=Math.min(W/R.w,H/R.h);
      var cl=function(t,view,full){return full<=view?(view-full)/2:Math.min(0,Math.max(view-full,t));};
      app.style.transform='translate('+Math.round(cl(W/2-(R.x+R.w/2)*z,W,1000*z))+'px,'+Math.round(cl(H/2-(R.y+R.h/2)*z,H,680*z))+'px) scale('+z+')';
    }
  }

  /* altura de referência estável: no celular a barra de endereço muda innerHeight durante o scroll,
     e recalcular nesse momento fazia a tela pular. Só refaz o layout se a largura mudar ou a altura mudar muito. */
  var refW=0,refH=0;
  function layout(force){
    var iw=window.innerWidth,ih=document.documentElement.clientHeight;
    if(!force&&iw===refW&&Math.abs(ih-refH)<160)return;
    refW=iw;refH=ih;
    var vh=ih,top=header?header.offsetHeight:72;
    root.style.setProperty('--pd-top',top+'px');
    mob=window.innerWidth<760;root.classList.toggle('is-mob',mob);
    /* trilho em px: 5 passos + abertura; no celular cada passo pede um pouco menos de rolagem */
    track.style.height=reduce?'':Math.round(vh*((mob?.62:STEP_VH/100)*6+1))+'px';
    W=stage.clientWidth;
    if(mob){H=Math.max(300,vh-top-250);stage.style.height=H+'px';}
    else{scale=Math.min(1,W/1000,(vh-top-48)/680);stage.style.height=Math.round(680*scale)+'px';app.style.transform='scale('+scale+')';}
    update();
  }
  function update(){
    if(reduce){render(5.5/6);return;}
    var r=track.getBoundingClientRect(),span=Math.max(1,r.height-(refH-(parseFloat(root.style.getPropertyValue('--pd-top'))||72)));
    render(Math.min(1,Math.max(0,((parseFloat(root.style.getPropertyValue('--pd-top'))||72)-r.top)/span)));
  }
  var tick=false;
  var onScroll=function(){if(!tick){tick=true;requestAnimationFrame(function(){tick=false;update();});}};
  var rt,onResize=function(){clearTimeout(rt);rt=setTimeout(function(){layout(false);},150);};
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onResize);
  layout(true);
  return function(){window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onResize);clearTimeout(rt);app.innerHTML='';};
}
