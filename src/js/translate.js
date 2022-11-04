import { faker } from "@faker-js/faker";
const userAgent = faker.userAgent();
const callCount = {
  count: 0,
  ua: userAgent,
};
const headers = {
  "User-Agent": userAgent,
  Host: "fanyi.youdao.com",
  Origin: "https://fanyi.youdao.com",
  Referer: "https://fanyi.youdao.com/",
};

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
export function translate(text) {
  return translateAPI(text);
}
function translateAPI() {
  const url = "https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule";
  try {
    translateResult = 
  } catch (error) {
    
  }
}
