class Texture{
    private data_:Color[][]
    private width_:number
    private height_:number
    constructor(data:Color[][],width:number,height:number){
        this.data_=data;
        this.width_=width
        this.height_=height
    }
    getColor(u:number,v:number){
        let tmp=Math.trunc(u)
        u-=tmp;
        if(u<0){
            u+=1
        }
        tmp=Math.trunc(v)
        v-=tmp;
        if(v<0){
            v+=1
        }
        u=Math.round(u*this.width_)
        v=Math.round(v*this.height_);
        if(u==this.width_){
            --u
        }
        if(v==this.height_){
            --v;
        }
        return this.data_[u][v]
        
    }
}