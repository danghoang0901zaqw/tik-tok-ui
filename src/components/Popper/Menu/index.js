import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);
function Menu({children, items=[],onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !! item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={()=>{
                        if(isParent){
                            console.log(item.children)
                            setHistory(prev=>[...prev,item.children])
                        }else{
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            offset={[12,10]}
            placement="top-end"
            delay={[0, 400]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>{
                setHistory(prev=>prev.slice(0,1))   
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
