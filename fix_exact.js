const fs = require('fs');

const data = JSON.parse(fs.readFileSync('backgrounds.json', 'utf8'));

// ID 140 - Aurora
const auroraPreview = `<canvas id="rb-aurora-gl-prv" style="width:100%;height:100%;background:#030206;display:block;"></canvas>
<script>
(function(){
  var c = document.getElementById('rb-aurora-gl-prv');
  var gl = c.getContext('webgl2');
  if(!gl) {
    c.style.background = 'linear-gradient(to bottom, #05030e, #0c0822)';
    return;
  }

  var vs = \`#version 300 es
  in vec2 pos;
  void main() {
    gl_Position = vec4(pos, 0.0, 1.0);
  }\`;

  var fs = \`#version 300 es
  precision highp float;
  uniform float uTime;
  uniform float uAmplitude;
  uniform vec3 uColorStops[3];
  uniform vec2 uResolution;
  uniform float uBlend;
  out vec4 fragColor;

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec3 rampColor;
    if (uv.x < 0.5) {
      rampColor = mix(uColorStops[0], uColorStops[1], uv.x * 2.0);
    } else {
      rampColor = mix(uColorStops[1], uColorStops[2], (uv.x - 0.5) * 2.0);
    }
    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
    height = exp(height);
    height = (uv.y * 2.0 - height + 0.2);
    float intensity = 0.6 * height;
    float midPoint = 0.20;
    float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
    fragColor = vec4(intensity * rampColor * auroraAlpha, auroraAlpha);
  }\`;

  function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  var program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(program);

  var posLoc = gl.getAttribLocation(program, 'pos');
  var timeLoc = gl.getUniformLocation(program, 'uTime');
  var ampLoc = gl.getUniformLocation(program, 'uAmplitude');
  var blendLoc = gl.getUniformLocation(program, 'uBlend');
  var resLoc = gl.getUniformLocation(program, 'uResolution');
  var colorsLoc = gl.getUniformLocation(program, 'uColorStops');

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var w, h;
  function resize() {
    w = c.width = c.offsetWidth || 320;
    h = c.height = c.offsetHeight || 200;
    gl.viewport(0, 0, w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  var t = 0;
  function draw() {
    t += 0.05;
    gl.useProgram(program);
    gl.uniform1f(timeLoc, t);
    gl.uniform1f(ampLoc, 1.0);
    gl.uniform1f(blendLoc, 0.5);
    gl.uniform2f(resLoc, w, h);

    gl.uniform3fv(colorsLoc, new Float32Array([
      0.32, 0.15, 1.0,  
      0.48, 1.0, 0.40,  
      0.32, 0.15, 1.0   
    ]));

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>`;

// ID 141 - Beams
const beamsPreview = `<canvas id="rb-beams-gl-prv" style="width:100%;height:100%;background:#000;display:block;"></canvas>
<script>
(function(){
  var c = document.getElementById('rb-beams-gl-prv');
  var gl = c.getContext('webgl2');
  if(!gl) {
    c.style.background = '#000000';
    return;
  }

  var vs = \`#version 300 es
  in vec2 pos;
  out vec2 vUv;
  void main() {
    vUv = pos * 0.5 + 0.5;
    gl_Position = vec4(pos, 0.0, 1.0);
  }\`;

  var fs = \`#version 300 es
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  in vec2 vUv;
  out vec4 fragColor;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= (uResolution.x / uResolution.y);
    float speed = 0.5;
    float t = uTime * speed;
    float col = 0.0;
    for (int i = 0; i < 12; i++) {
      float offset = float(i) * 0.4 - 2.2;
      float warp = noise(vec2(p.y * 0.4, t * 1.5 + float(i) * 5.0)) * 0.9;
      float beamX = offset + warp;
      float dist = abs(p.x - beamX);
      float beamGlow = exp(-dist * dist * 45.0);
      float fade = smoothstep(-1.0, -0.4, p.y) * smoothstep(1.0, 0.4, p.y);
      col += beamGlow * fade * 0.12;
    }
    vec3 beamColor = vec3(col) * vec3(1.0, 1.0, 1.0);
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453);
    beamColor -= (n - 0.5) * 0.08;
    fragColor = vec4(clamp(beamColor, 0.0, 1.0), 1.0);
  }\`;

  function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  var program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(program);

  var posLoc = gl.getAttribLocation(program, 'pos');
  var timeLoc = gl.getUniformLocation(program, 'uTime');
  var resLoc = gl.getUniformLocation(program, 'uResolution');

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var w, h;
  function resize() {
    w = c.width = c.offsetWidth || 320;
    h = c.height = c.offsetHeight || 200;
    gl.viewport(0, 0, w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  var t = 0;
  function draw() {
    t += 0.05;
    gl.useProgram(program);
    gl.uniform1f(timeLoc, t);
    gl.uniform2f(resLoc, w, h);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>`;

