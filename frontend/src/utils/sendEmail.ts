import axios from 'axios';
// Sending POST reques to my API to send email to my email
export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const requestBody: { name: string; email: string; message: string } = {
    name,
    email,
    message,
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_PORTFOLIO_SEND_EMAIL}`,
      requestBody
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};
