const body = d3.select("body").style("overflow","hidden").style("padding",0).style("margin",0);

const canvas = body.append("svg").attr("width","100vw").attr("height","100vh").style("cursor","pointer");

const pointLocations = [null,null];

const isAllowDraw = false;

const toggleButton = canvas.append("g").attr("x",0).attr("y",0)
					 .append("rect")
					 .attr("x",0)
					 .attr("y",0)
					 .attr("width","100vw")
					 .attr("height",50)
					 .attr("fill","#002de2").style("opacity",0.4);


const drawArea = canvas.append("g").attr("x",0).attr("y",50)
					 .append("rect")
					 .attr("x",0)
					 .attr("y",50)
					 .attr("width","100vw")
					 .attr("height","100vh")
					 .attr("fill","#000").style("opacity",0.8);


drawArea.on("click",(e)=>{

    pointLocations.push([e.clientX,e.clientY]);
    

    const group = canvas.selectAll("g").data(pointLocations);
    
    const g = group.enter()
    			.append("g");
    const dot = g.append('circle')
    			.attr("r",4)
    			.transition()
    .delay(100)
    .duration(500)
    			.attr("cx",(d)=>d[0])
    			.attr("cy",(d)=>d[1])
    			.attr("fill","#FFD"); 

   const Locations =  pointLocations.filter((item,index)=>{
        if(item!==null) return item;	
    });

   const coordinatesLocation = [];

   for(let i=0;i<Locations.length-1;i++) {
   	   coordinatesLocation.push([Locations[i],Locations[i+1]]);
   }

  const polygon = canvas.selectAll("line").data(coordinatesLocation);

  polygon.enter()
  .append("line")
  .attr("x1",(d)=>d[0][0])
  .attr("y1",(d)=>d[0][1])
  .attr("x2",(d)=>d[1][0])
  .attr("y2",(d)=>d[1][1])
  .transition()
    .delay(10)
    .duration(500)
  .attr("stroke-width",4)
  .attr("stroke",(d)=>{
  	 return "#ad"+Math.round(Math.random(1)*9);
  })

});









