npm install -g now
echo "Deploying in now..."
URL = $(now --public --docker -t $NOW_TOKEN)
echo "Running on $URL"
curl --silent -L $URL