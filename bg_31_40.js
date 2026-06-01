// Category 4: Tech / AI Animations
window.backgrounds.push(
  {
    id: 31, name: "Neural Network Animation", description: "AI-style node connections.", category: "Tech", scriptReplace: {find:"neural-cvs", replace:"neural-cvs-prev"},
    code: `<canvas id="neural-cvs" style="width:100%;height:100%;background:#0a0a0a;display:block;"></canvas>
<script>
(function(){
  const cvs=document.getElementById('neural-cvs'); const ctx=cvs.getContext('2d'); let w,h,nodes=[];
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  for(let i=0;i<30;i++) nodes.push({x:Math.random()*w, y:Math.random()*h});
  function d(){
    ctx.clearRect(0,0,w,h);
    nodes.forEach(n=>{ n.x+=(Math.random()-0.5)*2; n.y+=(Math.random()-0.5)*2; });
    nodes.forEach((n,i)=>{
      ctx.beginPath(); ctx.arc(n.x,n.y,3,0,6.28); ctx.fillStyle='#d946ef'; ctx.fill();
      for(let j=i+1;j<nodes.length;j++){
        if(Math.hypot(n.x-nodes[j].x,n.y-nodes[j].y)<150){ ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(nodes[j].x,nodes[j].y); ctx.strokeStyle='rgba(217,70,239,0.2)'; ctx.stroke(); }
      }
    }); requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 32, name: "Matrix Rain", description: "Falling code effect.", category: "Tech", scriptReplace: {find:"matrix-cvs", replace:"matrix-cvs-prev"},
    code: `<canvas id="matrix-cvs" style="width:100%;height:100%;background:#000;display:block;"></canvas>
<script>
(function(){
  const cvs=document.getElementById('matrix-cvs'); const ctx=cvs.getContext('2d'); let w,h,cols,drops=[];
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; cols=Math.floor(w/14)+1; drops=Array(cols).fill(1); } window.addEventListener('resize',r); r();
  function d(){
    ctx.fillStyle='rgba(0,0,0,0.05)'; ctx.fillRect(0,0,w,h); ctx.fillStyle='#0f0'; ctx.font='14px monospace';
    for(let i=0;i<cols;i++){
      ctx.fillText(String.fromCharCode(33+Math.random()*94), i*14, drops[i]*14);
      if(drops[i]*14>h && Math.random()>0.975) drops[i]=0; drops[i]++;
    } requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 33, name: "Data Flow Streams", description: "Flowing data lines.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#000;display:flex;justify-content:space-evenly;">
  <div style="width:2px;height:100%;background:linear-gradient(180deg, transparent, #3b82f6, transparent);animation:stream 1.5s infinite;"></div>
  <div style="width:2px;height:100%;background:linear-gradient(180deg, transparent, #3b82f6, transparent);animation:stream 2s infinite 0.5s;"></div>
  <div style="width:2px;height:100%;background:linear-gradient(180deg, transparent, #3b82f6, transparent);animation:stream 1.2s infinite 1s;"></div>
</div>
<style>@keyframes stream { 0%{transform:translateY(-100%);} 100%{transform:translateY(100%);} }</style>`
  },
  {
    id: 34, name: "Circuit Board Pulses", description: "Moving electronic traces.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#022c22;position:relative;overflow:hidden;">
  <div style="position:absolute;width:2px;height:50%;background:#10b981;left:20%;animation:circuitY 2s infinite linear;"></div>
  <div style="position:absolute;width:50%;height:2px;background:#10b981;top:40%;left:20%;animation:circuitX 2s infinite linear 1s;"></div>
  <div style="position:absolute;width:2px;height:50%;background:#10b981;left:70%;top:40%;animation:circuitY 2s infinite linear 2s;"></div>
</div>
<style>@keyframes circuitY { 0%{transform:translateY(-100%);} 100%{transform:translateY(200%);} } @keyframes circuitX { 0%{transform:translateX(-100%);} 100%{transform:translateX(100%);} }</style>`
  },
  {
    id: 35, name: "Digital Grid Scan", description: "Cyberpunk glowing grid.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#09090b;background-image:linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px);background-size:40px 40px;position:relative;">
  <div style="position:absolute;width:100%;height:100%;background:radial-gradient(circle at 50% 50%, transparent, #09090b 80%);"></div>
  <div style="position:absolute;width:100%;height:2px;background:#10b981;box-shadow:0 0 15px #10b981;animation:scanGrid 4s linear infinite;"></div>
</div>
<style>@keyframes scanGrid { 0%{top:0%;} 100%{top:100%;} }</style>`
  },
  {
    id: 36, name: "Hexagon Network", description: "Animated hexagon mesh.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#111;position:relative;background-image:linear-gradient(60deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), linear-gradient(120deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222);background-size:60px 104px;animation:hexPulse 3s infinite alternate;"></div>
<style>@keyframes hexPulse { 0%{filter:hue-rotate(0deg) brightness(1);} 100%{filter:hue-rotate(90deg) brightness(1.5);} }</style>`
  },
  {
    id: 37, name: "Radar Sweep", description: "Rotating radar effect.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#022c15;display:flex;justify-content:center;align-items:center;">
  <div style="width:200px;height:200px;border-radius:50%;border:2px solid #22c55e;background:conic-gradient(from 0deg, transparent 70%, rgba(34,197,94,0.6) 100%);animation:radar 2s linear infinite;"></div>
</div>
<style>@keyframes radar { 100%{transform:rotate(360deg);} }</style>`
  },
  {
    id: 38, name: "Holographic Interface", description: "3D futuristic holographic background.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#000;perspective:800px;overflow:hidden;">
  <div style="width:200%;height:200%;background-image:linear-gradient(rgba(0,255,255,0.3) 2px, transparent 2px), linear-gradient(90deg, rgba(0,255,255,0.3) 2px, transparent 2px);background-size:50px 50px;transform:rotateX(75deg) translateY(-50%);animation:holoGrid 5s linear infinite;"></div>
</div>
<style>@keyframes holoGrid { 0%{transform:rotateX(75deg) translateY(0);} 100%{transform:rotateX(75deg) translateY(50px);} }</style>`
  },
  {
    id: 39, name: "Cyberpunk Grid", description: "Tech-style moving digital waves.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#0f172a;position:relative;overflow:hidden;">
  <div style="position:absolute;width:200%;height:200%;background:repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(14,165,233,0.1) 10px, rgba(14,165,233,0.1) 20px);animation:digiWave 5s linear infinite;"></div>
</div>
<style>@keyframes digiWave { 0%{transform:translateX(0);} 100%{transform:translateX(-50px);} }</style>`
  },
  {
    id: 40, name: "AI Brain Connections", description: "Intelligent node processing visuals.", category: "Tech",
    code: `<div style="width:100%;height:100%;background:#09090b;display:flex;align-items:center;justify-content:center;overflow:hidden;">
  <div style="width:50px;height:50px;border-radius:50%;background:#8b5cf6;box-shadow:0 0 40px #8b5cf6;animation:aiPulse 2s infinite alternate;"></div>
</div>
<style>@keyframes aiPulse { 0%{transform:scale(1);opacity:0.5;} 100%{transform:scale(2);opacity:1;} }</style>`
  }
);
