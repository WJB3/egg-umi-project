import React,{useState} from 'react'
import styles from './index.less'
import { TabBar } from 'antd-mobile'
import { BsHouseDoorFill,BsHouseDoor,BsBagFill,BsBag,BsPersonFill,BsPerson } from 'react-icons/bs'
import { history } from 'umi'

export default function MenuBar(props) {

    const {
        show=false,
        pathname=''
    }=props;

    const [items,setItems]=useState([
        {
            title:'首页',
            selectedIcon:<BsHouseDoorFill style={{fontSize:'1.5rem'}} />,
            icon:<BsHouseDoor style={{fontSize:'1.5rem'}} />,
            link:'/'
        },
        {
            title:'订单',
            selectedIcon:<BsBagFill style={{fontSize:'1.5rem'}} />,
            icon:<BsBag style={{fontSize:'1.5rem'}} />,
            link:'/order'
        },
        {
            title:'用户',
            selectedIcon:<BsPersonFill style={{fontSize:'1.5rem'}} />,
            icon:<BsPerson style={{fontSize:'1.5rem'}} />,
            link:'/user'
        }
    ]);

    return (
        <div className={styles.menuBar}>
            <TabBar hidden={!show}>
                {
                    items.map(item=>(
                        <TabBar.Item
                            key={item.link}
                            title={item.title}
                            icon={item.icon}
                            selectedIcon={item.selectedIcon}
                            selected={pathname===item.link}
                            onPress={()=>history.push(item.link)}
                        ></TabBar.Item>
                    ))
                } 
            </TabBar>
        </div>
    )
}
