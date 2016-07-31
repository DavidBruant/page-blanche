# Page blanche

A markdown editor you want to open

## Brief history

I (David Bruant) was looking for a blogging workflow that would enable (non-dev) bloggers to have control over their data. I was going for markdown files + jekyll + prose.io, but something was missing: a great authoring experience.

Wordpress is cool but more or less only allows you to [download a zip](https://en.support.wordpress.com/export/) of xml files. Pluggins are available to export to Jekyll.
Medium offers [html exports](https://help.medium.com/hc/en-us/articles/214043918-Export-content-from-Medium).
But all of that is opt-ins and if you forgot to do a backup before your blog was hacked, sorry, your content is lost.
This has led people to have a desktop app to write their content, then they move it to their blog, but this leads to desynchronization and inefficiencies.

Mardown is cool, but my friend [Pauline](https://twitter.com/PipoCalme) does not want to have to type `*` for bold or italic. I hear her. WYSIWYG is clearer than markdown in lots of ways.
[Prose.io](http://prose.io/) is cool, but having to go to the repo, pick the `_posts` directory and click `new file`. It also does not solve the problem of having the files locally on your computer for offline editing. Service workers wouldn't be of help here.

So here we are.

## Features

* Open quickly (< 3s)
* Save locally
* Synchronize with a github repo
* If github repo is a jekyll blog, add conveniences 
    * `new post` button (navigates through files only as secondary choice)
    * structured metadata (publication button, automated creation/updated date HTML metadata)

## Acknoledgments

Thir project is built on the shoulders of other giants:

* React
* draft.js
* react-rte

* Electron

## Licence

MIT