import { React, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../assets/css/Home.css';
import { setCurrentStamp } from 'app/stampSlice';
import priceTagApi from '../../../api/pricetagAPI';
import elementsApi from '../../../api/elementsAPI';
function Item({ number }) {
  const dispatch = useDispatch();
  const handleEditClick = () => {
    const currentStamp = JSON.parse(localStorage.getItem('Stamp'));
    console.log('current stamp', currentStamp);
    if (currentStamp != null) {
      let action = setCurrentStamp(currentStamp.current);

      dispatch(action);
    } else {
      const stamp = {
        frame: { w: 100, h: 100 },
        elementList: [],
      };
      let action = setCurrentStamp(stamp);
      dispatch(action);
    }
    if (localStorage.getItem('Price') == null) localStorage.setItem('Price', currentStamp);
  };
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await priceTagApi.getAllPriceTag(params);
        const responseHaHa = await elementsApi.getAllElements(params);
        toast(' Lấy dữ liệu thành công !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
        // console.log('Fetch products successfully: ', response);
        // console.log('Fetch elements successfully: ', responseHaHa);
        // const stampInData = {
        //   frame: { w: response.width, h: response.height },
        //   elementList: [ {responseHaHa.id}],
        // };
        // let action = setCurrentStamp(stampInData);
        // dispatch(action);
        // if (response && responseHaHa) {
        // }
        // setProductList(response.data);
      } catch (error) {
        // toast.error(' Lấy dữ liệu thất bại !', {
        //   position: toast.POSITION.TOP_RIGHT,
        //   autoClose: 1500,
        // });
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchProductList();
  }, []);
  return (
    <div className=" price-tag">
      <Image src="./images/stamp_01.jpg" />
      <div className="stamp__overlay">
        <div className="stamp-name"> 142100 - Stamp Tai nghe Bluetooth </div>
        <div className="stamp__actions">
          <div>
            <Link to="design">
              <Button outline color="primary" onClick={handleEditClick}>
                Edit
              </Button>
            </Link>
          </div>
          <div>
            <Link to="#">
              <Button outline color="danger">
                Delete
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
