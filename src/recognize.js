import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'eb77b167d265454ca93fd883b6e1b3b3',
});

const recognize = url => app
  .models
  .predict(Clarifai.GENERAL_MODEL, url);

export default recognize;
