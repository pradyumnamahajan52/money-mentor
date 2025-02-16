/* eslint-disable react/no-danger */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RiskProfileQuestionsList } from '../helper/RiskProfileHelper';
import './RiskProfileModal.css';

const RiskProfileModal = (props: any) => {
  const { setRiskProfileModal, showRiskProfileModal } = props;
  const [answerSelected, setAnswerSelected] = React.useState(false);
  const [riskQuestonsList, setRiskQuestonsList] = React.useState([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const handleClose = () => setRiskProfileModal(false);
  const handleShow = () => setRiskProfileModal(true);

  const RiskProfileQuestionsListHelper = () => {
    RiskProfileQuestionsList()
      .then((res: any) => {
        if (res === undefined || res === null) {
          toast.error("Can't connect to server", {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return setRiskQuestonsList([]);
        }
        if (res.detail) {
          if (res.detail === 'Invalid token.') {
            setRiskQuestonsList([]);
            return toast.error('Invalid token. Please Login Again...', {
              position: 'top-right',
              autoClose: 2500,
              hideProgressBar: false,
              theme: 'dark',
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          setRiskQuestonsList([]);
          return toast.error(res.detail, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            theme: 'dark',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        return setRiskQuestonsList(res);
      })
      .catch((err) => {
        return toast.error(err, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          theme: 'dark',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleListItemClick = (option) => {
    if (riskQuestonsList.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  React.useEffect(() => {
    return RiskProfileQuestionsListHelper();
  }, []);

  return (
    <Modal
      show={showRiskProfileModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      fullscreen
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-start">
              <h5>
                <strong>{questionIndex + 1}.&nbsp;&nbsp;</strong>
              </h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: riskQuestonsList[questionIndex]?.question,
                }}
                className="editor"
              ></div>
            </div>
          </div>
          <ul style={{ listStyle: 'none' }}>
            {riskQuestonsList[questionIndex]?.riskProfileQuestions?.map(
              (option: any) => (
                <li
                  className="border border-2 border-dark rounded-pill answerlist"
                  key={option.id}
                  onClick={() => handleListItemClick(option)}
                  dangerouslySetInnerHTML={{
                    __html: option.answer,
                  }}
                ></li>
              )
            )}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RiskProfileModal;
