import React from 'react';
import Base from '../components/Base';
// import audio1 from '../audio/1647605228587-voicemaker.in-speech.mp3';
import '../css/Home.css';

const AdvisoryManagerPage = () => {
  const playAudio = () => {
    const audio = new Audio('');
    audio.play();
    // setTimeout(() => {
    //   audio.pause();
    // }, 5000);
  };

  // React.useEffect(() => {
  //   const audio = new Audio(
  //     'https://voicemaker.in/uploads/1647605228587-voicemaker.in-speech.mp3'
  //   );
  //   return audio.play();
  // }, []);

  return (
    <Base>
      <div className="container">
        <div className="card shadow" style={{ marginTop: 100 }}>
          <h4 className="p-2">Advisory Manager</h4>
        </div>
        <div className="card shadow my-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/9906385/pexels-photo-9906385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=853"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sound Test</h5>
            <p className="card-text">
              <button
                onClick={playAudio}
                className="btn btn-dark"
                type="button"
              >
                Play
              </button>
            </p>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AdvisoryManagerPage;
