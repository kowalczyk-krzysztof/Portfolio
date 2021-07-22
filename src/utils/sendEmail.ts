import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const serviceID: string = `${process.env.REACT_APP_EMAILJS_SERVICEID}`;
const templateID: string = `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`;
const userID: string = `${process.env.REACT_APP_EMAILJS_USERID}`;

export const sendEmail = async (
  name: string,
  email: string,
  message: string
): Promise<EmailJSResponseStatus> => {
  const templateParams = {
    name,
    email,
    message,
  };
  // init('user_OeNGgyk9BYuSUmxuEouxh');
  const res: EmailJSResponseStatus = await emailjs.send(
    serviceID,
    templateID,
    templateParams,
    userID
  );
  return res;
};
