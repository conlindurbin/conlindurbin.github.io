compass compile;
jekyll build;
cd conlindurbin.github.io;
git add --all;
git commit -m $1;
git push;