# ShadowNode

Welcome to the ShadowNode site repository. In this repository, we host all of our documentation to successfully navigate through the maze that is ShadowNode! The goal of this site is to have the most accurate information related to all things ShadowNode at all times! Often though, things go out of date and/or are missing! If you notice this, and would like to fix this, please do! Look at [contributing](#contributing) to learn how to help update the site! 

## Contributing
We openly welcome contributions! If you would like to contribute, please head over to the site, and look under the "Wiki" section for a guide on contributing! 

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] Hugo
1. Preview your project: `hugo server`
1. Add content
1. Generate the website: `hugo` (optional)

Read more at Hugo's [documentation][].

### Preview your site

If you clone or download this project to your local computer and run `hugo server`,
your site can be accessed under `localhost:1313/hugo/`.

The layout used is the same as https://learn.netlify.com/en/, but the theme is changed! 

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.

[hugo]: https://gohugo.io
[install]: https://gohugo.io/overview/installing/
[documentation]: https://gohugo.io/overview/introduction/