// ID 142 - Color Bends
const bendsPreview = `<canvas id="rb-bends-gl-prv" style="width:100%;height:100%;background:#04020a;display:block;"></canvas>
<script>
(function(){
  var c = document.getElementById('rb-bends-gl-prv');
  var gl = c.getContext('webgl2');
  if(!gl) {
    c.style.background = '#04020a';
    return;
  }

  var vs = \`#version 300 es
  in vec2 pos;
  out vec2 vUv;
  void main() {
    vUv = pos * 0.5 + 0.5;
    gl_Position = vec4(pos, 0.0, 1.0);
  }\`;

  var fs = \`#version 300 es
  precision highp float;
  uniform vec2 uCanvas;
  uniform float uTime;
  uniform vec3 uColors[3];
  in vec2 vUv;
  out vec4 fragColor;

  void main() {
    float t = uTime * 0.2;
    vec2 p = vUv * 2.0 - 1.0;
    p.x *= (uCanvas.x / uCanvas.y);
    vec2 q = p;
    for(int j=0; j<3; j++) {
      vec2 rr = sin(1.5 * q.yx + 2.0 * cos(q));
      q += (rr - q) * 0.15;
    }
    vec3 col = vec3(0.0);
    for(int i=0; i<3; i++) {
      vec2 s = q - 0.01 * float(i);
      vec2 r = sin(1.5 * s.yx + 2.0 * cos(s));
      float m = length(r + sin(5.0 * r.y - 3.0 * t + float(i))/4.0);
      float w = 1.0 - exp(-6.0 / exp(6.0 * m));
      col += uColors[i] * w;
    }
    col *= 1.5;
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453);
    col += (n - 0.5) * 0.15;
    fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }\`;

  function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  var program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(program);

  var posLoc = gl.getAttribLocation(program, 'pos');
  var timeLoc = gl.getUniformLocation(program, 'uTime');
  var resLoc = gl.getUniformLocation(program, 'uCanvas');
  var colorsLoc = gl.getUniformLocation(program, 'uColors');

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var w, h;
  function resize() {
    w = c.width = c.offsetWidth || 320;
    h = c.height = c.offsetHeight || 200;
    gl.viewport(0, 0, w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  var t = 0;
  function draw() {
    t += 0.05;
    gl.useProgram(program);
    gl.uniform1f(timeLoc, t);
    gl.uniform2f(resLoc, w, h);
    gl.uniform3fv(colorsLoc, new Float32Array([
      0.32, 0.15, 1.0, 
      0.95, 0.25, 0.6, 
      0.15, 0.50, 1.0  
    ]));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>`;

