import {
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard, faQuestion,
  faSignOut, faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    let currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoang',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/profile',
        },
        ...MENU_ITEMS,
        {
          icon: <FontAwesomeIcon icon={faSignOut} />,
          title: 'Log out',
          to: '/logout',
          separate:true,
      },
    ];
   
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                //handle logic change
                break;
            default:
                break;
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Search/>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy content="Upload video" placement="bottom" delay={[0, 50]}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Message" placement="bottom" delay={[0, 50]}>
                                  <button className={cx('action-btn')}>
                                      <MessageIcon/>
                                  </button>
                                </Tippy>
                                <Tippy content="Inbox" placement="bottom" delay={[0, 50]}>
                                  <button className={cx('action-btn')}>
                                      <InboxIcon className={cx('inbox-search')}/>
                                  </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                onClick={() => {
                                    alert('hi');
                                }}
                            >
                                {' '}
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu: MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4ea3dbd900947a3d1330e77caf857f2c~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1667185200&x-signature=zR6mXhaq4QpUzMSgR%2BubY7pR9lM%3D"
                                alt="NguyenVanA"
                                fullback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
