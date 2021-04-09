// a shader variable
let theShader;
// let shaderTexture;



function preload(){
  // load the shader
  theShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(innerWidth, innerHeight, WEBGL);
  noStroke();
  // // initialize the createGraphics layers
  // shaderTexture = createGraphics(710, 400, WEBGL);
  //
  // // turn off the createGraphics layers stroke
  // shaderTexture.noStroke();
  // x = -50;
  //  y = 0;
}

function light (){
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  pointLight(100,20,50,-200,50,0)
}


function draw() {
  background(0);
  // shader() sets the active shader with our shader
  //shaderTexture.

  shader(theShader);
  light()
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

  // // rect gives us some geometry on the screen
  // shaderTexture.rect(0,0,width, height);


  //pass the shader as a texture
  // texture(shaderTexture);
  // translate(-150, 0, 0);
  //   push();
  //   rotateZ(theta * mouseX * 0.0001);
  //   rotateX(theta * mouseX * 0.0001);
  //   rotateY(theta * mouseX * 0.0001);
  //   theta += 0.05;
  // rect(0,0,width,height)
  rotateX(0.3)
  box(width/4)
  // pop();

  // //let ellipseFidelity = int(map(mouseX, 0, width, 8, 100));
  //   ellipse(260, 0, 200, 200, ellipseFidelity);
  }
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
