import styles from './index.less';
import { List } from 'antd-mobile';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>
        Page index
        <List>
          <List.Item>
            component  
          </List.Item>  
        </List>  
      </h1>
    </div>
  );
}
