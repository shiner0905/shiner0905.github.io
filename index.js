async function liffInit() {
  await liff.init({ liffId: "2006517308-KXRaJdBd" });
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
}

async function liffProfile() {
  const profile = await liff.getProfile();
  const displayName = profile.displayName;
  const h1 = document.createElement("h1");
  const textNode = document.createTextNode(`Hello ${displayName}`);
  h1.appendChild(textNode);

  const body = document.querySelector('body');
  body.appendChild(h1);
}

async function main() {
  await liffInit()
  await liffProfile()
}

main()
