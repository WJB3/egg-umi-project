import React from 'react'
import { Link } from 'umi' 
import './index.scss'

export default function Header() {
    return (
        <div className={'header'}>
            <div className={'headerTitle'}>民宿</div>
            <div className={'headerLogin'}>
                <Link to='/login'>登陆</Link> |
                <Link to='/register'>注册</Link> 
            </div>
        </div>
    )
}
