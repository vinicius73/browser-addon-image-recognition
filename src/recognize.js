import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'ebcc489500544ad7bce39169401dc82a',
});

const recognize = url => app
  .models
  .predict(Clarifai.GENERAL_MODEL, url);

export default recognize;
