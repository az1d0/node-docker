npm install -g now
echo "Deploying in now..."
# URL = $(now --public --docker -t $NOW_TOKEN)
now --public --docker -t $NOW_TOKEN
echo "Acabao"
# curl --silent -L $URL