var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");
var line = new Path2D();
var R = 300/2, d, angle, pX, pY, qX, qY;
for(d=0;d<60;++d)
{
  angle =(d/60)*(2*Math.PI);
  pX = Math.cos(angle)*R;
  pY = -Math.sin(angle)*R;
  qX = 0.9*pX;
  qY = 0.9*pY;
  pX = pX+R;pY=pY+R;
  qX = qX+R;qY=qY+R;
  line.moveTo(pX,pY);
  line.lineTo(qX,qY);
}
var date =new Date();
var hours,minutes,seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
var hoursAngle, minutesAngle, secondsAngle;
secondsAngle=(seconds/60)*(2*Math.PI);
secondsAngle=Math.PI/2 - secondsAngle;
minutesAngle=(minutes/60)*(2*Math.PI);
hoursAngle=(hours%12)/12*2*Math.PI;
var sX, sY, mX, mY, hX, hY;
sX=Math.cos(secondsAngle)*R;
sY= -Math.sin(secondsAngle)*R;
sX=sX+R; sY=sY+R;
mX=Math.cos(minutesAngle)*R;
mY=-Math.sin(minutesAngle)*R;
mX=mX+R; mY=mY+R;
hX=Math.cos(hoursAngle)*R;
hY=-Math.sin(hoursAngle)*R;
hX=hX+R; hY=hY+R;
line.moveTo(sX,sY);
line.lineTo(R,R);
line.moveTo(mX,mY);
line.lineTo(R,R);
line.moveTo(hX,hY);
line.lineTo(R,R);

context.stroke(line);
