# copyGPT

This is a small JavaScript Chrome bookmarklet for copying chatGPT transcripts to your clipboard with some light Markdown formatting. It works on both desktop and mobile Chrome.

[chatGPT](https://chat.openai.com/) is an incredible demonstration of a large language model. But, as of Dec 11, 2022, it makes copying transcripts really hard, especially on mobile. This simple bookmarklet provides a workaround until chatGPT introduces a "copy transcript" feature.

I designed this against Google Chrome, though it may work with other browsers.

This is similar to [jcubic/chat-gpt](https://github.com/jcubic/chat-gpt), which lets you download the transcript as HTML. The main difference is that copyGPT converts the transcript to Markdown and copies it to your clipboard.

## Features

- Simple, transparent JS bookmarklet for copying chatGPT transcripts as Markdown.
  - Handles code blocks.
- Support for both desktop and mobile Chrome.

## Known Issues

- Fragile: This relies on the current DOM structure of chatGPT. Changes to the structure may break this bookmarklet. Updates will be reflected but will require manual reinstallation (i.e., updating the URL field of the bookmark with the new JS).

## Installation

- Copy the JavaScript from [copyGPT-markdown.js](copyGPT-markdown.js).
- On a computer:
  - [Create a new bookmarket](https://support.google.com/chrome/answer/188842) in Chrome. Name it "copyGPT" and paste the JavaScript into the URL field.
- On mobile:
  - If you have [Chrome Sync](https://support.google.com/chrome/answer/185277) enabled:
    - The bookmark created on your computer will sync to your mobile device if you've configured [Chrome Sync]().
  - Otherwise: follow the relevant Android, iPhone, or iPad [instructions](https://support.google.com/chrome/answer/188842) to:
    - Visit any site on mobile and create a new bookmark.
    - Edit the bookmark to change the name to copyGPT and paste the JavaScript into the URL field.
    - (As far as I can tell, manually creating a bookmark isn't possible on mobile Chrome. This is a workaround.)

## Usage

Use chatGPT in the usual way. When you have a transript you'd like to copy on desktop or mobile Chrome:
- Stay on the chatGPT tab.
- Enter `copyGPT` in the Chrome address bar.
- Select the `copyGPT` suggestion. This executes the JavaScript against the chatGPT page.
- Done! The transcript is copied to your clipboard. Paste it in your favourite note-taking tool.

## Demo

This demonstrates both installation and usage:

https://user-images.githubusercontent.com/56461/206936469-3285a548-1296-459b-812f-32753e7e7e7b.mov

## Contributing

Pull requests and issues welcome!

Note: as far as I can tell, mobile Chrome has a limit of 5000 characters on the URL field. To maintain compatibility with mobile Chrome, change requests which cause the bookmarklet to exceed this limit will be rejected.
