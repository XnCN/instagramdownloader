# Instagram Downloader

This project provide an instagram api wrapper.You can use in your web services and mobile applications.Instagram downloader library is using `dowmate.com` api.

## Features

- Photo Download
- Gallery Download
- Video Download
- Story Download

## Install

You can install on npm

```bash
  npm install @xncn/instadownloader

  //if you are using typescript you dont need to add
  add module type package.json
  {
   "type": "module",
  }
```

## Usage

```
import InstagramDownloader from "@xncn/instadownloader";

//if you are using typescript you dont need to add .default
async function Download() {
  const data = await InstagramDownloader.default({
    retryCount: 2,
    url: "https://www.instagram.com/p/**",
  });
  console.log(data);
}

Download();


```

| Paramater    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `retryCount` | `number` | You can specified error retry count                |
| `url`        | `string` | You need to set instagram downloadable content url |

Example Response

```
{
  title: '****',
  media: [
    {
      type: 'MAIN_ADV',
      api: 'Post-Image',
      thumbnail: 'https://scontent-lhr8-1.cdninstagram.com/v/***',
      media: 'https://scontent-lhr8-1.cdninstagram.com/v/***'
    }
  ]
}
```
