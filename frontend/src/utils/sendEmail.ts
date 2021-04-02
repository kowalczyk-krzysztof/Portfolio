import axios from 'axios';

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const requestBody = { name, email, message };
  try {
    await axios.post(
      `${process.env.REACT_APP_PORTFOLIO_SEND_EMAIL}`,
      requestBody
    );
  } catch (err) {
    console.log(err);
  }
};