// ID 143 - Gradient Blinds
const blindsPreview = `<canvas id="rb-blinds-gl-prv" style="width:100%;height:100%;background:#04020a;display:block;"></canvas>
<script>
(function(){
  var c = document.getElementById('rb-blinds-gl-prv');
  var gl = c.getContext('webgl2');
  if(!gl) {
    c.style.background = '#04020a';
    return;
  }

  var vs = \`#version 300 es
  in vec2 pos;
  out vec2 vUv;
  void main() {
    vUv = pos * 0.5 + 0.5;
    gl_Position = vec4(pos, 0.0, 1.0);
  }\`;

  var fs = \`#version 300 es
  precision highp float;
  uniform vec2 iResolution;
  uniform vec2 iMouse;
  uniform float iTime;
  uniform vec3 uColor0;
  uniform vec3 uColor1;
  in vec2 vUv;
  out vec4 fragColor;

  float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
  }
  vec2 rotate2D(vec2 p, float a){
    float c = cos(a);
    float s = sin(a);
    return mat2(c, -s, s, c) * p;
  }

  void main() {
    float uAngle = 0.0;
    float uNoise = 0.2;
    float uBlindCount = 16.0;
    float uSpotlightRadius = 0.6;
    float uSpotlightSoftness = 1.0;
    float uSpotlightOpacity = 1.0;
    float uDistort = 0.0;
    float uShineFlip = 0.0;

    vec2 uv0 = gl_FragCoord.xy / iResolution.xy;
    float aspect = iResolution.x / iResolution.y;
    vec2 p = uv0 * 2.0 - 1.0;
    p.x *= aspect;
    vec2 pr = rotate2D(p, uAngle);
    pr.x /= aspect;
    vec2 uv = pr * 0.5 + 0.5;

    vec2 uvMod = uv;
    float t = uvMod.x;
    vec3 base = mix(uColor0, uColor1, t);

    vec2 offset = iMouse / iResolution;
    float d = length(uv0 - offset);
    float r = max(uSpotlightRadius, 1e-4);
    float dn = d / r;
    float spot = (1.0 - 2.0 * pow(dn, uSpotlightSoftness)) * uSpotlightOpacity;
    vec3 cir = vec3(max(spot, 0.0));
    float stripe = fract(uvMod.x * uBlindCount);
    vec3 ran = vec3(stripe);

    vec3 col = cir + base - ran * 0.15;
    col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;
    fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }\`;

  function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  var program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(program);

  var posLoc = gl.getAttribLocation(program, 'pos');
  var timeLoc = gl.getUniformLocation(program, 'iTime');
  var resLoc = gl.getUniformLocation(program, 'iResolution');
  var mouseLoc = gl.getUniformLocation(program, 'iMouse');
  var c0Loc = gl.getUniformLocation(program, 'uColor0');
  var c1Loc = gl.getUniformLocation(program, 'uColor1');

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var w, h;
  var mx = 0, my = 0;
  function resize() {
    w = c.width = c.offsetWidth || 320;
    h = c.height = c.offsetHeight || 200;
    gl.viewport(0, 0, w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  c.addEventListener('mousemove', function(e) {
    var rect = c.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = rect.height - (e.clientY - rect.top);
  });

  var t = 0;
  function draw() {
    t += 0.05;
    gl.useProgram(program);
    gl.uniform1f(timeLoc, t);
    gl.uniform2f(resLoc, w, h);
    gl.uniform2f(mouseLoc, mx, my);
    gl.uniform3f(c0Loc, 1.0, 0.62, 0.98); 
    gl.uniform3f(c1Loc, 0.32, 0.15, 1.0);  
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>`;

