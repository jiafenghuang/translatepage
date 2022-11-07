const text =
  "Today we are going to learn about some basic algorithms that every developer should know. Algorithms are a common topic in an interview. So you should be focused on this topic. A good understanding of algorithms can manage a good job as a developer.";
const userAgent = faker.internet.userAgent();

function remoteCall(method = "POST", url, param, headers) {
  const xhr = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
  xhr.Open(method || "GET", url, false);
  xhr.Option(4) = 13056;
  xhr.Option(6) = false
  for(let key in headers){
    xhr.setRequestHeader(key,headers[key])
  }

  xhr.Send(param)
  return xhr
}

const headers = {
  "User-Agent": userAgent,
  Host: "123",
  Origin: "https://fanyi.youdao.com",
  Referer: "https://fanyi.youdao.com/",
};
const url = "https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule";
const formData = {
  i: "", // searchText
  from: "AUTO",
  to: "AUTO",
  doctype: "json",
  smartresult: "dict",
  client: "fanyideskweb",
  version: "2.1",
  keyfrom: "fanyi.web",
  action: "FY_BY_REALTlME",
};

function translate(text) {
  remoteCall("POST",url,"test",headers)
  //return translateAPI(text);
}
function translateAPI(text) {
  formData.i = text;
  axios
    .post(url, formData, headers)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  try {
    translateResult = "";
  } catch (error) {}
}
chrome.contextMenus.create({
  title: "88888888888888888888888888888888888888888888888888888",
  onclick: function () {
    alert(translate(text));
  },
});
