const chromeExtIntercept = chrome.webRequest.onBeforeRequest

chrome.runtime.onInstalled.addListener(() => {
    chromeExtIntercept.addListener((x) => {
        console.log(x)
    },
    {urls: ["<all_urls>"]}
    )
  });