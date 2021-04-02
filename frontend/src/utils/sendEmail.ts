import axios from 'axios';
// Sending POST reques to my API to send email to my email
export const sendEmail = async (
  name: string,
  email: string,
  message: string
): Promise<boolean> => {
  const requestBody = { name, email, message };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_PORTFOLIO_SEND_EMAIL}`,
      requestBody
    );
    const status = res.status;
    if (status === 200) return true;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
