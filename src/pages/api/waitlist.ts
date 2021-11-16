import getConfig from 'next/config';
import axios from 'axios';

const { serverRuntimeConfig: { mongoEmail } } = getConfig();

function isEmailValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const handleEmail = async (body, res) => {
  const { email } = body;

  if (!isEmailValid(email)) return res.status(400).send('Invalid Email');
  try {
    await axios.post(mongoEmail, body);
  } catch (e) {
    return res.status(500).send('Unable to save your email.');
  }

  return res.status(200).end();
};

export default async (req, res) => {
  const { body, method } = req;

  return handleEmail(body, res);
};
