async function liffInit() {
  await liff.init({ liffId: "2006517308-ZV3NPg4g" });
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
}

async function main() {
  await liffInit();
  const profile = await liff.getProfile();
  const body = document.querySelector('body');
  // createButton(profile, body);
}

main();
