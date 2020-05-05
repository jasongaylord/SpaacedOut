# Welcome to the SpaacedOut Jekyll Theme
Over the past several days I've been working on creating a new theme for Jekyll, called SpaacedOut. You can see the full details of this theme at
[jasongaylord/SpaacedOut](https://github.com/jasongaylord/SpaacedOut). This theme is a mashup of the 2019 version of [JasonGaylord.com](https://www.jasongaylord.com), the [Haacked theme](https://github.com/haacked/hackbar), and the [plainwhite theme](https://github.com/thelehhman/plainwhite-jekyll).
<!--more-->
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
This theme is typically used as a [remote theme on GitHub pages](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/) and through the Jekyll remote theme plugin [explained on my blog](https://www.jasongaylord.com/blog/creating-a-jekyll-theme-from-windows).

To use the theme, there are two different methods:

1. [Abbreviated Installation](#abbreviated-installation)
2. [Custom Installation](#custom-installation)

## Abbreviated Installation
You can get started quickly by adding the following to the `_config.yml` of your Jekyll site:

```yaml
remote_theme: jasongaylord/spaacedout
```

Next, you should copy all [settings from the SpaacedOut `_config.yml`](https://github.com/jasongaylord/spaacedout/blob/master/_config.yml) and past the values into your `_config.yml` file replacing everything. Note, if you have modified your `_config.yml` already, you should probably resort to the [Custom Installation](#custom-installation) instructions below. Of course, you'll want to modify the values to reflect your site (i.e. Change 'My Blog' to the title you'd like on your site).

If you are looking for futher customization, please continue. Otherwise, you should be ok to check in your changes and view the site in GitHub Pages. If everything came out ok, it should resemble this:

![](https://cdn.jasongaylord.com/images/2020/05/07/SpaacedOut-Theme.jpg)

In addition, there's full mobile support with a flyout menu:

![](https://cdn.jasongaylord.com/images/2020/05/07/SpaacedOut-Theme-Mobile.jpg)

## Custom Installation

Below you'll find a basic overview to customize the theme. In addition, each area of the configuration is explained via comments in the [`_config.yml`](https://github.com/jasongaylord/SpaacedOut/blob/master/_config.yml) Additional details to assist in customizing the theme can be found in the [Dissecting the Theme](#dissecting-the-theme) section below.

### Home Layout
`home.html` is the default page for the site and is the initial page that loads when your site loads. The current home layout includes a placeholder for text followed by a paginated list of posts. The placeholder will allow you to add content to `index.html` or `index.md` (located at the root of your site) which will be placed above the paginated list. This is a great way to introduce the visitors to your site.

In addition, if you include `<!--more-->` in your post, only the content above the comment will be shown as an excerpt on your homepage and within the post archives.

### Content Extras
Rather than overriding each of the includes or layouts simply to add content, I've added a mechanism to add content to the common areas of the site. The following are currently defined by the theme and can be additional markdown or html files found in your sites local `_includes` folder. These files can be defined under the `content` folder:

- `head-suffix` - This allows additional scripts and styles to be added to the head of the site.
- `header-suffix` - This allows for additional content to be dropped in between the title and the menu on the left side.

### Override Layout, Includes, or Style
Any of the layouts or includes can be overwritten. Simply copy over the file or directory to your site and modify as you see fit.

If you are looking for your own color scheme, fonts, or sizes, I'd recommend the following steps:

1. Create your own SASS file in the `assets` directory called `style.scss`.
2. Open up the _variables_ found in `_sass_\variables\variables.scss` in this theme into your new `style.scss` file.
3. Below the _variables_ contents you just copied, add a new line to import the `core.scss` file like:

```css
@import "core/core";
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
2. `assets\syntax-highlight.scss` - This applies syntax highlighting to the Rouge highlight plugin for Jekyll. This was modified slightly from the post found at [](https://textuploader.com/1odmf). 

### Included Pages
Inside of the `assets` folder, you'll find a `pages` directory. Currently, only the `archives.md` file exists inside of this directory. This file displays the _archive_ menu option in the theme and lists the posts in descending order by year.

### Scripts
Inside of the `assets` folder, you'll find a `js\utils.js` file. You'll notice that throughout the site, I'm not using a JavaScript framework, such as jQuery, or a CSS framework, like BootStrap. The goal is to keep this theme very lightweight. So, the `utils.js` file contains a namespaced list of functions.

### Plugins 
The following plugins are installed in the *SpaceOut* theme:

- `jekyll-avatar`
- `jekyll-feed`
- `jekyll-paginate`
- `jekyll-seo-tag` - For property information, visit [jekyll/jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md)
- `jekyll-sitemap`

# Contributing
Bug reports and pull requests are welcome on GitHub at [](https://github.com/jasongaylord/SpaacedOut). 

# Development
I've blogged about getting started with themes and Jekyl. You can read more about it at [https://www.jasongaylord.com/blog/creating-a-jekyll-theme-from-windows](https://jasong.us/35luIer)

# License
The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).