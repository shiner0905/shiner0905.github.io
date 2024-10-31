async function liffInit() {
  await liff.init({ liffId: "2006517308-KXRaJdBd" });
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
}

function createButton(profile, body) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const userImage = profile.pictureUrl;
  // const userReply = [urlParams.get('name'), urlParams.get('phone'), urlParams.get('email'), userImage];
  // const flexContent = flexCard(userReply);
  const handleClick = async () => {
    if (liff.isApiAvailable("shareTargetPicker")) {
      try {
        const result = await liff.shareTargetPicker([
          // {
          //   "type": "flex",
          //   "altText": `${urlParams.get('name')} present name card from Netlify`,
          //   "contents": {
          //                 "type": "carousel",
          //                 "contents": [
          //                   {
          //                     "type": "bubble",
          //                     "hero": {
          //                       "type": "image",
          //                       "url": "https://i.imgur.com/6wFlzgT.jpeg",
          //                       "size": "full",
          //                       "aspectRatio": "20:13",
          //                       "aspectMode": "cover",
          //                       "action": {
          //                         "type": "uri",
          //                         "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                       },
          //                       "margin": "none"
          //                     },
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "text",
          //                           "text": "楊依依",
          //                           "weight": "bold",
          //                           "size": "xl"
          //                         },
          //                         {
          //                           "type": "box",
          //                           "layout": "baseline",
          //                           "margin": "md",
          //                           "contents": [
          //                             {
          //                               "type": "icon",
          //                               "size": "xxl",
          //                               "url": "https://i.imgur.com/htPs7fR.png",
          //                               "margin": "none"
          //                             },
          //                             {
          //                               "type": "text",
          //                               "text": "Lamb5411",
          //                               "size": "xxl",
          //                               "color": "#999999",
          //                               "margin": "md",
          //                               "flex": 0
          //                             }
          //                           ]
          //                         },
          //                         {
          //                           "type": "box",
          //                           "layout": "vertical",
          //                           "margin": "lg",
          //                           "spacing": "sm",
          //                           "contents": [
          //                             {
          //                               "type": "separator"
          //                             },
          //                             {
          //                               "type": "box",
          //                               "layout": "baseline",
          //                               "spacing": "md",
          //                               "contents": [
          //                                 {
          //                                   "type": "text",
          //                                   "text": "永慶不動產北屯823公園店",
          //                                   "wrap": true,
          //                                   "color": "#666666",
          //                                   "size": "xl",
          //                                   "flex": 5
          //                                 }
          //                               ]
          //                             },
          //                             {
          //                               "type": "box",
          //                               "layout": "baseline",
          //                               "spacing": "sm",
          //                               "contents": [
          //                                 {
          //                                   "type": "text",
          //                                   "text": "手機",
          //                                   "size": "lg",
          //                                   "flex": 1,
          //                                   "color": "#FF0000"
          //                                 },
          //                                 {
          //                                   "type": "text",
          //                                   "text": "0973-005-411",
          //                                   "wrap": true,
          //                                   "color": "#FF0000",
          //                                   "size": "xl",
          //                                   "flex": 5
          //                                 }
          //                               ]
          //                             },
          //                             {
          //                               "type": "box",
          //                               "layout": "baseline",
          //                               "contents": [
          //                                 {
          //                                   "type": "text",
          //                                   "text": "電話",
          //                                   "flex": 1,
          //                                   "size": "lg"
          //                                 },
          //                                 {
          //                                   "type": "text",
          //                                   "text": "04-2422-6499",
          //                                   "flex": 5,
          //                                   "size": "xl",
          //                                   "wrap": true
          //                                 }
          //                               ],
          //                               "spacing": "sm"
          //                             }
          //                           ],
          //                           "borderWidth": "none"
          //                         },
          //                         {
          //                           "type": "box",
          //                           "layout": "vertical",
          //                           "contents": [
          //                             {
          //                               "type": "separator"
          //                             },
          //                             {
          //                               "type": "text",
          //                               "text": "台中市北屯區崇德十路一段390號",
          //                               "size": "md"
          //                             }
          //                           ]
          //                         }
          //                       ]
          //                     },
          //                     "footer": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "spacing": "sm",
          //                       "contents": [
          //                         {
          //                           "type": "button",
          //                           "style": "link",
          //                           "height": "sm",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "Line聯絡我",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         },
          //                         {
          //                           "type": "button",
          //                           "action": {
          //                             "type": "postback",
          //                             "label": "來電請點我取得手機號碼",
          //                             "data": "hello",
          //                             "displayText": "0973005411"
          //                           }
          //                         }
          //                       ],
          //                       "flex": 0
          //                     },
          //                     "styles": {
          //                       "header": {
          //                         "separator": true
          //                       }
          //                     }
          //                   },
          //                   {
          //                     "type": "bubble",
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/NHlYXbW.png",
          //                           "position": "relative",
          //                           "size": "md",
          //                           "offsetTop": "0px",
          //                           "offsetStart": "none",
          //                           "margin": "none"
          //                         },
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/t9Spacv.png",
          //                           "size": "full",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "action",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         }
          //                       ]
          //                     }
          //                   },
          //                   {
          //                     "type": "bubble",
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/NHlYXbW.png",
          //                           "position": "relative",
          //                           "size": "md",
          //                           "offsetTop": "0px",
          //                           "offsetStart": "none",
          //                           "margin": "none"
          //                         },
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/YtHG4wn.png",
          //                           "size": "full",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "action",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         }
          //                       ]
          //                     }
          //                   },
          //                   {
          //                     "type": "bubble",
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/NHlYXbW.png",
          //                           "position": "relative",
          //                           "size": "md",
          //                           "offsetTop": "0px",
          //                           "offsetStart": "none",
          //                           "margin": "none"
          //                         },
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/0tWFHwH.png",
          //                           "size": "full",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "action",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         }
          //                       ]
          //                     }
          //                   },
          //                   {
          //                     "type": "bubble",
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/NHlYXbW.png",
          //                           "position": "relative",
          //                           "size": "md",
          //                           "offsetTop": "0px",
          //                           "offsetStart": "none",
          //                           "margin": "none"
          //                         },
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/C0Aadgr.png",
          //                           "size": "full",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "action",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         }
          //                       ]
          //                     }
          //                   },
          //                   {
          //                     "type": "bubble",
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/NHlYXbW.png",
          //                           "position": "relative",
          //                           "size": "md",
          //                           "offsetTop": "0px",
          //                           "offsetStart": "none",
          //                           "margin": "none"
          //                         },
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/maTtNNi.png",
          //                           "size": "full",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "action",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         }
          //                       ]
          //                     }
          //                   },
          //                   {
          //                     "type": "bubble",
          //                     "body": {
          //                       "type": "box",
          //                       "layout": "vertical",
          //                       "contents": [
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/NHlYXbW.png",
          //                           "position": "relative",
          //                           "size": "md",
          //                           "offsetTop": "0px",
          //                           "offsetStart": "none",
          //                           "margin": "none"
          //                         },
          //                         {
          //                           "type": "image",
          //                           "url": "https://i.imgur.com/2O1T41t.png",
          //                           "size": "full",
          //                           "action": {
          //                             "type": "uri",
          //                             "label": "action",
          //                             "uri": "https://line.me/ti/p/ysF_vZidmC"
          //                           }
          //                         }
          //                       ]
          //                     }
          //                   }
          //                 ]
          //               }
          // }
          // {
          //     "type": "text",
          //     "text": "Hello, world"
          // }
            // {
            //   "type": "template",
            //   "altText": "This is a buttons template",
            //   "template": {
            //     "type": "buttons",
            //     "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
            //     "imageAspectRatio": "rectangle",
            //     "imageSize": "cover",
            //     "imageBackgroundColor": "#FFFFFF",
            //     "title": "Menu",
            //     "text": "Please select",
            //     "defaultAction": {
            //       "type": "uri",
            //       "label": "View detail",
            //       "uri": "http://example.com/page/123"
            //     },
            //     "actions": [
            //       {
            //         "type": "uri",
            //         "label": "View detail",
            //         "uri": "http://example.com/page/123"
            //       }
            //     ]
            //   }
            // }
              // {
              //   "type": "flex",
              //   "altText": "this is a flex message",
              //   "contents": {
              //     "type": "bubble",
              //     "body": {
              //       "type": "box",
              //       "layout": "vertical",
              //       "contents": [
              //         {
              //           "type": "text",
              //           "text": "hello"
              //         },
              //         {
              //           "type": "text",
              //           "text": "world"
              //         }
              //       ]
              //     }
              //   }
              // }
              {
                "type": "flex",
                "altText": "this is a flex message",
                "contents": {
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://i.imgur.com/6wFlzgT.jpeg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "https://line.me/ti/p/ysF_vZidmC"
        },
        "margin": "none"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "楊依依",
            "weight": "bold",
            "size": "xl"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "icon",
                "size": "xxl",
                "url": "https://i.imgur.com/htPs7fR.png",
                "margin": "none"
              },
              {
                "type": "text",
                "text": "Lamb5411",
                "size": "xxl",
                "color": "#999999",
                "margin": "md",
                "flex": 0
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "separator"
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "md",
                "contents": [
                  {
                    "type": "text",
                    "text": "永慶不動產北屯823公園店",
                    "wrap": true,
                    "color": "#666666",
                    "size": "xl",
                    "flex": 5
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "手機",
                    "size": "lg",
                    "flex": 1,
                    "color": "#FF0000"
                  },
                  {
                    "type": "text",
                    "text": "0973-005-411",
                    "wrap": true,
                    "color": "#FF0000",
                    "size": "xl",
                    "flex": 5
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "電話",
                    "flex": 1,
                    "size": "lg"
                  },
                  {
                    "type": "text",
                    "text": "04-2422-6499",
                    "flex": 5,
                    "size": "xl",
                    "wrap": true
                  }
                ],
                "spacing": "sm"
              }
            ],
            "borderWidth": "none"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "separator"
              },
              {
                "type": "text",
                "text": "台中市北屯區崇德十路一段390號",
                "size": "md"
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "Line聯絡我",
              "uri": "https://line.me/ti/p/ysF_vZidmC"
            }
          },
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "來電請點我取得手機號碼",
              "data": "hello",
              "displayText": "0973005411"
            }
          }
        ],
        "flex": 0
      },
      "styles": {
        "header": {
          "separator": true
        }
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "2222"
          }
        ]
      }
    }
  ]
}
              }
        ])

        if (result) {
          alert('Flex Message success');
        }

      } catch (error) {
        alert("Flex Message got some error");
      }
    }
  }

  const button = document.createElement("button");
  button.innerHTML = "Share Your Name Card";
  button.onclick = handleClick;

  body.appendChild(button);
}

async function main() {
  await liffInit()
  const profile = await liff.getProfile();
  const body = document.querySelector('body');
  createButton(profile, body);
}

main()
