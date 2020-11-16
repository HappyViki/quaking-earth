# Quaking Earth

### I'm looking for software development work. [Send me a message through LinkedIn!](https://www.linkedin.com/in/veronica-eulenberg/)

This app was created because I wanted to visualize the earthquake on March 18th and its aftershocks in a way that makes sense to me. It was also a way for me to cope with what happened. What can I say, data visualization is calming!

There were two problems with my old code:
1. There were vulnerabilities in my code; it has been months since I updated it.
2. My code didn't match what was in GitHub Pages, and I got rid of the repo locally before pushing to remote branch.

I made a plan for updating it. It has evolved as I went through it. I thought it would be helpful to share it with you, so you can see how I plan and execute in an iterative fashion.

## How I updated this app
**First Draft**
1. Update all packages.
2. Rewrite the redux.

After I updated all the packages, there were still some vulnerabilities. I decided it would be easier to just use `create-react-app` and transfer all my component and data files to the new app instead of dealing with figuring out how to make all the versions work with each other, because the purpose of this app was simply to showcase my frontend skills and *I want to reduce as much time working on it as possible.*

Then, after creating the new app I realized that the newest version of Material-UI didn't work with the newest React that `create-react-app` used. I had to make a choice between downgrading React or choosing a different way to style the app.

After getting rid of the components that didn't work, I checked to make sure all the functionality was still there. And it was! Yay!

Anyway, I decided to use plain CSS, because I've been wanting to learn more about Flexbox. So, I got rid of all the Material-UI components, refactored the HTML, and put into place some basic flex styling to make it look decent.

**Second Draft**
1. Start somewhat fresh by using `create-react-app`, install previously used packages, transfer important files.
2. Get rid of Material-UI and make the app look decent by refactoring structure of components and writing basic styling.
3. Completely redo Redux.
4. Make it look better.

I didn't want to completely redo Redux, because that would take up too much extra time. The only thing that was really missing was the "delete panel" function.

I decided to try again at reading my code. I wasn't sure what I was doing wrong, so I read a few Stack Overflow answers and watched a few YouTube videos on Redux, and how to delete the current panel. I was having a hard time figuring out how to delete a panel and change the current index at the same time in Redux.

I figured it out. But as always, I thought I did what I was doing before. I don't know what the difference was. In any case, I feel that I know Redux just a little bit more through rewriting that functionality of the app.

**Third Draft**
1. Start somewhat fresh by using `create-react-app`, install previously used packages, transfer important files.
2. Get rid of Material-UI and make the app look decent by refactoring structure of components and writing basic styling.
3. Research how to delete from array in Redux
4. Fix the delete panel functionality.
5. Make it look better.
