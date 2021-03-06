---
path: '/blog/2012/07/30/jekyll-with-plugins-hosted-on-github-pages'
date: '2012-07-30'
title: 'Jekyll (with plugins!) hosted on GitHub Pages'
tags: [
  'Jekyll',
  'Git',
  'GitHub',
  'GitHub-Pages',
  'Ruby',
  'Liquid'
]
---

#### A little background

A while back I was bored and burned out on a programming project I had started, so I spun up a new design for my website. I also wanted to start using a static website generator and ended up choosing [Jekyll](http://jekyllrb.com). I chose Jekyll so I could host it for free with [GitHub Pages](http://pages.github.com/) as well as learn a little bit of [Ruby](http://www.ruby-lang.org/en/) and [Liquid](https://github.com/Shopify/liquid).

Everything about Jekyll and hosting it on GitHub Pages was going very smoothly up until I wanted to use a [Jekyll Plugin](https://github.com/mojombo/jekyll/wiki/Plugins). Jekyll (without plugins) had almost everything I wanted except it was missing tag support for blog posts. I went with ([jekyll-tagging](https://github.com/pattex/jekyll-tagging)) but this ended up breaking my site. I found out after reading the full GitHub Pages documentation that Jekyll plugins are not supported. I fully understand why GitHub doesn't allow this as it could be a security issue for GitHub.

#### Encountering a small problem

I was really set on using GitHub Pages as my host because who doesn't like free web hosting? So I did some research on this obstacle and found that some people just generated their site and pushed the static files to GitHub and added a file named `.nojekyll` to the repository so GitHub pages doesn't use Jekyll but instead [serves the files you push to the repo](https://help.github.com/articles/files-that-start-with-an-underscore-are-missing). My goal was to keep one repository with a master branch that contains only the static content generated by Jekyll and a dev branch that had everything Jekyll needed as well as the generated `_site`. I wasn't sure if this was possible so I asked on [Stack Overflow](http://stackoverflow.com/) if anyone knew if it could be done and if so how to do it because I was stuck.

#### Attempting to solve the problem

I received an [answer to my question](http://stackoverflow.com/questions/11678592/is-it-possible-to-have-a-github-repo-with-two-branches-that-contain-different-di) almost immediately with exactly what I needed! I would like to thank [Alexandr Priymak](http://stackoverflow.com/users/599922/alexandr-priymak) for helping me out and explaining his method and thinking very well. My Jekyll site with plugins is hosted on GitHub Pages thanks to him.

Programmers and other tech oriented people can seem unsocial and sometimes arrogant but it is people like Alexandr that remind me that communities like Stack Overflow, Reddit, and GitHub are filled with the best kind of people. These people take their time to help others out solely for the sake of helping (and possibly some internet points) and are passionate about software and technology in general.

I am very thankful and lucky to be part of these communities and I hope to start contributing back more as time goes on and I grow wiser.

Lastly on a more technical note if you would like to do what I have done and use one repository on GitHub to host a Jekyll site with plugins you can check out the Stack Overflow thread I linked above or just look at the following commands.

#### Problem solved!

These commands assume that you have a master branch and a development branch named them whatever you want. Mine are named master and dev.

This command creates a commit object of the development branches generated `_site` directory and then outputs the commits ID. We will need the ID for later so make sure that we are able to copy and paste it or at least view it.

```
echo 'description of what we are doing' | git commit-tree dev^{tree}:_site
```

Now that we have a commit object that contains only the static content in `_site` we want to update the master branch so that it only contains those files.

```

git update-ref refs/heads/master COMMIT_ID
```

So now we run a `checkout` on the master branch and should see only the contents of the `_site` directory.

```
git checkout master
```

This is exactly what we want but since we didn't specify a parent for the commit we will need to push to GitHub with a force push.

```

git push -f origin master
```

On the other hand we can specify a parent before the push which enables us to bypass the `-f` option on our git push.

```
echo 'description of what we are doing' | git commit-tree dev^{tree}:_site -p $(cat .git/refs/heads/master)
```

We don't want to have to do all these steps every time so instead we can do everything but the push in one step like this:

```

git update-ref refs/heads/master $(echo 'Add commit message here!' | git commit-tree dev^{tree}:_site -p $(cat .git/refs/heads/master))
```

And then we just checkout the master branch and push it to GitHub. Within the next few minutes the site will be built by GitHub Pages!

**_Update 08/07/2014_** - The above commands have worked fine for my mac, but on my Windows 7 box have had to modify the `git commit-tree dev^{tree}:_site`
portion of the above commands. The way I do it now looks like this: `git commit-tree dev:_site` so not a huge change, but I felt like I needed to document
it since I will most likely forget and come back to reference this post.

Here is the documentation for the commands we used with git:

- [git commit-tree](http://www.kernel.org/pub/software/scm/git/docs/git-commit-tree.html)
- [git update-ref](http://www.kernel.org/pub/software/scm/git/docs/git-update-ref.html)
- [git checkout](http://www.kernel.org/pub/software/scm/git/docs/git-checkout.html)
- [git push](http://www.kernel.org/pub/software/scm/git/docs/git-push.html)

Thanks for reading!
