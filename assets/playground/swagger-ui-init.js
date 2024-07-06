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
        "name": "Downloader",
        "description": "API endpoints for downloader anything from various platforms."
      },
      {
        "name": "Searching",
        "description": "API endpoints for searching content from various platforms."
      },
      {
        "name": "Tools",
        "description": "API endpoints for tools content from various platforms."
      }
    ],
    "paths": {
      "/ai/blackbox": {
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "blackbox Ai",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "kapan indonesia merdeka?"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "Chatbot AI",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "siapa nama kamu?"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "Chatgpt AI",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "siapa nama kamu?"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "goody AI",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "kapan indonesia merdeka?"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "talk AI",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "kapan indonesia merdeka?"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "talk-img AI",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "cat"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Ai"
        ],
   	"requestBody": {
        "required": true,
         "description": "thinkany AI",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "kapan indonesia merdeka?"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader Capcut",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader Cocofun",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader Instagram",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader like",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader SoundCloud",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader track Spotify",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader snackvideo",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader Tiktok slide and video",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Downloader"
        ],
   	"requestBody": {
        "required": true,
         "description": "Downloader twitter",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": "enter url parameters"
             }
           }
         }
       }
     }
   },
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
     "/searching/soundcloud": {
      "post": { 	
      "tags": [
          "Searching"
        ],
   	"requestBody": {
        "required": true,
         "description": "Searching track SoundCloud",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "query": {
           "required": true,    
            "default": "somewhere we only know"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Searching"
        ],
   	"requestBody": {
        "required": true,
         "description": "Searching track Spotify",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "query": {
           "required": true,    
            "default": "somewhere we only know"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Tools"
        ],
   	"requestBody": {
        "required": true,
         "description": "Tools Qc",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "text": {
           "required": true,    
            "default": "hai bwang"
             },
           "name": {
           "required": true,    
            "default": "sakura"
             },
           "imageUrl": {
           "required": true,    
            "default": "https://telegra.ph/file/4fa64ed06ca3687062314.jpg"
             }
           }
         }
       }
     }
   },
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
      "post": { 	
      "tags": [
          "Tools"
        ],
   	"requestBody": {
        "required": true,
         "description": "Tools Ssweb",
         "content": {
         "application/json": {   
         "schema": {
         "type": "object",
         "properties": {
           "url": {
           "required": true,    
            "default": ""
             },
           "device": {
           "required": true,    
            "default": "desktop"
             }
           }
         }
       }
     }
   },
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
