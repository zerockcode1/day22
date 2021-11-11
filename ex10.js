
const pointArr = [
    {name:'A', xpos: 3 ,ypos:10 },
    {name:'B', xpos: 7 ,ypos: 6 },
    {name:'C', xpos: 3 ,ypos: 2 },
    {name:'D', xpos: 6 ,ypos: 2 },
]


const target = {xpos:6, ypos:3}

pointArr.sort((a,b) => {
    const distanceA =  Math.sqrt(Math.pow( a.xpos - target.xpos  ,2) +  Math.pow(a.ypos - target.ypos,2 ) )
    const distanceB =  Math.sqrt(Math.pow( b.xpos - target.xpos  ,2) +  Math.pow(b.ypos - target.ypos,2 ) )

    return distanceA - distanceB

})

console.log(pointArr)



