import { setCurrentStamp } from 'app/stampSlice';
import { React } from 'react';
import Image from 'react-bootstrap/Image';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import { setConstantValue } from 'typescript';
import { useState } from 'react';
import '../../../assets/css/Home.css';

function Item({ number, photo, title }) {
  const [photos, setPhoto] = useState(photo);
  const dispatch = useDispatch();
  const handleEditClick = () => {
    const currentStamp = JSON.parse(localStorage.getItem('Stamp'));
    if (currentStamp != null) {
      let action = setCurrentStamp(currentStamp.current);

      dispatch(action);
    } else {
      const stamp = {
        frame: { width: 100, height: 100 },
        elementList: [],
      };
      let action = setCurrentStamp(stamp);
      dispatch(action);
    }
    localStorage.setItem('Price', localStorage.getItem('Stamp'));
  };
  const handleDeleteClick = () => {};
  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = { _page: 1, _limit: 10 };
  //       const response = await priceTagApi.getAllPriceTag(params);
  //       const responseHaHa = await elementsApi.getAllElements(params);
  //       toast(' Lấy dữ liệu thành công !', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 1500,
  //       });
  //       // console.log('Fetch products successfully: ', response);
  //       // console.log('Fetch elements successfully: ', responseHaHa);
  //       // const stampInData = {
  //       //   frame: { w: response.width, h: response.height },
  //       //   elementList: [ {responseHaHa.id}],
  //       // };
  //       // let action = setCurrentStamp(stampInData);
  //       // dispatch(action);
  //       // if (response && responseHaHa) {
  //       // }
  //       // setProductList(response.data);
  //     } catch (error) {
  //       // toast.error(' Lấy dữ liệu thất bại !', {
  //       //   position: toast.POSITION.TOP_RIGHT,
  //       //   autoClose: 1500,
  //       // });
  //       console.log('Failed to fetch product list: ', error);
  //     }
  //   };
  //   fetchProductList();
  // }, []);

  return (
    <>
      <div className=" price-tag">
        <Image src={photos} alt="" />
        <div className="stamp__overlay">
          <div className="stamp-name"> {title}</div>
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
                <Button outline color="danger" onClick={handleDeleteClick}>
                  Delete
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
