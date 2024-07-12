window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "swagger": "2.0",
    "host": "sakura-jade.vercel.app/api",
    "basePath": "/",
    "tags": [
      {
        "name": "Ai",
        "description": "API endpoints for artificial intelligence content from various platforms."
      },
      {
        "name": "Anime",
        "description": "API endpoints for anime content from various platforms."
      },
      {
        "name": "Downloader",
        "description": "API endpoints for downloader anything from various platforms."
      },
      {
        "name": "Random",
        "description": "API endpoints for random content from various platforms."
      },
      {
        "name": "Searching",
        "description": "API endpoints for searching content from various platforms."
      },
      {
        "name": "Stalker",
        "description": "API endpoints for stalker content from various platforms."
      },
      {
        "name": "Tools",
        "description": "API endpoints for tools content from various platforms."
      }
    ],
    "paths": {
      "/ai/blackbox": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "Blackbox AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/ai/chatbot": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "Chatbot AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/ai/chatgpt": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "Chatgpt AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/ai/goodyai": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "Gooday AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/ai/talkai": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "Talk AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/ai/talkai-img": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "talkimg AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/ai/thinkany": {
      "get": { 	
      "tags": [
          "Ai"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "Thinkany AI",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/anime/kazesub": {
      "get": { 	
      "tags": [
          "Anime"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Anime Kaze Fury (pedo)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/anime/kiryu": {
      "get": { 	
      "tags": [
          "Anime"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Anime kiryu",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/anime/kusonime": {
      "get": { 	
      "tags": [
          "Anime"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Anime kusonime",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
  	"/downloader/capcut": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Capcut",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
  	"/downloader/cocofun": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Cocofun",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
  	"/downloader/instagram": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Instagram",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
  	"/downloader/like": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Like",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/downloader/mediafire": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader MediaFire",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/downloader/pinterest": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader pinterest",
            "schema": {
              "type": "string"
            }
          }
        ],
   "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/downloader/soundcloud": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader SoundCloud",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/downloader/spotify": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Spotify",
            "schema": {
              "type": "string"
            }
          }
        ],
   "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
   "/downloader/snackvideo": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Snackvideo",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
	"/downloader/tiktok": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Tiktok",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/downloader/twitter": {
      "get": { 	
      "tags": [
          "Downloader"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "Downloader Twitter",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/random/tiktok": {
      "get": { 	
      "tags": [
          "Random"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Random Tiktok",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/searching/lahelu": {
      "get": { 	
      "tags": [
          "Searching"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Search query for lahelu.com",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "required": true,
            "description": "page lahelu.com",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/searching/pinterest": {
      "get": { 	
      "tags": [
          "Searching"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Searching pinterest",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/searching/resepmasakan": {
      "get": { 	
      "tags": [
          "Searching"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Searching resepmasakan",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/searching/soundcloud": {
      "get": { 	
      "tags": [
          "Searching"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Searching SoundCloud",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/searching/spotify": {
      "get": { 	
      "tags": [
          "Searching"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Searching Spotify",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/freefire": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "id",
            "in": "query",
            "required": true,
            "description": "Stalker Game Free Fire",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/github": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "username",
            "in": "query",
            "required": true,
            "description": "Stalker Accont Github",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/instagram": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "username",
            "in": "query",
            "required": true,
            "description": "Stalker Account Instagram",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/mobilelegend": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "id",
            "in": "query",
            "required": true,
            "description": "Stalker Game Mobile Legend Bang Bang",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "server",
            "in": "query",
            "required": true,
            "description": "Stalker Game Mobile Legend Bang Bang",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/npm": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "query",
            "in": "query",
            "required": true,
            "description": "Stalker Package",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/tiktok": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "username",
            "in": "query",
            "required": true,
            "description": "Stalker Account Tiktok",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/stalker/twitter": {
      "get": { 	
      "tags": [
          "Stalker"
        ],
   	"parameters": [
          {
            "name": "username",
            "in": "query",
            "required": true,
            "description": "Stalker Account Twitter",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
      "/tools/qc": {
      "get": { 	
      "tags": [
          "Tools"
        ],
   	"parameters": [
          {
            "name": "text",
            "in": "query",
            "required": true,
            "description": "massukan parameter text",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "query",
            "required": true,
            "description": "massukan parameter name",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "imageUrl",
            "in": "query",
            "required": true,
            "description": "massukan parameter imageUrl",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/tools/remini/{type}": {
      "get": { 	
      "tags": [
          "Tools"
        ],
   	"parameters": [
          {
            "name": "type",
            "in": "path",
            "required": true,
            "description": "Type : enhance, recolor, dehaze",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "masukkan parameter url",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     },
     "/tools/ssweb": {
      "get": { 	
      "tags": [
          "Tools"
        ],
   	"parameters": [
          {
            "name": "url",
            "in": "query",
            "required": true,
            "description": "masukkan parameter url",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "device",
            "in": "query",
            "required": true,
            "description": "massukan parameter device",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
           "200": {
           "description": "Successfully operation"
           },
           "400": {
           "description": "Bad request"
           },
           "500": {
           "description": "Internal Server Error"
           }
         }
       }
     }
    },
    "x-request-time": new Date().toISOString()
  },
  "customOptions": {
    "displayRequestDuration": true
  }
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}