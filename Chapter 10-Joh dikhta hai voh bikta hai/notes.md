PostCSS - A tool for transforming CSS with Javascript. Tailwind uses PostCSS

Disadvantage of Tailwind
1) Code may become ugly as we build some complex UI
2) Comes with initial learning curv

## Explore all thw ways of writing css:-
CSS (Cascading Style Sheets) can be written in various ways, but the most common methods include:

* Inline Styles: Applying styles directly within HTML tags using the style attribute.
  ```html
  <div style="color: red; font-size: 16px;">This is a red text with 16px font size.</div>
  ```

* Internal Styles: Including styles within the HTML file using the `<style>` tag in the head section.
 ```html
<head>
  <style>
    body {
      background-color: #f0f0f0;
    }
  </style>
</head>
```
* External Styles: Using an external CSS file linked to the HTML file.
* 
  ```html
  <head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
  ```

* CSS Frameworks: Utilizing pre-built CSS frameworks like Bootstrap, Bulma, or Tailwind CSS.



# 1.How do we configure Tailwind?
Tailwind CSS is configured using the tailwind.config.js file. This file allows you to customize various aspects of Tailwind's default configuration. To configure Tailwind, follow these steps:

Install Tailwind CSS using npm or yarn:
```bash
npm install tailwindcss
```
* Generate a default tailwind.config.js file:
```bash
npx tailwindcss init
```
* Modify the generated tailwind.config.js file according to your project requirements. You can customize colors, fonts, breakpoints, and more.

# 2.In tailwind.config.js, what do all the keys mean (content, theme, extend, plugins)?
 * theme: This key allows you to customize various aspects of the default styling, such as colors, fonts, spacing, and more. You can extend or override the default values to match your design preferences.

* extend: This key is used to add or override styles in addition to the default Tailwind CSS styles. It is useful for extending the utility classes with custom styles.

* plugins: Tailwind CSS allows you to use plugins to add extra functionality. The plugins key in the configuration file is where you can specify and configure these plugins.

* content: This key is used to define the content files that Tailwind should scan for classes. By default, Tailwind scans your entire project, but you can use the content key to specify a subset of files or directories.

# 3.Why do we have a .postcssrc file?
The .postcssrc file is used to configure PostCSS, a tool for transforming styles with JavaScript plugins. Tailwind CSS utilizes PostCSS for processing and transforming its styles. The .postcssrc file contains configuration settings for PostCSS plugins, including those required by Tailwind.

Common configurations in a .postcssrc file might include:

Plugins: Listing the PostCSS plugins you want to use, such as Autoprefixer or CSSnano.
Options: Configuring options for the plugins you include.