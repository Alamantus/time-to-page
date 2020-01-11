# Audiobook Time to Page Converter

Enter the ending time of the audio recording and the last page number in your text copy on the Setup tab, and this app will approximately convert the amount of time you've listened to the audiobook into the page you can pick up reading on and vice versa on the Calculator page!

You can save the numbers you've entered on the Setup page for later use under a unique name so you can pull it up again later without having to type it in each time using the "Save Setup" and "Load Setup" buttons at the top of the Setup tab.

Click the Question Mark (?) buttons next to each field header to get more information about what is expected in that field.

Finally, this version of the Time-to-Page calculator was written in React+Redux using Bootstrap 4 to style it simply to show that I know how to use it. Because this rewrite was so unnecessary, I decided to add some extra features to try to make up for the fact that the app went from about 13KB in size to over 400KB in size... But hey, that's modern web development, for you! All in all, that's still actually a lot smaller than I expected.

## Development

Install with `yarn`, test with `npm run dev`, and build with `npm run build`. Building sends it to `/docs`, which GitHub uses to render its pages.

There's some tomfoolery with parcel not putting the calculator.js output into the correct `old-version` folder, so after building, you need to move it from `/docs` to `/docs/old-version`. I'll figure out how to fix that later, but for now, tada!