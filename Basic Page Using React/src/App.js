// import logo from './logo.svg';
import './index.css';
import img1 from './images/Aiml.jpg'
import img2 from './images/datascience.jpg'
import img3 from './images/oracle.jpg'
import img4 from './images/python.jpg'

function App() {
  return (
    <div>
       <p className="heading"> Popular Technologies </p>
       <hr></hr>
       <table className='tablex'  style={{ margin: 'auto' }}>
          <tr>
              <td >
              <img src={img1} alt="Image1" width="280" height="150" />
              </td>
              <td style={{textAlign: 'left' }} className='mrgnryt'>01</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Artificial Intelligence and Machine Learning</p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>Course on Artificial Intelligence and Machine Learning</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by: Prof. ABC sharma</p>
                </td>
          </tr>
          <tr>
          <td >
              <img src={img2} alt="Image1" width="280" height="150" />
              </td>
              <td className='mrgnryt'>02</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Data Science </p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>Course on Data Science</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by: Prof. DEF Sharma</p>
                </td>
          </tr>
          <tr>
          <td >
                <img src={img3} alt="Image1" width="280" height="150" />
              </td>
              <td className='mrgnryt'>03</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Cloud Computing</p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>Course on Cloud Computing</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by: Prof. XYZ Gupta</p>
                </td>
          </tr>
          <tr>
          <td >
              <img src={img4} alt="Image1" width="280" height="150" />
              </td>
              <td className='mrgnryt'>04</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Python pogramming Language  </p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>Course on Python Pogrmming Laanguage </p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by: Prof. XYZ Sharma</p>
                </td>
          </tr>
         
          
       </table>
    </div>
    
    
  );
}

export default App;
