const body  = d3.select("body");
const canvas = body.append("svg").attr("width","100vw").attr("height","100vh");

const data = [
  {
  	'topLeft':[0,0],
  	'topRight':[500,0],
  	'bottomLeft':[0,300],
  	'bottomRight':[500,300]
  },
   {
  	'topLeft':[600,0],
  	'topRight':[1100,0],
  	'bottomLeft':[600,300],
  	'bottomRight':[1100,300]
  },
]



const g = canvas.selectAll("g").data(data);

const gp = g.enter()
						.append("g");

const l1 = gp
.append('line')
.transition()
.delay(100)
.duration(2000)
.attr('x1',(d)=>d.topLeft[0])
.attr('y1',(d)=>d.topLeft[1])
.attr('x2',(d)=>d.topRight[0])
.attr('y2',(d)=>d.topRight[1])
.attr('stroke','#ddd')
.attr('stroke-width',4);

const l2 = gp
.append('line')
.transition()
.delay(200)
.duration(2000)
.attr('x1',(d)=>d.topLeft[0])
.attr('y1',(d)=>d.topLeft[1])
.attr('x2',(d)=>d.bottomLeft[0])
.attr('y2',(d)=>d.bottomLeft[1])
.attr('stroke','#ddd')
.attr('stroke-width',4);

const l3 = gp
.append('line')
.transition()
.delay(300)
.duration(2000)
.attr('x1',(d)=>d.bottomLeft[0])
.attr('y1',(d)=>d.bottomLeft[1])
.attr('x2',(d)=>d.bottomRight[0])
.attr('y2',(d)=>d.bottomRight[1])
.attr('stroke','#ddd')
.attr('stroke-width',4);

const l4 = gp
.append('line')
.transition()
.delay(400)
.duration(2000)
.attr('x1',(d)=>d.topRight[0])
.attr('y1',(d)=>d.topRight[1])
.attr('x2',(d)=>d.bottomRight[0])
.attr('y2',(d)=>d.bottomRight[1])
.attr('stroke','#ddd')
.attr('stroke-width',4);

const t1 = gp.append('text')
.transition()
.delay(1600)
.duration(1000)
  .attr("dx",(d)=>(d.topRight[0]+d.topLeft[0])/2)
  .attr('dy',(d)=>(d.bottomRight[1]+d.topLeft[1])/2)
  .text('Hello')


