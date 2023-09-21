import {useParams} from 'react-router-dom';
import Title from './Title';

export default function ProductDetail() {

  let params = useParams();

  return (
    <div>
      <Title mainTitle="Product Detail"/>
      #{params.id}
    </div>
  )
}
