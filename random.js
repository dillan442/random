var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0,0,1000,2000,"white")
    makeCircle(100,40,15,"green")
    makeRect(85,40,30,35,"green")
    makeRect(83,38,80,3,"white")
    makeRect(79,40,4,14,"green")
    makeRect(117,40,4,14,"green")
    makeRect(89,76,5,8,"green")
    makeRect(106,76,5,8,"green")
    makeCircle(93,33,1,"white")
    makeCircle(106,33,1,"white")
    makePolygon("93 30 88 23 91 21 96 30","green",1)
    makePolygon("103 30 109 21 112 24 108 30","green",1)
    
}



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
   makeRect(0,0,1000,2000,"white")
  makeCircle(150,15,10,"yellow")
makeRect(0,80,230,100,"green")
makeRect(80,60,40,20,"blue")
makeRect(95,67,10,13,"black")
makePolygon("70 60 130 60 100 30","black",1)
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
   makeRect(0,0,1000,2000,"white")
   makeRect(40,45,1100, 10,"gray")
   makeRect(40,30,16,46,"black")
   makeRect(75,30,16,46,"black")
   makeRect(105,30,16,46,"black")
   
   
   makeCircle(48,38,7,"red")
   makeCircle(48,53,7,"gray")
   makeCircle(48,68,7,"gray")
   
   
   makeCircle(83,38,7,"red")
   makeCircle(83,53,7,"gray")
   makeCircle(83,68,7,"gray")
   
   
   
   makeCircle(113,38,7,"red")
   makeCircle(113,53,7,"gray")
   makeCircle(113,68,7,"gray")
   
   
   
}

function createFourthScene(){
     makeRect(0,0,1000,2000,"white")
    makeCircle(100,40,15,"green")
    makeRect(85,40,30,35,"green")
    makeRect(83,38,80,3,"white")
    makeRect(79,40,4,14,"green")
    makeRect(117,40,4,14,"green")
    makeRect(89,76,5,8,"green")
    makeRect(106,76,5,8,"green")
    makeCircle(93,33,1,"blue")
    makeCircle(106,33,1,"blue")
    makePolygon("93 30 88 23 91 21 96 30","green",1)
    makePolygon("103 30 109 21 112 24 108 30","green",1)
    
}


function createFifthScene(){
    makeRect(0,0,1000,2000,"black")
  makeCircle(150,15,10,"white")
makeRect(0,80,230,100,"green")
makeRect(80,60,40,20,"blue")
makeRect(95,67,10,13,"gray")
makePolygon("70 60 130 60 100 30","gray",1)

}

function createSixthScene(){
     makeRect(0,0,1000,2000,"white")
   makeRect(40,45,1100, 10,"gray")
   makeRect(40,30,16,46,"black")
   makeRect(75,30,16,46,"black")
   makeRect(105,30,16,46,"black")
   
   
   makeCircle(48,38,7,"gray")
   makeCircle(48,53,7,"gray")
   makeCircle(48,68,7,"green")
   
   
   makeCircle(83,38,7,"gray")
   makeCircle(83,53,7,"gray")
   makeCircle(83,68,7,"green")
   
   
   
   makeCircle(113,38,7,"gray")
   makeCircle(113,53,7,"gray")
   makeCircle(113,68,7,"green")
}






// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    
    // If the number is less than 0.33, call the function to create your first scene.
    var myNumber = Math.random()
    if(myNumber<0.17){
        createFirstScene()
    }else if(myNumber<0.25){
        createFourthScene()
    }    else if(myNumber<0.45){
        createSecondScene()
    }else if(myNumber<0.65){
        createFifthScene()
    } else if(myNumber<0.85) {
        createThirdScene()
    } else if(myNumber<1.0){
        createSixthScene()
    }

        
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}