// ID 144 - Line Waves
const wavesPreview = `<canvas id="rb-waves-gl-prv" style="width:100%;height:100%;background:#05030c;display:block;"></canvas>
<script>
(function(){
  var c = document.getElementById('rb-waves-gl-prv');
  var gl = c.getContext('webgl2');
  if(!gl) {
    c.style.background = '#05030c';
    return;
  }

  var vs = \`#version 300 es
  in vec2 pos;
  out vec2 vUv;
  void main() {
    vUv = pos * 0.5 + 0.5;
    gl_Position = vec4(pos, 0.0, 1.0);
  }\`;

  var fs = \`#version 300 es
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  in vec2 vUv;
  out vec4 fragColor;

  #define HALF_PI 1.5707963

  float hashF(float n) {
    return fract(sin(n * 127.1) * 43758.5453);
  }

  float smoothNoise(float x) {
    float i = floor(x);
    float f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hashF(i), hashF(i + 1.0), u);
  }

  float displaceA(float coord, float t) {
    float result = sin(coord * 2.123) * 0.2;
    result += sin(coord * 3.234 + t * 4.345) * 0.1;
    result += sin(coord * 0.589 + t * 0.934) * 0.5;
    return result;
  }

  float displaceB(float coord, float t) {
    float result = sin(coord * 1.345) * 0.3;
    result += sin(coord * 2.734 + t * 3.345) * 0.2;
    result += sin(coord * 0.189 + t * 0.934) * 0.3;
    return result;
  }

  vec2 rotate2D(vec2 p, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
  }

  void main() {
    float uSpeed = 0.3;
    float uInnerLines = 32.0;
    float uOuterLines = 36.0;
    float uWarpIntensity = 1.0;
    float uRotation = -0.785398;
    float uEdgeFadeWidth = 0.0;
    float uColorCycleSpeed = 1.0;
    float uBrightness = 0.35;
    vec3 uColor1 = vec3(1.0, 1.0, 1.0);
    vec3 uColor2 = vec3(1.0, 1.0, 1.0);
    vec3 uColor3 = vec3(1.0, 1.0, 1.0);
    float uMouseInfluence = -0.2;

    vec2 coords = gl_FragCoord.xy / uResolution.xy;
    coords = coords * 2.0 - 1.0;
    coords = rotate2D(coords, uRotation);

    float halfT = uTime * uSpeed * 0.5;
    float fullT = uTime * uSpeed;

    vec2 mPos = rotate2D(uMouse * 2.0 - 1.0, uRotation);
    float mDist = length(coords - mPos);
    float mouseWarp = uMouseInfluence * exp(-mDist * mDist * 4.0);

    float warpAx = coords.x + displaceA(coords.y, halfT) * uWarpIntensity + mouseWarp;
    float warpAy = coords.y - displaceA(coords.x * cos(fullT) * 1.235, halfT) * uWarpIntensity;
    float warpBx = coords.x + displaceB(coords.y, halfT) * uWarpIntensity + mouseWarp;
    float warpBy = coords.y - displaceB(coords.x * sin(fullT) * 1.235, halfT) * uWarpIntensity;

    vec2 fieldA = vec2(warpAx, warpAy);
    vec2 fieldB = vec2(warpBx, warpBy);
    vec2 blended = mix(fieldA, fieldB, mix(fieldA, fieldB, 0.5));

    float fadeTop = smoothstep(uEdgeFadeWidth, uEdgeFadeWidth + 0.4, blended.y);
    float fadeBottom = smoothstep(-uEdgeFadeWidth, -(uEdgeFadeWidth + 0.4), blended.y);
    float vMask = 1.0 - max(fadeTop, fadeBottom);

    float tileCount = mix(uOuterLines, uInnerLines, vMask);
    float scaledY = blended.y * tileCount;
    float nY = smoothNoise(abs(scaledY));

    float ridge = pow(step(abs(nY - blended.x) * 2.0, HALF_PI) * cos(2.0 * (nY - blended.x)), 5.0);

    float lines = 0.0;
    for (float i = 1.0; i < 3.0; i += 1.0) {
      lines += pow(max(fract(scaledY), fract(-scaledY)), i * 2.0);
    }

    float pattern = vMask * lines;

    float cycleT = fullT * uColorCycleSpeed;
    float rChannel = (pattern + lines * ridge) * (cos(blended.y + cycleT * 0.234) * 0.5 + 1.0);
    float gChannel = (pattern + vMask * ridge) * (sin(blended.x + cycleT * 1.745) * 0.5 + 1.0);
    float bChannel = (pattern + lines * ridge) * (cos(blended.x + cycleT * 0.534) * 0.5 + 1.0);

    vec3 col = (rChannel * uColor1 + gChannel * uColor2 + bChannel * uColor3) * uBrightness;
    float alpha = clamp(length(col), 0.0, 1.0);
    fragColor = vec4(col, alpha);
  }\`;

  function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  var program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(program);

  var posLoc = gl.getAttribLocation(program, 'pos');
  var timeLoc = gl.getUniformLocation(program, 'uTime');
  var resLoc = gl.getUniformLocation(program, 'uResolution');
  var mouseLoc = gl.getUniformLocation(program, 'uMouse');

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var w, h;
  var mx = 0.5, my = 0.5;
  function resize() {
    w = c.width = c.offsetWidth || 320;
    h = c.height = c.offsetHeight || 200;
    gl.viewport(0, 0, w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  c.addEventListener('mousemove', function(e) {
    var rect = c.getBoundingClientRect();
    mx = (e.clientX - rect.left) / rect.width;
    my = 1.0 - (e.clientY - rect.top) / rect.height;
  });
  c.addEventListener('mouseleave', function() {
    mx = 0.5;
    my = 0.5;
  });

  var t = 0;
  function draw() {
    t += 0.05;
    gl.useProgram(program);
    gl.uniform1f(timeLoc, t);
    gl.uniform2f(resLoc, w, h);
    gl.uniform2f(mouseLoc, mx, my);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>`;

// Update the objects programmatically
const idMap = {
  140: auroraPreview,
  141: beamsPreview,
  142: bendsPreview,
  143: blindsPreview,
  144: wavesPreview
};

data.forEach(item => {
  if (idMap[item.id]) {
    item.previewCode = idMap[item.id];
  }
});

// Write beautifully formatted backgrounds.json back (properly escaped!)
fs.writeFileSync('backgrounds.json', JSON.stringify(data, null, 2), 'utf8');

console.log('Successfully formatted and updated all exact WebGL previews in backgrounds.json!');
