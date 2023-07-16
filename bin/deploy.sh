# run npm ci to clean install new and updated dependencies
npm ci

echo 'installed dependencies'
echo ''
echo ''

# run nuxi build and generate process
npm run build
npm run generate

echo 'generated all nuxt files'
echo ''
echo ''

# remove old dist directory
cd ..
rm -rf dist
echo 'old dist folder deleted'
echo ''
echo ''

cd nuxt

# copy all files from output directory into dist directory
rsync -av .output/public/* ../dist
echo "copied all files succesfully from output directory into dist directory"
echo ''
echo ''

# copy static files if needed
<<comment
rsync -av static/* ../dist
cd ../dist && mv _.htaccess .htaccess
cd ../nuxt

echo "copied static files succesfully into dist directory"
echo ''
echo ''
comment

# create ipx folder for fallback images
cd ../dist
mkdir _ipx && cd _ipx && mkdir _ && cd _ && mkdir _img && cd ../..

# copy images from img/ to _ipx/_/img/
rsync -av img/* _ipx/_/img

echo "Created fallback image directory"
echo ''
echo ''
