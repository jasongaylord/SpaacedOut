[![Gem Version](https://badge.fury.io/rb/spaacedout.svg)](https://badge.fury.io/rb/spaacedout)

# Welcome to the SpaacedOut Jekyll Theme
Here's a new, responsive GitHub Pages and Jekyll theme called SpaacedOut. You can see the full details of this theme at
[jasongaylord/SpaacedOut](https://jasong.us/2ywUm3C). This theme is a mashup of the 2019 version of [JasonGaylord.com](https://jasong.us/2SHDm1C), the [Haacked theme](https://jasong.us/2Zt4yaX), and the [plainwhite theme](https://jasong.us/2WxMoPJ).

This theme has several features enabled by default:

1. Post Excerpts on the Home Page
2. Google Analytics tracking
3. Post Archival by Year
4. Social Media Icons in the Site Header
5. Disqus comment support
6. Dynamic menu support
7. Automatic Line Numbering and Language Indicator for Syntax Highlighting
8. Git link for editing

These features are explained in greater detail in the [custom installation](#custom-installation) section below.

# Installation
This theme is typically used as a [remote theme on GitHub pages](https://jasong.us/3bc5XCq) and through the Jekyll remote theme plugin [explained on my blog](https://jasong.us/35luIer).

To use the theme, there are two different methods:

1. [Abbreviated Installation](#abbreviated-installation) - A quick installation to begin using SpaacedOut right away
2. [Custom Installation](#custom-installation) - A more in depth overview to allow customization of the SpaacedOut theme

## Abbreviated Installation
Please note that if you have modified your `_config.yml` already, you should probably resort to the [Custom Installation](#custom-installation) instructions below.

To get started, you should copy all [settings from the SpaacedOut `_config.yml`](https://jasong.us/2A05ExK) and past the values into your `_config.yml` file replacing everything. Next, review the settings and modify the values to reflect your site (i.e. Change 'My Blog' to the title you'd like on your site).

If you are looking for futher customization, please [continue](#custom-installation). Otherwise, you should be ok to check in your changes and view the site in GitHub Pages. 

If everything came out ok, it should resemble this:

![](https://cdn.jasongaylord.com/images/2020/05/11/SpaacedOut-Theme.jpg)

In addition, there's full mobile support with a flyout menu:

![](https://cdn.jasongaylord.com/images/2020/05/11/SpaacedOut-Theme-Mobile.jpg)

## Custom Installation
Below you'll find a basic overview to customize the theme. In addition, each area of the configuration is explained via comments in the [`_config.yml`](https://jasong.us/3fqiwO2) Additional details to assist in customizing the theme can be found in the [Dissecting the Theme](#dissecting-the-theme) section below.

### Home Layout
`home.html` is the default page for the site and is the initial page that loads when your site loads. The current home layout includes a placeholder for text followed by a paginated list of posts. The placeholder will allow you to add content to `index.html` or `index.md` (located at the root of your site) which will be placed above the paginated list. This is a great way to introduce the visitors to your site.

In addition, if you include `<!--more-->` in your post, only the content above the comment will be shown as an excerpt on your homepage and within the post archives.

### Content Extras
Rather than overriding each of the includes or layouts simply to add content, I've added a mechanism to add content to the common areas of the site. Since GitHub Pages currently supports Jekyl 3.8 and not 4.0, we cannot use dynamic includes. The following are configuration elements that, when setting the value to `true`, will render their respective files in your sites local `_includes` folder. These files can be defined under the `content` node in the `_config.yml` file:

- `head-s` - This allows additional scripts and styles to be added to the head of the site. If setting to `true`, you'll need to create the following in your local site: `_includes\head-suffix.html`.
- `header-s` - This allows for additional content to be dropped in between the title and the menu on the left side. If setting to `true`, you'll need to create the following in your local site: `_includes\header-suffix.html`.

### Override Layout, Includes, or Style
Any of the layouts or includes can be overwritten. Simply copy over the file or directory to your site and modify as you see fit.

If you are looking for your own color scheme, fonts, or sizes, I'd recommend the following steps:

1. Create your own SASS file in the `assets` directory called `style.scss`.
2. Copy the _variables_ found in `_sass_\variables\variables.scss` in the _SpaacedOut_ theme into your new `style.scss` file. You only need to include the variables that you are replacing.
3. Below the _variables_ contents you just copied, add a new line to import the `SpaacedOut.scss` file like:

```css
@import "SpaacedOut";
```

## Dissecting the Theme

### Layouts
The files mentioned below can be found in the `_layouts` directory. If you are unfamiliar with layouts, these are similar to a template or master page in other languages.

- `default.html` - This is the default layout for the site. The other layouts below all derive their layouts from this. 
- `home.html` - As [mentioned above](#home-layout), this is the initial page of the website.
- `page.html` - This layout is used for pages found in the `_page` or the `assets\pages` directories.
- `post.html` - This layout is used for blog\news posts.

### Includes
The files mentioned below can be found in the `_includes` directory. Includes are partial content that can be injected and loaded in either a layout or another include.

- `footer.html` - This is the footer section of the site and includes a copyright tag and the reference to the theme.
- `head.html` - This includes the HTML head section content. If you'd like to add additional style and/or scripts, you don't need to override this [[Read More]](#content-extras). Additional configuration items can be found in the `_includes\head` directory:
  - `google-analytics.html` - This configures Google Analytics if defined in your `_config_yml`
  - `stylesheets.html` - This lists the stylesheets that are used for the site.
  - `twitter.html` - If the Twitter social icon is defined, this places a Twitter card on the site.
- `header.html` - This is the header section of the site and includes the title, avatar, menu, and social icons (if present).
- `pagination.html` - This handles the pagination of posts.
- `social-links.html` - This handles the display of the social links.
- `_includes\comments` directory:
  - `comments.html` - Used to reference the comment block at the bottom of content. If you want to expand beyond disqus, this is where you could do it.
  - `comments_link.html` - Used to reference the comment count at the top of content. If you want to expand beyond disqus, this is where you could do it.
  - `disqus_comments.html` - This contains the link to the disqus JavaScript file.
  - `disqus_comments_link.html` - This contains the reference to the specific diqus identifier based on the page or post URL
- `_includes\post` directory:
  - `archive_post.html` - The post template in the archive list.
  - `edit.html` - Contains the markup used to build the suggest edit link on the page.
  - `meta.html` - Includes the post meta data such as the comment link, date, and tags
  - `tags.html` - Includes the list of tags in the top of a post.

### Styles
There are two primary style sheets that are referenced in the `_includes\head.html` file. You'll notice that both reference a `.css` extension as opposed to a `.scss` extension. This is because Jekyll compiles the SASS to CSS:

1. `assets\style.scss` - This references the `_sass\SpaacedOut.scss` file which in turn includes `variables\variables.scss` and `core\core.scss`, both found in the `_sass` directory. 
2. `assets\syntax-highlight.scss` - This applies syntax highlighting to the Rouge highlight plugin for Jekyll. This was modified slightly from the post found at [https://textuploader.com/1odmf](https://jasong.us/3fAIFKa).

### Included Pages
Inside of the `assets` folder, you'll find a `pages` directory. Currently, only the `archives.md` file exists inside of this directory. This file displays the _archive_ menu option in the theme and lists the posts in descending order by year.

### Scripts
Inside of the `assets` folder, you'll find a `js\utils.js` file. You'll notice that throughout the site, I'm not using a JavaScript framework, such as jQuery, or a CSS framework, like BootStrap. The goal is to keep this theme very lightweight. So, the `utils.js` file contains a namespaced list of functions.

### Plugins 
The following plugins are installed in the *SpaceOut* theme:

- `jekyll-avatar` - For usage, visit [benbalter/jekyll-avatar](https://jasong.us/2WdRFNL). This allows you to quickly and easily add a specified user's GitHub avatar to your site.
- `jekyll-feed` - For usage, visit [jekyll/jekyll-feed](https://jasong.us/2WCveR0). This plugin will automatically generate an Atom feed at /feed.xml that can be overwritten.
- `jekyll-paginate` - For usage, visit [jekyll/jekyll-paginate](https://jasong.us/3drrhp1). While this plugin is no longer active, it remains the easiest way to paginate in GitHug pages.
- `jekyll-remote-theme` - For usage, visit [benbalter/jekyll-remote-theme](https://jasong.us/3d65jIj). This will allow you to point at a remove theme.
- `jekyll-seo-tag` - For usage, visit [jekyll/jekyll-seo-tag](https://jasong.us/2ynPApj). This provides many SEO tags at the head of the site. 
- `jekyll-sitemap` - For usage, visit [jekyll/jekyll-sitemap](https://jasong.us/2ynRztL). This plugin generates a sitemaps.org compatible sitemap for your site.

# Contributing
Bug reports and pull requests are welcome on GitHub at [https://github.com/jasongaylord/SpaacedOut](https://jasong.us/2ywUm3C).

# Development
I've blogged about getting started with themes and Jekyll. You can read more about it at [https://www.jasongaylord.com/blog/creating-a-jekyll-theme-from-windows](https://jasong.us/35luIer)

# License
The theme is available as open source under the terms of the [MIT License](https://jasong.us/2zlpRh5).

# Change Log
The changes made since version 1.x are documented below.

## Version 1.2.x - October 24, 2021
- BUG: Updated the tags and archive titles to "smartify" the quotes when used as a title

## Version 1.1.x - July 9, 2020
- FEATURE: Added the appropriate attributes to links for better accessibility and best practices for security. This will be reflected in a Google Lighthouse score.
- FEATURE: Updated the script that opens links in a new window to look for links that direct users to another area of a same page (`hash` link) so they don't open in a new window.

## Version 1.0.x - May 15, 2020
- BUG: Updated the tags page so the tags can be clicked
- BUG: Updated the issues with the pager so the first page could be browsed correctly and mobile works.