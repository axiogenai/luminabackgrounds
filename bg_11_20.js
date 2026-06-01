// Category 2: Particle Animations
window.backgrounds.push(
  {
    id: 11, name: "Particle Network", description: "Dots connected with animated lines.", category: "Particle", scriptReplace: {find:"partnet", replace:"partnet-prev"},
    code: `<canvas id="partnet" style="width:100%;height:100%;background:#000;display:block;"></canvas>
<script>
(function(){
  const cvs = document.getElementById('partnet'); const ctx = cvs.getContext('2d'); let w,h,nodes=[];
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  for(let i=0;i<40;i++) nodes.push({x:Math.random()*w, y:Math.random()*h, vx:(Math.random()-.5), vy:(Math.random()-.5)});
  function d(){
    ctx.clearRect(0,0,w,h);
    nodes.forEach((n,i)=>{
      n.x+=n.vx; n.y+=n.vy; if(n.x<0||n.x>w)n.vx*=-1; if(n.y<0||n.y>h)n.vy*=-1;
      ctx.beginPath(); ctx.arc(n.x,n.y,2,0,6.28); ctx.fillStyle='#0ea5e9'; ctx.fill();
      for(let j=i+1;j<nodes.length;j++){
        let dist=Math.hypot(n.x-nodes[j].x,n.y-nodes[j].y);
        if(dist<120){ ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(nodes[j].x,nodes[j].y); ctx.strokeStyle='rgba(14,165,233,'+(1-dist/120)+')'; ctx.stroke(); }
      }
    }); requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 12, name: "Floating Dust Particles", description: "Tiny glowing particles moving slowly.", category: "Particle",
    code: `<div style="width:100%;height:100%;background:#050505;position:relative;overflow:hidden;" id="fp-container">
<style>@keyframes floatP { 0%{transform:translateY(0) scale(1);opacity:0;} 50%{opacity:1;} 100%{transform:translateY(-100px) scale(0.5);opacity:0;} }</style>
<script>
const c = document.getElementById('fp-container');
for(let i=0;i<30;i++){ let p=document.createElement('div'); p.style.cssText=\`position:absolute;width:4px;height:4px;background:#fbbf24;border-radius:50%;box-shadow:0 0 10px #fbbf24;left:\${Math.random()*100}%;top:\${Math.random()*100}%;animation:floatP \${3+Math.random()*4}s infinite linear;animation-delay:-\${Math.random()*5}s;\`; c.appendChild(p); }
</script>
</div>`
  },
  {
    id: 13, name: "Snowfall", description: "Falling snow particles.", category: "Particle", scriptReplace: {find:"snow-cvs", replace:"snow-cvs-prev"},
    code: `<canvas id="snow-cvs" style="width:100%;height:100%;background:#0f172a;display:block;"></canvas>
<script>
(function(){
  const cvs = document.getElementById('snow-cvs'); const ctx = cvs.getContext('2d'); let w,h;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  const drops = []; for(let i=0; i<100; i++) drops.push({x: Math.random()*w, y: Math.random()*h, r: Math.random()*3+1, v: Math.random()*2+1});
  function d(){
    ctx.fillStyle = 'rgba(15,23,42,0.5)'; ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    for(let i=0; i<drops.length; i++){
      let d = drops[i]; ctx.moveTo(d.x, d.y); ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
      d.y += d.v; d.x += Math.sin(d.y*0.01);
      if(d.y > h) { d.y = -d.r; d.x = Math.random()*w; }
    } ctx.fill(); requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 14, name: "Fireflies", description: "Glowing fire embers rising upwards.", category: "Particle", scriptReplace: {find:"embers-cvs", replace:"embers-cvs-prev"},
    code: `<canvas id="embers-cvs" style="width:100%;height:100%;background:#1a0500;display:block;"></canvas>
<script>
(function(){
  const cvs = document.getElementById('embers-cvs'); const ctx = cvs.getContext('2d'); let w,h;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  const embers = []; for(let i=0; i<50; i++) embers.push({x: Math.random()*w, y: Math.random()*h, s: Math.random()*4+1, vy: Math.random()*2+1});
  function d(){
    ctx.fillStyle = 'rgba(26,5,0,0.2)'; ctx.fillRect(0,0,w,h);
    for(let i=0; i<embers.length; i++){
      let e = embers[i]; e.y -= e.vy; e.x += Math.sin(e.y*0.05);
      if(e.y < 0) { e.y = h; e.x = Math.random()*w; }
      ctx.beginPath(); ctx.arc(e.x, e.y, e.s, 0, Math.PI*2); ctx.fillStyle = \`rgba(255, \${Math.random()*100+100}, 0, 0.8)\`; ctx.fill();
    } requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 15, name: "Spark Particles", description: "Sparks flying.", category: "Particle",
    code: `<div style="width:100%;height:100%;background:#000;position:relative;overflow:hidden;" id="spark-c">
<style>@keyframes sparkMove { 100%{transform:translate(50px,-50px) scale(0);opacity:0;} }</style>
<script>
const sc = document.getElementById('spark-c');
setInterval(()=>{
  let p=document.createElement('div'); p.style.cssText=\`position:absolute;width:2px;height:10px;background:#f59e0b;left:\${Math.random()*100}%;bottom:0;animation:sparkMove 1s linear forwards;\`; sc.appendChild(p); setTimeout(()=>p.remove(),1000);
}, 100);
</script>
</div>`
  },
  {
    id: 16, name: "Shooting Stars", description: "Meteors streaking across the night sky.", category: "Particle",
    code: `<div style="width:100%;height:100%;background:#000;position:relative;overflow:hidden;">
  <div style="position:absolute;width:100px;height:2px;background:linear-gradient(90deg, #fff, transparent);top:20%;left:10%;transform:rotate(45deg);animation:shoot 4s infinite;"></div>
  <div style="position:absolute;width:150px;height:2px;background:linear-gradient(90deg, #60a5fa, transparent);top:40%;left:60%;transform:rotate(45deg);animation:shoot 5s infinite 2s;"></div>
</div>
<style>@keyframes shoot { 0% { transform:rotate(45deg) translateX(-100vw); opacity:1; } 100% { transform:rotate(45deg) translateX(100vw); opacity:0; } }</style>`
  },
  {
    id: 17, name: "Galaxy Particle System", description: "Nebula + stars animation.", category: "Particle",
    code: `<div style="width:100%;height:100%;background:#0a001a;position:relative;overflow:hidden;background-image:radial-gradient(circle at 30% 30%, rgba(139,92,246,0.3), transparent 50%), radial-gradient(circle at 70% 70%, rgba(236,72,153,0.3), transparent 50%);animation:galMove 20s infinite alternate linear;">
  <div style="position:absolute;width:100%;height:100%;background:url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"white\" opacity=\"0.5\"/><circle cx=\"50\" cy=\"80\" r=\"1.5\" fill=\"white\" opacity=\"0.8\"/><circle cx=\"150\" cy=\"40\" r=\"0.5\" fill=\"white\" opacity=\"0.3\"/><circle cx=\"180\" cy=\"160\" r=\"2\" fill=\"white\" opacity=\"0.6\"/></svg>');background-size:100px 100px;animation:starTwinkle 3s infinite alternate;"></div>
</div>
<style>@keyframes galMove { to {background-position: 100% 100%;} } @keyframes starTwinkle { 0% {opacity:0.6;} 100% {opacity:1;} }</style>`
  },
  {
    id: 18, name: "Mouse-Reactive Particles", description: "Interactive particle swarm.", category: "Particle", scriptReplace: {find:"mouse-cvs", replace:"mouse-cvs-prev"},
    code: `<canvas id="mouse-cvs" style="width:100%;height:100%;background:#111;display:block;"></canvas>
<script>
(function(){
  const cvs = document.getElementById('mouse-cvs'); const ctx = cvs.getContext('2d'); let w,h,mx=0,my=0;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  cvs.addEventListener('mousemove', e=>{ mx=e.offsetX; my=e.offsetY; });
  const p = []; for(let i=0;i<50;i++) p.push({x:Math.random()*w,y:Math.random()*h});
  function d(){
    ctx.fillStyle='rgba(17,17,17,0.3)'; ctx.fillRect(0,0,w,h);
    p.forEach(pt=>{
      pt.x += (mx - pt.x)*0.02; pt.y += (my - pt.y)*0.02;
      ctx.beginPath(); ctx.arc(pt.x + (Math.random()-0.5)*20, pt.y + (Math.random()-0.5)*20, 2, 0, 6.28); ctx.fillStyle='#06b6d4'; ctx.fill();
    }); requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 19, name: "Particle Explosion Loops", description: "Exploding colorful fireworks.", category: "Particle", scriptReplace: {find:"firework-cvs", replace:"firework-cvs-prev"},
    code: `<canvas id="firework-cvs" style="width:100%;height:100%;background:#000;display:block;"></canvas>
<script>
(function(){
  const cvs = document.getElementById('firework-cvs'); const ctx = cvs.getContext('2d'); let w,h;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  const particles = [];
  function createExplosion(x, y){ for(let i=0; i<30; i++) particles.push({x:x, y:y, vx:(Math.random()-0.5)*10, vy:(Math.random()-0.5)*10, life:1, color:\`hsl(\${Math.random()*360},100%,50%)\`}); }
  setInterval(() => createExplosion(Math.random()*w, Math.random()*h), 1000);
  function d(){
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; ctx.fillRect(0,0,w,h);
    for(let i=particles.length-1; i>=0; i--){
      let p = particles[i]; p.x += p.vx; p.y += p.vy; p.life -= 0.02;
      ctx.fillStyle = p.color; ctx.globalAlpha = p.life; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI*2); ctx.fill();
      if(p.life <= 0) particles.splice(i, 1);
    } ctx.globalAlpha = 1; requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 20, name: "Flow Field Particles", description: "Particle streams following paths.", category: "Particle", scriptReplace: {find:"flow-cvs", replace:"flow-cvs-prev"},
    code: `<canvas id="flow-cvs" style="width:100%;height:100%;background:#000;display:block;"></canvas>
<script>
(function(){
  const cvs=document.getElementById('flow-cvs'); const ctx=cvs.getContext('2d'); let w,h,p=[];
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  for(let i=0;i<200;i++) p.push({x:Math.random()*w,y:Math.random()*h,vx:0,vy:0});
  function d(){
    ctx.fillStyle='rgba(0,0,0,0.1)'; ctx.fillRect(0,0,w,h); ctx.fillStyle='#f59e0b';
    p.forEach(pt=>{
      let angle = (pt.y/h)*Math.PI*4; pt.vx=Math.cos(angle)*2; pt.vy=Math.sin(angle)*2; pt.x+=pt.vx; pt.y+=pt.vy;
      if(pt.x>w) pt.x=0; if(pt.x<0) pt.x=w; if(pt.y>h) pt.y=0; if(pt.y<0) pt.y=h;
      ctx.fillRect(pt.x,pt.y,2,2);
    }); requestAnimationFrame(d);
  } d();
})();
</script>`
  }
);
