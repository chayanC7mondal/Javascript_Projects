//create a business name genetraor by combining list of adjectives and shop name and another word 
//adjective    c    razy  amazing    fire
/* shopname
engine
foods
garments

another word 
bros
limited
hub */







let rand = Math.random()
let first, second, third;
if(rand<0.33)
{
first="Crazy"

}
else if( rand<0.66 && rand>=0.33)
{
    first="Amazing"
}

else {
    first = "fire"
}



let rand1 = Math.random()
if(rand1<0.33)
{
second="Engine"

}
else if( rand1<0.66 && rand>=0.33)
{
    second="Food"
}

else {
second="Garment"
}




let rand2 = Math.random()
if(rand2<0.33)
{
third="Bros"

}
else if( rand2<0.66 && rand>=0.33)
{
third="Limited"
}

else {
    third="Hub"
}


alert("the Name of Business is: " + `${first} ${second} ${third}` )
