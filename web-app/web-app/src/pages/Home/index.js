import wave from '../../assets/images/wave.svg';
import { Container } from './styles';
import { useContext } from 'react';
import StoreContext from '../../components/Store/Context';


export default function Home(){
  const { token } = useContext(StoreContext);
  console.log(token);

  return (
    <>
      <Container>
        <h1 style={{ fontSize: '45x' }}>
            Class
          <span 
            style={{ 
              backgroundColor: '#5640ca',
              color: 'white',
              padding: '4px',
              borderRadius: '10px'
            }}>
            Hub
          </span>  
        </h1>  
      </Container>
      <img src={wave} alt="wave" style={{ 
        position: 'absolute',
        bottom: '0'
      }}/>
    </>
  );
}