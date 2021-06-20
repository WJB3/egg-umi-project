import React,{useState,useEffect} from 'react'
import './index'
import { Header,Hot,Search } from './components';

export default function index() {

    const [state,setState]=useState();

    useEffect(() => { 

    }, [])

    return (
        <div className={'home'}>
            <Header />
            <Search />
            <Hot />
        </div>
    )
}
