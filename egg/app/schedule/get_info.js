const Subscription=require('egg').Subscription;

class getInfo extends Subscription{
    static get schedule(){
        return {
            interval:300000,
            type:'worker',//all
        }
    }

    async subscribe(){
        const info=this.ctx.info;
        console.log(Date.now(),info)
    }
}

module.exports=getInfo;