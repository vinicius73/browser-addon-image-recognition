const recognize = (url) => {
  browser.notifications.create('image-recognition-notification', {
    type: 'basic',
    title: 'recognition data',
    message: url,
  });
};

// listem
browser.contextMenus.create({
  id: 'image-recognition',
  title: 'See recognition data',
  contexts: ['image'],
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'image-recognition') {
    recognize(info.srcUrl);
  }
});
