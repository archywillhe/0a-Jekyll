---
layout: dailylog
postType: dailylog
font: 
extraClasses: 
postType: dailylog
title: "Making backup for files in a directory every n minutes in case your text editor decides to revert some file back to its state x hours ago"
metaTitle:
metaDescription: 
publishedOn: 
updateAt: 
readingTime: 
published: 1
coverImg: 
subtitle:
subtitleBottom:
extract: meow
---

I just reinstalled my OS X recently, which not only enabled me to re-experience the joy of owning a new Mac, but also fixed problems like waking up into a partially slumber stage with a black screen and a movable cursor that is somehow useless. Since I was going to [`brew cask install`](http://stackoverflow.com/questions/27381531/how-to-install-sublime-text-3-using-homebrew) a brand new [Sublime Text Editor](http://www.sublimetext.com/), I decided to spend a bit more effort customizing it. After some googling and experimentation, these are my settings:

{% highlight JSON %}

{
    "bold_folder_labels": true,
    "caret_style": "phase",
    "color_scheme": "Packages/Color Scheme - Default/Blackboard.tmTheme",
    "draw_minimap_border": true,
    "draw_white_space": "all",
    "ensure_newline_at_eof_on_save": true,
    "fade_fold_buttons": false,
    "find_selected_text": true,
    "font_face": "Source Code Pro Light",
    "font_size": 14.0,
    "highlight_line": true,
    "ignored_packages":
    [
    ],
    "letter-spacing-length": 20,
    "line_padding_bottom": 1,
    "line_padding_top": 1,
    "rulers":
    [
        120
    ],
    "shift_tab_unindent": true,
    "spacegray_sidebar_font_normal": true,
    "spacegray_sidebar_tree_xlarge": true,
    "spacegray_tabs_auto_width": true,
    "spacegray_tabs_font_normal": true,
    "spacegray_tabs_large": true,
    "tab_size": 4,
    "theme": "Spacegray.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "vintage_start_in_command_mode": true,
    "word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?_",
    "word_wrap": true
}
{% endhighlight %}

(For the record Source Code Pro can be grabbed [here](https://github.com/adobe-fonts/source-code-pro); Spacegray [here](https://github.com/kkga/spacegray); and Blackboard [here](https://github.com/cfletcher1856/Theme-Blackboard))

<p class="text-center"><img src="/assets/img/sublime.png" alt="oh"></p>

This looks like a great environment to code in (I enabled [vintage mode](http://www.sublimetext.com/docs/2/vintage.html) too so there are vim magic in it ;3 ) until I learnt that sometimes the text editor would revert some file back to its state x hours ago with no reason at all. 

That is a nightmare. (Imagine happily committing your code only to learn all that you've written & tested no longer exist in the current dimensions in space-time.)

I still don't have a single idea what's causing this bug. But it has happened quite a few times and I have had my losses. Until I figure out what's causing this phenomenon and get it fixed, I should start to take precaution. 

Here is a simple system that uses [`watch`](http://linux.die.net/man/1/watch) with the help of `git` to make a backup of files in a folder every 90 seconds:

> `watch` can execute a line of code periodically in the terminal. The cool thing is you can watch it as it does.

1. Let's say this is the directory whose files you want to back up: `/Users/a/_/_`

2. Make a directory to keep the back up files (In my case I'm using `/Users/a/_/timeMachine`)

3. `cd` into it and do a `git init` to make it into a git repo.

4. Write a bash script that 
    1. Copy everything in the directory to the back up directory 
    2. Remove all the .git folders (because you can't include submodule as part of the commit)
    3. Git add & Commit everything
and save it as `script.sh`.

Here is my `script.sh`:

{% highlight bash %}
cd /Users/a/_
cp -rf _/* timeMachine
rm -rf timeMachine/*/.git
cd timeMachine
git add .
git commit -a -m "`date +%F-%T`"
{% endhighlight %}

After that, just run this script every 90 seconds using `watch` (You can install it with [brew](http://brew.sh/) if you don't have it: `brew install watch`).

{% highlight bash %}
watch -n 90 'bash script.sh'
{% endhighlight %}

That's it. Now every 90 seconds the changes you made in your project (e.g. `/Users/a/_/0a-.github.com`) would be recorded in the backup directory. You can view changes of the file using [`git log`](http://git-scm.com/docs/git-log):

{% highlight bash %}
cd /Users/a/_/timeMachine/0a-.github.com
git log -p myFile.js
{% endhighlight %}

Or do it in [a GUI Client](https://mac.github.com/). (They would show up in the Unsynced tab because all we are doing is just [committing](http://git-scm.com/docs/git-commit) and there is no [pushing](http://git-scm.com/docs/git-push) involved.)

<p class="text-center"><img src="/assets/img/timeMachine.jpg" alt="such time much machine"></p>