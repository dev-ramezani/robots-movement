class robotModel {
    constructor(){
        this.x = 0
        this.y = 0
        this.i = 0
        this.dir = ['NORTH','EAST','SOUTH','WEST']
    }

    Place(x,y,pos){
        if ( x > 0 && x <= 5 ){ this.x = x }
        if ( y > 0 && y <= 5 ){ this.y = y } 
        if ( this.dir.indexOf(pos) !== -1 ){ this.i = this.dir.indexOf(pos) }
    }

    Move(){
        let dis = 1
        if( this.dir[this.i] === 'WEST' || this.dir[this.i] === 'SOUTH' ){ dis = -1 }
        if( ( this.dir[this.i] === 'NORTH' && this.y < 5 ) || ( this.dir[this.i] === 'SOUTH' && this.y > 0 ) ){ this.y += dis }
        else if( ( this.dir[this.i] === 'EAST' && this.x < 5 ) || ( this.dir[this.i] === 'WEST' && this.x > 0 ) ){ this.x += dis }
    }

    Right(){
        if ( this.i === 3 ){ this.i = 0 }
        else{ this.i += 1 }
    }

    Left(){
        if ( this.i === 0 ){ this.i = 3 }
        else{ this.i -= 1 }
    }

    Report(){
        console.log("The robot is located at position (",this.x,",",this.y,") and moving",this.dir[this.i])
    }
}

module.exports = robotModel