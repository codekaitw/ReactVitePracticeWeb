import {useParams, Link} from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductDetail() {

  let params = useParams();

  return (
    <div>
      <Title mainTitle="Product Detail"/>
      #{params.id}
      <QuantityBtn />
      <Link to={import.meta.env.BASE_URL}>Back to Home</Link>
    </div>
  )
}
