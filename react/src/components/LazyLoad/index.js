import React ,{lazy,Suspense} from 'react'

const Demo=lazy(()=>import('./demo'));

export default function LazyLoad(props) {

    const {
        component,
        delay,
        ...otherProps
    }=props;

    const renderLazy=()=>{
        let Lazy;
        if(!component||component.constructor.name!=='Promise'){
            Lazy=import('./error');
        }

        Lazy=lazy(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(component)
                },delay||3000)
            })
        })
        return <Lazy {...otherProps}/>
    }

    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                {renderLazy()}
            </Suspense>
        </div>
    )
}
