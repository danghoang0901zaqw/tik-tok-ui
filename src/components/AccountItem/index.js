import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchAccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4ea3dbd900947a3d1330e77caf857f2c~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1667185200&x-signature=zR6mXhaq4QpUzMSgR%2BubY7pR9lM%3D"
                alt="Gareth Bale"

            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Gareth Bale</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>garethbale</span>
            </div>
        </div>
    );
}

export default AccountItem;
