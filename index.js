async function liffInit() {
  await liff.init({ liffId: "2006517308-KXRaJdBd" });
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
}

// function createButton(profile, body) {
//   const handleClick = async () => {
//     const textareaContent = document.getElementById("flex_message").value;
//     const flexMessage = JSON.parse(textareaContent);

//     if (liff.isApiAvailable("shareTargetPicker")) {
//       try {
//         const result = await liff.shareTargetPicker([
//           {
//             "type": "flex",
//             "altText": "[名片]楊依依-永慶不動產北屯823公園店",
//             "contents": flexMessage
//           }
//         ]);

//         if (result) {
//           alert('訊息發送成功');
//         }

//       } catch (error) {
//         alert("Flex Message got some error");
//       }
//     }
//   }

//   const button = document.createElement("button");
//   button.innerHTML = "分享給朋友";
//   button.onclick = handleClick;

//   body.appendChild(button);
// }

async function main() {
  await liffInit();
  const profile = await liff.getProfile();
  const body = document.querySelector('body');
  // createButton(profile, body);
}

main();
