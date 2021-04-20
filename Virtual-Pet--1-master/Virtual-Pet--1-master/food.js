class Food{
    constructor(){var FoodStock,lastFed
        var Milk=loadImage("images/milk.png")
    }
    display(){
        var x=80,y=100
        imageMode(CENTER)
        image(this.image,720,220,70,70);
        if(this.foodStock!=0){
            for(1=0,i<this.foodStock;i++){
                if (i%10==0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,20,50)
                x=x+30
            }
        }
    }
    bedroom(){
        background("virtual pet images/Bed Room.png",550,500)
    }
     garden(){background("virtual pet images/Garden.png",550,500)}
     washroom(){background("virtual pet images/Wash Room.png")}
}