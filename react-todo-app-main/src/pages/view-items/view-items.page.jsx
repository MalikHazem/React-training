import { useEffect, useState } from 'react';
import './view-items.css';
import List from '../../components/list/list.component';
import loadingImg from '../../assets/loading.gif';

const ViewItemsPage = (props) => {

  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  }
  // This code will run one time only on component mount
  useEffect(() => {
    console.info("Welcome to View Items Page");
    const interval = setInterval(updateTime, 1000);

    return () => {
      // This will execute on unmount
      console.info("Bye Bye From View Items Page");
      console.info("Clearing Interval");
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="view-items">
      <div className="clock">{time.toLocaleTimeString()}</div>
      {
        props.items.length > 0
          ? <List items={props.items} onDelete={props.deleteItem} onFinish={props.finishItem} />
          : props.loading
            ? <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <img src={loadingImg} alt="loading" width={120} />
            </div>
            : <h2>No Items Added!</h2>
      }
    </div>
  )
};

export default ViewItemsPage;