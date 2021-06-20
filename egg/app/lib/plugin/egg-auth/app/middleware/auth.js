module.exports=options=>{
    return async (ctx,next)=>{
        const url=ctx.request.url;
        console.log('url',url);
        const user=ctx.session.user;

        if(!user){
            ctx.body={
                status:1001,
                errMsg:'用户未登陆'
            }
        }else{
            await next();
        }
    }
}