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
  npm install
```

## Usage

```
  import InstagramDownloader from ""

  const data = await InstagramDownloader({
      retryCount:2,
      url:"https://instagram.com/content"
  });

  console.log(data);

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
