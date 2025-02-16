import API from '../Backend';

export const RiskProfileQuestionsList = () => {
  return fetch(`${API}risk-profile/questions/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const RiskProfileQuestionsDetails = () => {};
